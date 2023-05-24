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
  border: 2px solid var(--gray-600);
  border-radius: 4px;
  background-color: var(--gray-900);
  padding: 16px;
  margin-top: var(--16px);

  &:hover,
  &:active {
    border-color: var(--orange-100);
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
  color: var(--white-600);
  white-space: nowrap;

  ${breakpoint("tablet")`
    margin-top: 0;
  `}
`;

const Summary = styled.p`
  margin-top: 16px;
  color: var(--white-500);
  max-width: 100%;

  ${breakpoint("tablet")`
     max-width: 85%;
  `}
`;

export default BlogCard;
