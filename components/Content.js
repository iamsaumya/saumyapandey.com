import React from "react";
import BlogCard from "../components/BlogCard";
import { Flex, Text } from "@chakra-ui/core";

const Content = ({ info }) => {
  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        mt={2}
      >
        <Text fontSize={["1.5rem", "2rem"]}>Blog</Text>
        {info.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </Flex>
    </React.Fragment>
  );
};

export default Content;
