const call = async (query, preview) => {
  const url = `https://delivery.enterspeed.com/v1?${query}`;
  const response = await fetch(new Request(url), {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": preview
        ? process.env.ENTERSPEED_PREVIEW_ENVIRONMENT_API_KEY
        : process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
    },
  });
  return response.json();
};

export const getByHandle = async (handle, preview, asArray = true) => {
  const response = await call(`handle=${handle}`, preview);
  return asArray ? response.views[handle] : response.views;
};

export const getByUrl = async (url, preview) => {
  const response = await call(`url=${url}`, preview);

  return {
    ...response.route,
    ...response.meta,
  };
};
