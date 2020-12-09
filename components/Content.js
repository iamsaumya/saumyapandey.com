import React from "react";
import BlogCard from "../components/BlogCard";
import { Flex, Text, useColorMode } from "@chakra-ui/core";

const Content = ({ info }) => {
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
        {info.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </Flex>
    </React.Fragment>
  );
};

export default Content;
