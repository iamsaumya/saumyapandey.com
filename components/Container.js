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
      <ClientOnly>
        <NavBar />
        <ContainerWrapper column>
          {children}
          <Footer />
        </ContainerWrapper>
      </ClientOnly>
    </>
  );
}

// margin top for fixed positioned element

const ContainerWrapper = styled(Flex)`
  margin: auto;
  width: 100%;
  margin-top: 3.5rem;
  max-width: 750px;
  padding: 1rem;
  color: #fefefe;
  background-color: #202124;
`;
