import { Container } from "@chakra-ui/layout";
import Block from "../Block";
import PageHeader from "../PageHeader";
import Head from "next/head";

export default function ContentPage({ view }) {
  return (
    <>
      <Head>
        <title>{view.headline}</title>
        <meta name="description" content={view.seoMetaDescription} />
      </Head>
      <PageHeader title={view.headline} />
      <Container
        py="20"
        maxW="container.lg"
        sx={{
          p: {
            marginTop: "40px",
            fontFamily: "Gentium Book Basic",
            fontSize: "20px",
            lineHeight: "35px",
            color: "gray.700",
          },
          "p:first-child::first-letter": {
            fontSize: "60px",
            marginRight: "4px",
            fontFamily: "Henny Penny",
            color: "orange.800",
            verticalAlign: "middle",
          },
          "p:first-child": {
            marginTop: "0",
          },
        }}
      >
        {view.blocks?.map((c, index) => {
          return <Block key={index} block={c} />;
        })}
      </Container>
    </>
  );
}
