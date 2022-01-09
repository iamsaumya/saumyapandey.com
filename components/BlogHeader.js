import React from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import Flex from "../components/Flex";

const BlogHeader = ({ frontMatter }) => {
  return (
    <Container column justify="center" align="center">
      <Heading>{frontMatter.title}</Heading>
      <BlogMeta column align="center" width="100%" px="1rem">
        <Flex align="center">
          <Flex>
            <Image alt="Saumya Pandey" src="/static/images/profilepic.jpeg" />
          </Flex>
        </Flex>
        <Text>{"Last tinkered on " + frontMatter.modifiedAt}</Text>
      </BlogMeta>
    </Container>
  );
};

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  font-weight: lighter;
  color: #aeb0b7;
`;
const BlogMeta = styled(Flex)`
  width: 100%;
  padding: 0 1rem;
`;

const Container = styled(Flex)`
  max-width: 700px;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.5rem;
`;

const Heading = styled.h1`
  font-size: 2.25rem;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 1rem;

  ${breakpoint("tablet")`
    font-size:3rem;
  `};
`;

export default BlogHeader;
