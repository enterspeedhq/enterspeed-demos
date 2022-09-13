import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      bg={"orange.100"}
      py={4}
      justify={"center"}
      margin="0 auto"
      borderTop="5px solid"
      borderColor="orange.400"
    >
      <Text>&copy; 2022 The Flying Trunk. All rights reserved</Text>
    </Flex>
  );
}
