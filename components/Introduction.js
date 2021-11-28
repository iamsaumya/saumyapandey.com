import React from "react";
import Socials from "./Socials";
import Flex from "../components/Flex";
import { breakpoint } from "styled-components-breakpoint";
import styled from "styled-components";

const Introduction = () => {
  return (
    <Flex column justify="center">
      <Title>Hey, I am Saumya</Title>
      <Info>I’m developer, noob chess player and runner.</Info>
      <Socials />
    </Flex>
  );
};

const Title = styled.h1`
  color: #ed7842;
  font-size: 2rem;
`;

const Info = styled.p`
  font-weight: 100;
  color: #d9d9d9;
  font-size: 1.2rem;

  ${breakpoint("tablet")`
    font-size: 1.7rem;
  `};
`;

export default Introduction;
