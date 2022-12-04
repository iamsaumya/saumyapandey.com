import React from "react";
import styled, { css } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import Flex from "../components/Flex";
import { getDescriptiveDate } from "../utils";

const BlogHeader = ({ frontMatter }) => {
  return (
    <Container column>
      <Heading>{frontMatter.title}</Heading>
      <BlogMeta row gap={0.5}>
        <Text>{getDescriptiveDate(frontMatter.modifiedAt)}</Text>
      </BlogMeta>
    </Container>
  );
};

const Badge = css``;

const Text = styled.p`
  font-weight: lighter;
  width: fit-content;
  ${Badge}
`;

const BlogMeta = styled(Flex)`
  width: 100%;
  margin-bottom: 1rem;
`;

const Container = styled(Flex)`
  max-width: 700px;
  padding: 0 1rem;
  width: 100%;
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
