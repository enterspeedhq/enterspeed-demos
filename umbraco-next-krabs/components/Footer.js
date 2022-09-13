import { Flex } from "@chakra-ui/react";

const Footer = ({ tenant }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      height="80px"
      bgColor={tenant.brandColor}
      color="#fff"
      alignItems="center"
      justifyContent="center"
    >
      Copyright {tenant.brandName} {currentYear}. Drink Responsibly.
    </Flex>
  );
};

export default Footer;
