import "@styles/globals.css";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Enterspeed ♥ Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default Application;
