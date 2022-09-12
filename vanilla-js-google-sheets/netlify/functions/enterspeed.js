require("dotenv").config();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const API_ENDPOINT = "https://delivery.enterspeed.com/v1?handle=movies";

exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      headers: {
        "Content-Type": "application/json",
        "X-Api-key": process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
      },
    });
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
