import {
  Flex,
  Button,
  Link,
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

const Home = ({ view }) => {
  const headerHeight = 80;
  const footerHeight = 80;

  const c = view.content;

  return (
    <Box
      backgroundImage={c.HeroBackgroundImage[0].url}
      backgroundSize="cover"
      backgroundPosition="center center"
      position="relative"
      _before={{
        content: "''",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Container maxW="container.lg">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          h={`calc(100vh - (${headerHeight + footerHeight}px))`}
        >
          <Heading as="h1" color="#fff" pb="4">
            {c.heroHeader}
          </Heading>
          <Text color="gray.200" pb="8" textAlign="center">
            {c.heroDescription}
          </Text>
          <Link href="/beers">
            <Button>{c.heroCTACaption}</Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};
export default Home;
