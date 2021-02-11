import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Flex, useColorMode } from "@chakra-ui/core";
import Head from "next/head";

export default function Container({ children }) {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "#050505",
  };
  const primarytextColor = {
    light: "#334259",
    dark: "#FAFAFA",
  };
  return (
    <>
      <Head>
        <title>Saumya Pandey</title>
      </Head>
      <NavBar />
      <Flex
        flexDirection="column"
        mx="auto"
        width="100%"
        maxW="750px"
        p={4}
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
}
