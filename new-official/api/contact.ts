import type { Handler, HandlerEvent } from "@netlify/functions";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const handler: Handler = async (event: HandlerEvent) => {
    // Handle CORS preflight requests
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
        },
        body: 'OK',
      };
    }

    // Only allow POST requests
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({
          status: 405,
          message: "Phương thức không được hỗ trợ.",
          english: "Method not allowed.",
        }),
      };
    }

    // Parse form data
    const params = new URLSearchParams(event.body ?? "");
    const formData: { [key: string]: string } = {};
    for (const [key, value] of params.entries()) {
        formData[key] = value;
    }

    formData._next = "https://www.builetuananh.name.vn/thankyou";

    // Send data to the external API
    try {
        const response = await fetch(process.env.SUBMISSION_URL || "", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        // Handle non-200 responses
        if (!response.ok) {
            console.error('API call failed:', result);
            const status = typeof result === "object" && result !== null && "status" in result ? (result as any).status : response.status;
            return {
                statusCode: status,
                body: JSON.stringify({
                    status: status,
                    message: "Gửi thông tin liên hệ không thành công.",
                }),
            };
        }

        // Redirect to thank you page on success
        return {
            statusCode: 303,
            headers: {
                location: "https://www.builetuananh.name.vn/thankyou"
            }
        }

    // Handle errors
  } catch (error) {
        console.error('Error during API call:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                status: 500,
                message: "Hệ thống đang bận. Xin vui lòng thử lại sau.",
                error: error instanceof Error ? error.message : String(error),
            }),
        };
    }
};

export { handler };