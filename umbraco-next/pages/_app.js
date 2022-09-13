import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import TopNav from "../components/TopNav";
import "@fontsource/henny-penny";
import "@fontsource/gentium-book-basic";
import Head from "next/head";
import Footer from "../components/Footer";
import { getByHandle } from "../lib/enterspeed";
import PreviewBar from "../components/PreviewBar";
import {
  managePreviewSessionStorage,
  checkPreviewSessionStorage,
} from "../helpers/previewSessionStorage";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "orange.100",
      },
    }),
  },
});

function App({ Component, pageProps, navigation, preview, CSRpreview }) {
  managePreviewSessionStorage(CSRpreview);
  const previewSessionStorage = checkPreviewSessionStorage();

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ChakraProvider theme={theme}>
        <TopNav nav={navigation.navigationItems} />
        <Component {...pageProps} />
        <Footer />
        {(preview || previewSessionStorage) && <PreviewBar />}
      </ChakraProvider>
    </>
  );
}

App.getInitialProps = async (context) => {
  // If you use CSR, you need to handle preview mode via session storage
  // This is done by first accessing the query string send via the api/preview/index.js
  // We then check if the query string is set to "enabled" and contains our secret token

  const queryString = context.router.query;

  let CSRpreview;

  if (
    queryString.preview === "true" &&
    queryString.secret === process.env.ENTERSPEED_PREVIEW_SECRET
  ) {
    CSRpreview = "enabled";
  }

  if (queryString.preview === "clear") {
    CSRpreview = "clear";
  }

  let preview;

  // Check if preview mode is already set via Next.js preview mode
  if (context.router.isPreview) {
    preview = true;
  }

  // If preview is true, we fetch our preview data (via /lib/enterspeed.js)
  const data = await getByHandle("navigation", preview);

  return {
    navigation: data,
    preview,
    CSRpreview,
  };
};

export default App;
