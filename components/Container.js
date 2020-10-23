import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Flex } from "@chakra-ui/core";
import Head from "next/head";

export default function Container({ children }) {
  return (
    <>
      <Head>
        <title>My new cool app</title>
      </Head>
      <Flex flexDirection="column" mx="auto" width="100%" maxW="700px" mt="3em">
        <NavBar />
        {children}
        <Footer />
      </Flex>
    </>
  );
}
