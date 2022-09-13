import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Product({ product }) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Head>
      <Box as="main" bg={"orange.50"} paddingY={"32"} justify={"center"}>
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
            bg={"orange.50"}
          >
            <Stack spacing={6} w={"full"} maxW={"container.lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text position={"relative"} marginBottom={"16px"}>
                  {product.name}
                </Text>
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }}>
                {product.description}
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  rounded={"full"}
                  size="lg"
                  bg={"orange.500"}
                  color={"white"}
                  _hover={{
                    bg: "orange.600",
                  }}
                  _active={{
                    bg: "orange.700",
                  }}
                >
                  Buy now {product.price}{" "}
                  {product.currency.view.defaultCurrency}
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={"Book Image"}
              objectFit={"cover"}
              rounded="md"
              boxShadow="lg"
              src="/the-flying-trunk-book.jpg"
            />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
