import { Heading, Container, Box } from "@chakra-ui/react";
import * as sanitizeHtml from "sanitize-html";

const Page = ({ view }) => {
  const c = view.content;

  const bodyText = () => {
    return { __html: sanitizeHtml(c.bodyText) };
  };

  console.log("c", c);
  return (
    <Container maxW="container.xl" py="8">
      <Heading as="h1" pb="8">
        {c.pageTitle}
      </Heading>
      <Box dangerouslySetInnerHTML={bodyText()} />
    </Container>
  );
};
export default Page;
