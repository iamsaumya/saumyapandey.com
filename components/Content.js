import React from "react";
import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import BlogCard from "../components/BlogCard";
import Flex from "../components/Flex";

const Content = ({ info }) => {
  return (
    <Container column justify="flex-start" align="flex-start">
      <Text>Blog</Text>
      {info.map((blog) => (
        <BlogCard key={blog.slug} {...blog} />
      ))}
    </Container>
  );
};

const Container = styled(Flex)`
  margin-top: 0.5rem;
`;

const Text = styled.p`
  font-size: 1.5rem;

  ${breakpoint("tablet")`
    font-size: 2rem;
  `};
`;

export default Content;
