import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Flex } from "@chakra-ui/core";
import Head from "next/head";

export default function Container({ children }) {
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
        color="#fefefe"
        bg="#202124"
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
}
