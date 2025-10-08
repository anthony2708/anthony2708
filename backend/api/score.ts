import type { Handler, HandlerEvent } from "@netlify/functions";
import jsonScore from "../public/data.json";
import dotenv from "dotenv"

dotenv.config();

// Allowed origin – replace with your frontend domain in production
const allowedOrigin: string = process.env.ALLOWED_ORIGIN ?? "*";

// Common headers used in all responses
const corsHeaders = {
  "Access-Control-Allow-Origin": allowedOrigin,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const handler: Handler = async (event: HandlerEvent) => {
  // Handle preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204, // No content
      headers: corsHeaders,
      body: "",
    };
  }

  try {
    const bodyJSON = JSON.parse(event.body ?? "{}");

    if (!bodyJSON?.data?.id) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({
          status: 400,
          message: "Missing required 'id' in request body.",
        }),
      };
    }

    const match = jsonScore.find(entry => entry.id == bodyJSON.data.id);

    if (match) {
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({
          status: 200,
          info: match,
        }),
      };
    }

    return {
      statusCode: 404,
      headers: corsHeaders,
      body: JSON.stringify({
        status: 404,
        message: "No data of the learner.",
      }),
    };
  } catch (error) {
    console.error("Error in /score function:", error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        status: 500,
        message: "Internal server error.",
      }),
    };
  }
};
