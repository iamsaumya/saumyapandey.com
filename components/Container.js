import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import Flex from "./Flex";
import styled from "styled-components";
import ClientOnly from "./ClientOnly";

export default function Container({ children }) {
  return (
    <>
      <Head>
        <title>Saumya Pandey</title>
      </Head>
      <NavBar />
      <main>
        <ContainerWrapper column>{children}</ContainerWrapper>
      </main>
      <Footer />
    </>
  );
}

const ContainerWrapper = styled(Flex)`
  margin: auto;
  width: 100%;
  max-width: 740px;
  padding: var(--16px) var(--20px) 0px;
`;
