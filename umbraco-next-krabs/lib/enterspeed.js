const call = async (query, tenant) => {
  const environmentClient = {
    devbeer: process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
    tobeer: process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
    lorembeer: process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
    icebeer: process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
  };

  const url = `https://delivery.enterspeed.com/v1?${query}`;
  const response = await fetch(new Request(url), {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": environmentClient[tenant],
    },
  });

  return response.json();
};

export const getByHandle = async (handle, tenant) => {
  const response = await call(`handle=${handle}`, tenant);
  return response.views;
};

export const getByUrl = async (url, tenant) => {
  const response = await call(`url=${url}`, tenant);
  return {
    ...response.route,
    ...response.meta,
  };
};
