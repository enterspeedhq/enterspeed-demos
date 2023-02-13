const call = async (query) => {
  const url = `https://delivery.enterspeed.com/v2?${query}`;
  const response = await fetch(new Request(url), {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
    },
  });
  return response.json();
};

export const getByHandle = async (handle) => {
  const response = await call(`handle=${handle}`);
  return response.views;
};

export const getByUrl = async (url) => {
  const response = await call(`url=${url}`);

  return {
    ...response.route,
    ...response.meta,
  };
};

export const getRoutes = async () => {
  const response = await fetch(
    new Request("https://api.enterspeed.com/routes/v1?first=100"),
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
      },
    }
  );
  return response.json();
};
