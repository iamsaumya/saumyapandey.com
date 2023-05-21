import React from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import BlogCard from "../components/BlogCard";
import Flex from "../components/Flex";

const Content = ({ info }) => {
  return (
    <section>
      <Flex column justify="flex-start" align="flex-start">
        <Text>Blog</Text>
        {info.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </Flex>
    </section>
  );
};

const Text = styled.h2`
  font-size: var(--22px);
  margin-left: var(--4px);
  color: #d9d9d9;

  ${breakpoint("tablet")`
    font-size: var(--28px);
  `};
`;

export default Content;
