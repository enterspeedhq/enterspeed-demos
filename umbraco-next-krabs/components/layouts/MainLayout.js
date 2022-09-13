import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

const MainLayout = ({ children, tenant, navigation }) => {
  return (
    <>
      <Head>
        <title>{tenant.brandName}</title>
      </Head>
      <ChakraProvider>
        <Navbar tenant={tenant} navigation={navigation} />
        <Box minH="calc(100vh - 180px)">{children}</Box>
        <Footer tenant={tenant} />
      </ChakraProvider>
    </>
  );
};
export default MainLayout;
