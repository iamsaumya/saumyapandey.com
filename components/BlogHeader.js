import React from "react";
import {
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  useColorMode
} from "@chakra-ui/core";

const BlogHeader = ({ frontMatter, slug }) => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400"
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
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
        w="100%"
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
        <Flex
          justify="space-between"
          align={["initial", "center"]}
          direction={["column", "row"]}
          mt={2}
          w="100%"
          mb={4}
        >
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
      </Flex>
    </Stack>
  );
};

export default BlogHeader;
