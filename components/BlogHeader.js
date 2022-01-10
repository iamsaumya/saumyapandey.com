import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import Flex from "../components/Flex";

const BlogHeader = ({ frontMatter }) => {
  return (
    <Container column>
      <Heading>{frontMatter.title}</Heading>
      <BlogMeta row gap={0.5}>
        <Flex align="center">
          <Author align="center">
            <Image alt="Saumya Pandey" src="/static/images/profilepic.jpeg" />
            Saumya Pandey
          </Author>
        </Flex>
        <Text>{frontMatter.modifiedAt}</Text>
      </BlogMeta>
    </Container>
  );
};

const Badge = css`
  padding: 4px 8px;
  border: 1px solid #484a51;
  border-radius: 4px;
`;

const Text = styled.p`
  font-weight: lighter;
  width: fit-content;
  ${Badge}
`;

const Author = styled(Flex)`
  font-weight: lighter;
  ${Badge}
`;

const BlogMeta = styled(Flex)`
  width: 100%;
`;

const Container = styled(Flex)`
  max-width: 700px;
  padding: 0 1rem;
  width: 100%;
`;

const Image = styled.img`
  border-radius: 9999px;
  width: 21px;
  height: 21px;
  margin-right: 0.5rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 1rem;

  ${breakpoint("tablet")`
    font-size: 2.25rem;
  `};
`;

export default BlogHeader;
