import {
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Link,
  Box,
  Button,
} from "@chakra-ui/react";

const Beer = ({ view }) => {
  const c = view.content;
  return (
    <Container maxW="container.xl" py="8">
      <SimpleGrid columns="2">
        <Image src={c.image[0].url} />
        <Box height="100%" bgColor="gray.200" p="8">
          <VStack alignItems="flex-start" pb="8">
            <Heading as="h1" pb="4">
              {c.beerName}
            </Heading>
            <Text>
              <Text as="i">Type:</Text> {c.type}
            </Text>
            <Text>
              <Text as="i">ABV:</Text> {c.abv}
            </Text>
            <Text pt="4">{c.description}</Text>
          </VStack>
          <Link mt="16" href="../beers">
            <Button variant="link">👈 Back to beers</Button>
          </Link>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
export default Beer;
