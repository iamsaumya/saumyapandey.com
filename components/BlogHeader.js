import React from "react";
import {
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  useColorMode,
} from "@chakra-ui/core";

const BlogHeader = ({ frontMatter, slug }) => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <Stack
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 2rem auto"
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
          mb={2}
          as="h1"
          size="2xl"
        >
          {frontMatter.title}
        </Heading>
        <Flex align="center">
          <Avatar
            size="sm"
            name="Saumya Pandey"
            src="/static/images/profilepic.jpeg"
            mr={2}
          />
          <Text fontSize={["md", "lg"]} color={textColor[colorMode]}>
            {"Saumya Pandey "}
            {" / " + frontMatter.publishedAt}
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default BlogHeader;
