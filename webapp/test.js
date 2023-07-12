const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL + "&application_name=$ url_shortener",
        }
    }
})


const check = async (urlToCheck) => {
    const url = await prisma.URLShortener.findMany({
        where: {
            longUrl: {
                endsWith: urlToCheck,
            }
        }
    })

    if (url.length > 0) {
        prisma.$disconnect();
        console.log(url[0].shortUrl)
    }
    else {
        prisma.$disconnect();
        console.log("No url found")
    }
}

check("https://google.com")