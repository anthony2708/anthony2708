import type { Handler, HandlerEvent } from "@netlify/functions";
import jsonScore from "../public/data.json";

export const handler: Handler = async (event: HandlerEvent) => {
  try {
    let bodyJSON = JSON.parse(event.body ?? "{}");
    for (let i = 0; i < jsonScore.length; i++) {
      if (jsonScore[i].id == bodyJSON.data.id) {
        return {
          statusCode: 200,
          body: JSON.stringify({
            status: 200,
            info: jsonScore[i],
          }),
        };
      }
    }
    // If no matching id is found, return 404
    return {
      statusCode: 404,
      body: JSON.stringify({
        status: 404,
        message: "No data of the learner.",
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: 500,
        message: "Internal server error.",
      }),
    };
  }
};
