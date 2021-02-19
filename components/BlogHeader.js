import React from "react";
import { Heading, Text, Flex, Stack, Avatar } from "@chakra-ui/core";

const BlogHeader = ({ frontMatter }) => {
  return (
    <Stack
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      maxWidth="700px"
      w="100%"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="700px"
        w="100%"
        textAlign="center"
      >
        <Heading
          fontFamily="GT Walsheim Pro Bold"
          letterSpacing="tight"
          mb={4}
          as="h1"
          size="2xl"
        >
          {frontMatter.title}
        </Heading>
        <Flex flexDirection="column" align="center" width="100%" px="1rem">
          <Flex align="center">
            <Avatar
              size="md"
              name="Saumya Pandey"
              src="/static/images/profilepic.jpeg"
              mb={4}
            />
          </Flex>
          <Text fontSize={["xl", "2xl"]} mb={4} color="#EDEDED">
            {"Last tinkered on " + frontMatter.publishedAt}
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default BlogHeader;
