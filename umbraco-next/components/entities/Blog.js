import { Container, SimpleGrid } from "@chakra-ui/layout";
import PageHeader from "../PageHeader";
import PostTile from "../PostTile";
import Head from "next/head";

export default function Blog({ view }) {
  return (
    <>
      <Head>
        <title>{view.headline}</title>
        <meta name="description" content={view.seoMetaDescription} />
      </Head>
      <PageHeader title={view.headline} />
      
      <SimpleGrid
        columns={{ base: "0", md: "3" }}
        spacing={10}
        maxWidth={"container.lg"}
        marginX={{ base: "4", md: "auto" }}
        paddingY={"10"}
      >
        {view.posts.map((p, index) => {
          return <PostTile key={`post-${index}`} post={p} />;
        })}
      </SimpleGrid>
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
