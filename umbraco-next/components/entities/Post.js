import {
  SimpleGrid,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import PostTile from "../PostTile";
import Head from "next/head";

export default function Post({ view }) {
  return (
    <>
      <Head>
        <title>{view.title}</title>
        <meta name="description" content={view.teaser} />
      </Head>
      <Box as="main" bg={"blue.50"} paddingY={"32"} justify={"center"}>
        <Stack
          maxW={{ md: "container.lg" }}
          marginX={"auto"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            p={8}
            flex={1}
            align={"center"}
            justify={"center"}
            bg={"blue.50"}
          >
            <Stack spacing={6} w={"full"} maxW={"container.lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text position={"relative"} marginBottom={"16px"}>
                  {view.title}
                </Text>
              </Heading>
              <Text fontSize={{ base: "md", lg: "md" }}>
                Published: {view.publishDate.replace("T", " ")}
                {/* <br />Tags: {view.tags.join(", ")} */}
              </Text>
              <Text fontSize={{ base: "md", lg: "lg" }}>
                {view.teaser}
              </Text>
            </Stack>
          </Flex>
          {view.image && 
            <Flex flex={1}>
              <Image
                alt={view.title}
                title={view.title}
                objectFit={"cover"}
                rounded="md"
                boxShadow="lg"
                src={view.image.view.url}
              />
            </Flex>
          }
        </Stack>
      </Box>
      {/* {view.relatedPosts.length > 0 &&
        <>
          <Box textAlign={'center'} marginTop={10}>
            <Heading
              fontWeight={600}
              as="h2"
            >
            Related posts
            </Heading>
          </Box>
          <SimpleGrid
            columns={{ base: "0", md: "3" }}
            spacing={10}
            maxWidth={"container.lg"}
            marginX={{ base: "4", md: "auto" }}
            paddingY={"10"}
          >
            {view.relatedPosts.map((p, index) => {
              return <PostTile key={`post-${index}`} post={p.view} />;
            })}
          </SimpleGrid>
        </>
      } */}
    </>
  );
}