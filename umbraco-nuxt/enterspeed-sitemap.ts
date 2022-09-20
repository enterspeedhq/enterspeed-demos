import axios, { AxiosResponse } from "axios";
import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";
import { IRoutesResponse } from "./enterspeed-types";

const getRoutes = async () => {
  if (
    !process.env.ENTERSPEED_API_PATH ||
    !process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY
  ) {
    return null;
  }

  const headers = {
    "X-Api-Key": process.env.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
  };

  var routesParams = new URLSearchParams();
  routesParams.append("first", "100");

  const routesReqUrl = new URL(process.env.ENTERSPEED_API_PATH + "/routes/v1");
  routesReqUrl.search = routesParams.toString();

  const routesReq: AxiosResponse<IRoutesResponse> = await axios.get(
    routesReqUrl.toString(),
    {
      headers,
    }
  );

  return routesReq.data.results;
};

export const generateEnterspeedSitemap = async () => {
  const routes = await getRoutes();

  if (!routes) {
    return;
  }

  const sitemap = new SitemapStream({
    hostname: process.env.DOMAIN,
  });

  const writeStream = createWriteStream("./public/sitemap.xml");
  sitemap.pipe(writeStream);

  routes.forEach((x) => {
    sitemap.write({
      url: x.url,
      lastmod: new Date(x.updatedAt).toISOString(),
    });
  });

  sitemap.end();
};
