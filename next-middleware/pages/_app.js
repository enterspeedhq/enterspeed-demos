import "@styles/globals.css";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Enterspeed ♥ Next Middleware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
