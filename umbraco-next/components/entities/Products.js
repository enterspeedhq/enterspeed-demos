import PageHeader from "../PageHeader";
import { SimpleGrid, Box, Text, Link, VStack, Image } from "@chakra-ui/react";
import Head from "next/head";

const Product = ({ product }) => {
  return (
    <Link
      href={product.href}
      _hover={{
        textDecoration: "none",
      }}
    >
      <VStack>
        <Box
          boxShadow="lg"
          rounded="md"
          bg="white"
          textAlign="center"
          transition="all 0.3s"
          bottom="0"
          position="relative"
          _hover={{
            boxShadow: "xl",
            bottom: "4px",
            cursor: "pointer",
          }}
        >
          <Image
            alt="Default product image"
            borderTopRadius={"md"}
            src="/the-flying-trunk-book.jpg"
          />
          <Box p="6">
            <Text fontWeight={"medium"}>{product.name}</Text>

            <Text paddingY={6} color={"gray.500"} fontStyle={"italic"}>
              {product.description}
            </Text>

            <Text fontSize={"md"}>
              {product.price} {product.currency.view.defaultCurrency}
            </Text>
          </Box>
        </Box>
      </VStack>
    </Link>
  );
};

export default function Products({ view }) {
  return (
    <>
      <Head>
        <title>{view.headline}</title>
        <meta description={view.seoMetaDescription} />
      </Head>
      <PageHeader title="Products" />
      <SimpleGrid
        columns={{ base: "0", md: "3" }}
        spacing={10}
        maxWidth={"container.lg"}
        marginX={{ base: "4", md: "auto" }}
        paddingY={"10"}
      >
        {view.products.map((p, index) => {
          return <Product key={`product-${index}`} product={p.view} />;
        })}
      </SimpleGrid>
    </>
  );
}
