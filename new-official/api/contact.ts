import type { Handler, HandlerEvent } from "@netlify/functions";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const handler: Handler = async (event: HandlerEvent) => {
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
    const formData = {};
    for (const [key, value] of params.entries()) {
        formData[key] = value;
    }

    // Send data to the external API
    try {
        const response = await fetch(process.env.SUBMISSION_URL || "", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        });

        // Handle non-200 responses
        if (!response.ok) {
            console.error('API call failed:', response.status);
            return {
                statusCode: response.status,
                body: JSON.stringify({
                    status: response.status,
                    message: "Gửi thông tin liên hệ không thành công.",
                }),
            };
        }

        // Redirect to thank you page on success
        return {
            statusCode: 303,
            headers: {
                Location: "/thankyou",
            },
        }

    // Handle errors
  } catch (error) {
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