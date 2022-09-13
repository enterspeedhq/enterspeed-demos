import Image from "next/image";
import { Box, Flex, Link, Button } from "@chakra-ui/react";

const Navbar = ({ tenant, navigation }) => {
  const navigationItems = navigation.navigation.navigationItems;
  return (
    <Flex
      p="4"
      bgColor={tenant.brandColor}
      alignItems="center"
      justifyContent="space-between"
    >
      <Link href="/">
        <Flex
          alignItems="center"
          _hover={{
            opacity: 0.8,
          }}
        >
          <Image
            src={tenant.logo.url}
            width={tenant.logo.width}
            height={tenant.logo.height}
          />
          <Box
            ml="4"
            p="2"
            borderRadius="lg"
            color="#fff"
            bgColor={tenant.brandColor}
          >
            {tenant.brandName}
          </Box>
        </Flex>
      </Link>
      <Flex>
        {navigationItems.map((nav) => (
          <Link key={nav.view.label} href={nav.view.href} mx="4">
            <Button
              color="#fff"
              _hover={{
                opacity: 0.8,
              }}
              variant="link"
            >
              {nav.view.label}
            </Button>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
