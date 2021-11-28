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
        <Text fontSize={["xl", "2xl"]} mb={4} color="#EDEDED">
          {"Last tinkered on " + frontMatter.publishedAt}
        </Text>
      </BlogMeta>
    </Container>
  );
};

const Text = styled.p`
  font-size: 1.25rem;

  ${breakpoint("tablet")`
    font-size: "2.25rem"
  `}
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
  width: 3rem;
  height: 3rem;
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
