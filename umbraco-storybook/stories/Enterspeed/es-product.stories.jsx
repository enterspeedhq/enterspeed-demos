import React from "react";
import { withHeadless } from "storybook-addon-headless";

import EsProduct from "./es-product";

export default {
  title: "Enterspeed/Examples",
  component: EsProduct,
  decorators: [
    withHeadless({
      restful: {
        baseURL: "https://delivery.enterspeed.com/v1/?url=",
        headers: {
          "X-Api-Key":
            process.env.STORYBOOK_ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
        },
      },
    }),
  ],
  parameters: {
    headless: {
      EsExampleData: {
        query: "/products/the-flying-trunk-fairy-tales-by-h-c-andersen/",
        autoFetchOnInit: true,
      },
    },
  },
};

// Headless data is second parameter, first parameter is "args" e.g.: https://github.com/ArrayKnight/storybook-addon-headless/blob/master/src/examples/restful.stories.tsx
export const Product = (args, { data }) => {
  return data?.EsExampleData ? <EsProduct {...data} /> : null;
};
