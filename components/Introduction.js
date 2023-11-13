import React from "react";
import Socials from "./Socials";
import Flex from "../components/Flex";
import styled from "styled-components";
import CustomLink from "./components/Link";

const Introduction = () => {
  return (
    <Container>
      <Title>
        Saumya is just another frontend engineer struggling with CSS, frontend
        tooling and whatnot
      </Title>
      <Info>
        I tinker with web at{" "}
        <CustomLink href="https://www.unifyapps.com/?ref=iamsaumya" isExternal>
          UnifyApps
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

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: var(--32px) 0px;
  gap: var(--16px);
`;

const Title = styled.h3`
  color: var(--orange-50);
  font-size: var(--24px);
  font-weight: 500;
`;

const Info = styled.p`
  font-weight: 200;
  color: var(--white-500);
  font-size: var(--18px);
`;

export default Introduction;
