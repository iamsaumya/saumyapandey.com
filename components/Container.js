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
      {/* <Flex
        backgroundColor="hsl(208,95%,68%)"
        width="100%"
        color="#fefefe"
        p={4}
        fontSize={["lg", , "xl", "2xl"]}
        fontWeight="bold"
        align="center"
        justifyContent="center"
      >
        <Flex wordBreak="break-word">
          I am looking for remote or in-person work!
        </Flex>
      </Flex> */}
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
