import React from "react";
import { parseISO, format } from "date-fns";
import { Heading, Text, Flex, Stack, Avatar, Link, Box } from "@chakra-ui/core";

const editUrl = (slug) =>
  `https://github.com/iamsaumya/saumyapandey.com/edit/master/pages/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://saumyapandey/blog/${slug}`
  )}`;

const BlogHeader = ({ frontMatter, slug }) => {
  const colorMode = "light";
  const textColor = {
    light: "gray.700",
    dark: "gray.400"
  };

  return (
    <Stack
      as="article"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
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
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
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
              src="https://avatars1.githubusercontent.com/u/40148448?s=460&v=4"
              mr={2}
            />
            <Text fontSize="sm" color={textColor[colorMode]}>
              <b>{"Saumya Pandey "}</b>
              {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box>
        <Link href={discussUrl(slug)} isExternal>
          {"Discuss on Twitter"}
        </Link>
        {` • `}
        <Link href={editUrl(slug)} isExternal>
          {"Edit on GitHub"}
        </Link>
      </Box>
    </Stack>
  );
};

export default BlogHeader;