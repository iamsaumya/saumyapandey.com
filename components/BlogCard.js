import React from "react";
import NextLink from "next/link";
import styled from "styled-components";
import Flex from "../components/Flex";

const BlogCard = ({ title, summary, publishedAt, slug }) => {
  return (
    <NextLink href={`/blog/${encodeURIComponent(slug)}`} prefetch={false}>
      <Link>
        <Flex justify="space-between" column>
          <Heading>{title}</Heading>
          <Text mt={["4", "4", "0"]}>{publishedAt}</Text>
        </Flex>
        <Text mt={4}>{summary}</Text>
      </Link>
    </NextLink>
  );
};

const Link = styled.a`
  cursor: pointer;
  width: 100%;
  border: 0.1rem solid;
  border-radius: 8px;
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
`;

export default BlogCard;
