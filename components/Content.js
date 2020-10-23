import React from "react";
import BlogCard from "../components/BlogCard";
import { Flex, Heading } from "@chakra-ui/core";

const Content = () => {
  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading>Blogs</Heading>
        <BlogCard
          title="Everything I Know About Style Guides, Design Systems and Component
          Libraries"
          summary="A deep-dive on everything I've learned in the past year building
          style guides, design systems, component libraries, and their best
          practices."
          published="21-08-2000"
        />
        <BlogCard
          title="Everything I Know About Style Guides, Design Systems and Component
          Libraries"
          summary="A deep-dive on everything I've learned in the past year building
          style guides, design systems, component libraries, and their best
          practices."
          published="21-08-2000"
        />
        <BlogCard
          title="Everything I Know About Style Guides, Design Systems and Component
          Libraries"
          summary="A deep-dive on everything I've learned in the past year building
          style guides, design systems, component libraries, and their best
          practices."
          published="21-08-2000"
        />
        <BlogCard
          title="Everything I Know About Style Guides, Design Systems and Component
          Libraries"
          summary="A deep-dive on everything I've learned in the past year building
          style guides, design systems, component libraries, and their best
          practices."
          published="21-08-2000"
        />
        <BlogCard
          title="Everything I Know About Style Guides, Design Systems and Component
          Libraries"
          summary="A deep-dive on everything I've learned in the past year building
          style guides, design systems, component libraries, and their best
          practices."
          published="21-08-2000"
        />
      </Flex>
    </React.Fragment>
  );
};

export default Content;
