import { Box, Button, Link, Portal } from "@chakra-ui/react";

const PreviewBar = () => {
  return (
    <>
      <Portal>
        <Box
          width="100%"
          backgroundColor="blue.100"
          position="fixed"
          bottom="0"
          p="2"
          display="flex"
          justifyContent="center"
        >
          You&apos;re currently in preview mode. This content may differ from
          the published.
          <Link
            href="../../../api/preview/clear"
            _hover={{ textDecoration: "none" }}
          >
            <Button size="xs" ml="4" colorScheme="blue" bg="blue.500" link="">
              Exit preview mode
            </Button>
          </Link>
        </Box>
      </Portal>
    </>
  );
};

export default PreviewBar;
