import React from "react";
import Socials from "./Socials";
import Flex from "../components/Flex";
import styled from "styled-components";
import { CustomLink } from "./MDXComponents";

const Introduction = () => {
  return (
    <Container column justify="center">
      <Title>
        Saumya is just another frontend engineer struggling with CSS, frontend
        tooling and whatnot
      </Title>
      <Info>
        I tinker with web at{" "}
        <CustomLink href="https://www.lyearn.com?ref=iamsaumya" isExternal>
          Lyearn
        </CustomLink>{" "}
        as a <b>Product Engineer</b>. You can find me contributing to{" "}
        <CustomLink
          href="https://github.com/outline/outline?ref=iamsaumya"
          isExternal
        >
          Outline
        </CustomLink>{" "}
        every now and then.
      </Info>
      <Socials />
    </Container>
  );
};

const Container = styled(Flex)`
  margin: 2rem 0;
  gap: 1rem;
`;

const Title = styled.div`
  color: #ed7842;
  font-size: 1.5rem;
`;

const Info = styled.p`
  font-weight: 100;
  color: #d9d9d9;
  font-size: 1.2rem;
`;

export default Introduction;
