import React from "react";
import NextLink from "next/link";
import styled from "styled-components";
import Flex from "../components/Flex";
import { breakpoint } from "styled-components-breakpoint";

const BlogCard = ({ title, summary, publishedAt, slug }) => {
  return (
    <NextLink
      href={`/blog/${encodeURIComponent(slug)}`}
      passHref
      prefetch={false}
    >
      <Link>
        <Wrap justify="space-between" align="flex-start">
          <Heading>{title}</Heading>
          <Text>{publishedAt}</Text>
        </Wrap>
        <Summary mt={4}>{summary}</Summary>
      </Link>
    </NextLink>
  );
};

const Wrap = styled(Flex)`
  display: flex;
  flex-direction: column;
  ${breakpoint("tablet")`
    flex-direction: row;
  `};
`;

const Link = styled.a`
  cursor: pointer;
  width: 100%;
  border: 0.1rem solid;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%), 0 1px 3px 1px rgb(0 0 0 / 15%);
  border-color: rgb(32, 32, 34);
  background-color: #202124;
  padding: 1rem;
  margin-top: 1rem;

  &:hover {
    border-top: 0.2rem solid #ed7842;
    transition: all 100ms ease;
  }

  &:active {
    border-top: 0.2rem solid #ed7842;
    transition: all 100ms ease;
  }
`;

const Heading = styled.h3`
  font-size: 1.25rem;
  line-height: 1.25;
  font-weight: 700;
  max-width: 85%;
`;

const Text = styled.p`
  margin-top: 1rem;
  color: #aeb0b7;

  ${breakpoint("tablet")`
    margin-top: 0;
  `}
`;

const Summary = styled.p`
  margin-top: 1rem;
  color: #aeb0b7;
`;

export default BlogCard;
