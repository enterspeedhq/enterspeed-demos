import { useNavigation } from "~/stores/navigation";
import { useContent } from "~/stores/content";
import { useDictionaries } from "./stores/dictionaries";
import {
  IDictionaryLanguage,
  IEnterspeedDictionaryItem,
  IEnterspeedResponse,
} from "./enterspeed-types";

export const connect = async () => {
  const { $config, ssrContext } = useNuxtApp();

  const currentRoute = useRoute();
  const router = useRouter();
  const contentStore = useContent();
  const navigation = useNavigation();
  const dictionaries = useDictionaries();

  var params = new URLSearchParams();

  // If navigation havent been loaded, add them to the request
  if (!navigation.hasItems) {
    params.append("handle", "navigation");
  }

  // If dictionaries havent been loaded, add them to the request
  if (!dictionaries.hasLoaded) {
    params.append("handle", `dictionaries-${dictionaries.getCurrentLanguage}`);
  }

  const url = decodeURIComponent(currentRoute.fullPath);
  params.append("url", url);

  const reqUrl = new URL($config.DELIVERY_API_PATH);
  reqUrl.search = params.toString();

  const headers = {
    "X-Api-Key": $config.ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY,
  };

  const req = await fetch(reqUrl.toString(), {
    headers,
  });

  let { meta, route, views } = (await req.json()) as IEnterspeedResponse;

  if (views) {
    // If navigation is fetched, add them to the application
    if (views.navigation?.navigationItems) {
      navigation.setItems(views.navigation.navigationItems);
    }

    // If dictionaries are fetched, add them to the application
    if (views.dictionaries?.translations) {
      // Transforming enterspeed dictionaries into a dictionary language
      const translations: IDictionaryLanguage =
        views.dictionaries.translations.items.reduce(
          (a: IEnterspeedDictionaryItem, v: IEnterspeedDictionaryItem) => ({
            ...a,
            [v.key]: v.translation,
          }),
          {}
        );

      dictionaries.setCurrentTranslations(translations);
    }
  }

  switch (meta.status) {
    case 404:
      // Fetch the schema with the "notfound" handle when status is 404
      var notFoundParams = new URLSearchParams();
      notFoundParams.append("handle", "notfound");

      const notFoundReqUrl = new URL($config.DELIVERY_API_PATH);
      notFoundReqUrl.search = notFoundParams.toString();

      const notFoundReq = await fetch(notFoundReqUrl.toString(), {
        headers,
      });

      let notFoundData = await notFoundReq.json();
      route = notFoundData.views.notFound;

      if (process.server) {
        const error = new Error();
        (error as any).statusCode = 404;
        (ssrContext as any).nuxt.error = error;
      }

    case 301:
      // On 301 status, create a redirect
      if (ssrContext) {
        const { res } = ssrContext;

        if (meta.redirect) {
          res.writeHead(301, {
            Location: meta.redirect,
          });
          res.end();
        }
      } else {
        if (meta.redirect) {
          window.location.replace(meta.redirect);
        }
      }

    default:
      break;
  }

  contentStore.setContent({
    meta,
    route,
  });

  return {
    meta,
    route,
  };
};
