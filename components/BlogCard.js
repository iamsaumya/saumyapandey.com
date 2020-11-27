import React from "react";
import NextLink from "next/link";
import { Link, Flex, Box, Heading, Text, useColorMode } from "@chakra-ui/core";

const BlogCard = ({ title, summary, publishedAt, slug }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <NextLink href={`/blog/${slug}`} passHref>
      <Link
        w="100%"
        _hover={{
          transform: "scale(1.02)",
          borderTop: "2px",
          borderTopColor: "#ed7842",
          transition: "0.5s",
          transitionTimingFunction: "ease",
          boxShadow: "1px 1px 5px rgba(52, 61, 68, 0.2)",
        }}
        _active={{
          transform: "scale(1.02)",
          borderTop: "2px",
          borderTopColor: "#ed7842",
          transition: "0.5s",
          transitionTimingFunction: "ease",
          boxShadow: "1px 1px 5px rgba(52, 61, 68, 0.2)",
        }}
        border="0.5px solid"
        borderRadius="5px"
        boxShadow="0px 1px 2px rgba(52, 61, 68, 0.1)"
        borderColor={
          colorMode === "light"
            ? "rgba(52, 61, 68, 0.05)"
            : "rgba(48, 52, 73, 1)"
        }
        backgroundColor={colorMode === "light" ? "white" : "#232636"}
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
          <Text color={secondaryTextColor[colorMode]} mt={4}>
            {summary}
          </Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogCard;
