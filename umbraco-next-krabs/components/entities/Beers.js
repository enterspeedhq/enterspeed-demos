import {
  Text,
  Image,
  VStack,
  Box,
  SimpleGrid,
  Container,
  Heading,
  Link,
} from "@chakra-ui/react";

const Beers = ({ view }) => {
  const c = view.content;

  return (
    <Container maxW="container.xl" py="8">
      <Heading as="h1" pb="16" textAlign="center">
        Welcome to the wonderful world of beer
      </Heading>
      <SimpleGrid columns={3} spacing={10}>
        {c.map((beer) => (
          <BeerCard
            url={beer.view.url}
            name={beer.view.content.beerName}
            image={beer.view.content.image[0].url}
            abv={beer.view.content.abv}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default Beers;

const BeerCard = ({ name, image, abv, url }) => {
  return (
    <Link
      href={url}
      _hover={{
        cursor: "pointer",
        opacity: 0.8,
      }}
    >
      <VStack
        border="1px solid"
        borderColor="gray.200"
        borderRadius="4"
        backgroundColor="gray.200"
      >
        <Image
          src={image}
          alt={name}
          borderTopLeftRadius="4"
          borderTopRightRadius="4"
        />
        <Box py="4" textAlign="center">
          <Text fontWeight="bold">{name}</Text>
          <Text>{abv}</Text>
        </Box>
      </VStack>
    </Link>
  );
};
