import React from "react";
import BlogCard from "../components/BlogCard";
import { Flex, Text, useColorMode } from "@chakra-ui/core";

const Content = () => {
  const { colorMode } = useColorMode();
  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        mt={2}
      >
        <Text
          fontSize={["1.5rem", "2rem"]}
          color={colorMode === "light" ? "#334259" : "white"}
        >
          Blog
        </Text>
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
