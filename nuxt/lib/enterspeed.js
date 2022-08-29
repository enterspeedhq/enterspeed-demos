const call = async (query) => {
  const config = useRuntimeConfig();

  const url = `https://delivery.enterspeed.com/v1?${query}`;
  const response = await useFetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": config.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
    },
  });
  return response.data._value;
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
