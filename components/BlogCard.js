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
        <article>
          <Wrap justify="space-between" align="flex-start">
            <Heading>{title}</Heading>
            <Time datetime={publishedAt}>{publishedAt}</Time>
          </Wrap>
          <Summary mt={4}>{summary}</Summary>
        </article>
      </Link>
    </NextLink>
  );
};

const Wrap = styled(Flex)`
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
  padding: 16px;
  margin-top: var(--16px);

  &:hover {
    box-shadow: #ed7842 0px -0.2rem 0px 0px, rgb(0 0 0 / 15%) 0px 1px 3px 1px,
      rgb(0 0 0 / 30%) 0px 1px 2px 0px;
    transition: all 100ms ease;
  }

  &:active {
    box-shadow: #ed7842 0px -0.2rem 0px 0px, rgb(0 0 0 / 15%) 0px 1px 3px 1px,
      rgb(0 0 0 / 30%) 0px 1px 2px 0px;
    transition: all 100ms ease;
  }
`;

const Heading = styled.h4`
  font-size: var(--20px);
  line-height: 1.25;
  font-weight: 500;
  max-width: 85%;

  ${breakpoint("mobile")`
    max-width: 100%;
  `}
`;

const Time = styled.time`
  margin-top: 16px;
  color: #aeb0b7;

  ${breakpoint("tablet")`
    margin-top: 0;
  `}
`;

const Summary = styled.p`
  margin-top: 16px;
  color: #aeb0b7;
  max-width: 100%;

  ${breakpoint("tablet")`
     max-width: 85%;
  `}
`;

export default BlogCard;
