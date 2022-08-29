import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

const Layout = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
