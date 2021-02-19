import React from "react";
import NextLink from "next/link";
import { Link, Flex, Box, Heading, Text } from "@chakra-ui/core";

const BlogCard = ({ title, summary, publishedAt, slug }) => {
  return (
    <NextLink
      href={`/blog/${encodeURIComponent(slug)}`}
      passHref
      prefetch={false}
    >
      <Link
        w="100%"
        _hover={{
          borderTop: "2px",
          borderTopColor: "#ed7842",
          transition: "0.5s",
          transitionTimingFunction: "ease",
        }}
        _active={{
          borderTop: "2px",
          borderTopColor: "#ed7842",
          transition: "0.5s",
          transitionTimingFunction: "ease",
        }}
        border="1px solid"
        borderRadius="8px"
        boxShadow="0 1px 2px 0 rgb(0 0 0 / 30%), 0 1px 3px 1px rgb(0 0 0 / 15%)"
        borderColor="rgb(32, 32, 34)"
        backgroundColor="#202124"
        p={4}
        mt={4}
      >
        <Box>
          <Flex
            justifyContent="space-between"
            flexDirection={["column", "column", "row"]}
          >
            <Heading
              size="md"
              as="h3"
              maxW="85%"
              fontFamily="GT Walsheim Pro Bold"
            >
              {title}
            </Heading>
            <Text mt={["4", "4", "0"]}>{publishedAt}</Text>
          </Flex>
          <Text mt={4}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogCard;
