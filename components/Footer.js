import React from "react";
import Socials from "../components/Socials";
import Flex from "../components/Flex";
import styled from "styled-components";

const Footer = () => {
  return (
    <footer>
      <Container align="center" column>
        <Socials />
      </Container>
    </footer>
  );
};

const Container = styled(Flex)`
  margin-top: 2rem;
`;
export default Footer;
