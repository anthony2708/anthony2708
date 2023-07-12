const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

dotenv.config()
const history = {}
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL + "&application_name=$ url_shortener",
        }
    }
})

const rateLimit = (ip, timeout = 1000) => {
    if (history[ip] > Date.now() - timeout) {
        return true
    }
    history[ip] = Date.now()
    return false
}

const checkUrl = (string) => {
    let url;
    try {
        url = new URL(string);
        return Boolean(url.protocol === "http:" || url.protocol === "https:");
    } catch (error) {
        return false
    }
}

exports.handler = async function (event) {
    try {
        if (rateLimit(event.headers['client-ip']) == true) {
            return {
                statusCode: 429,
                body: JSON.stringify({
                    status: 429,
                    message: "Hệ thống đang bận. Xin vui lòng thử lại sau.",
                }),
            }
        }
        if (event.httpMethod !== "POST") {
            return {
                statusCode: 405,
                body: JSON.stringify({
                    status: 405,
                    message: "Phương thức không được hỗ trợ.",
                }),
            }
        }
        const body = JSON.parse(event.body)
        if (!body.data.url) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    status: 400,
                    message: "Không có thông tin. Xin vui lòng thử lại.",
                }),
            }
        }
        if ((!checkUrl(body.data.url))) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    status: 400,
                    message: "Đường dẫn không hợp lệ. Xin vui lòng thử lại.",
                }),
            }
        }
        // Check if url exists in database
        const url = await prisma.URLShortener.findMany({
            where: {
                longUrl: {
                    endsWith: body.data.url,
                }
            }
        })

        if (url.length > 0) {
            prisma.$disconnect();
            return {
                statusCode: 200,
                body: JSON.stringify({
                    status: 200,
                    message: decodeURIComponent(url[0].shortUrl),
                }),
            }
        }
        else {
            // If not exists, fetch and save to database
            const response = await fetch("https://cleanuri.com/api/v1/shorten", {
                method: "POST",
                body:
                    `url=${encodeURIComponent(body.data.url)}`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });
            const data = await response.json();
            if (data.result_url != undefined) {
                await prisma.URLShortener.create({
                    data: {
                        longUrl: body.data.url,
                        shortUrl: decodeURIComponent(data.result_url),
                    }
                });
                prisma.$disconnect();
                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        status: 200,
                        message: decodeURIComponent(data.result_url),
                    }),
                }
            } else {
                prisma.$disconnect();
                return {
                    statusCode: 404,
                    body: JSON.stringify({
                        status: 404,
                        message: "Không thể tìm thấy đường dẫn mà bạn yêu cầu. Xin vui lòng thử lại.",
                    }),
                }
            }
        }
    } catch (error) {
        prisma.$disconnect();
        return {
            statusCode: 404,
            body: JSON.stringify({
                status: 404,
                error: error.message,
                stack: error.stack,
                message: "Không thể tìm thấy đường dẫn mà bạn yêu cầu. Xin vui lòng thử lại.",
            }),
        }
    }
}