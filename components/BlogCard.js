import React from "react";
import NextLink from "next/link";
import { Link, Flex, Box, Heading, Text, Scale } from "@chakra-ui/core";

const BlogCard = ({ title, summary, published }) => {
  const slug = "backend";
  return (
    <NextLink href={`/blog/${slug}`} passHref>
      <Link
        _hover={{ textDecoration: "none", transform: "scale(1.01)" }}
        border="0.5px solid #ebebeb"
        borderRadius="5px"
        boxShadow="2px 2px 10px white"
        p={4}
        mt={4}
      >
        <Box>
          <Flex
            justifyContent="space-between"
            width="100"
            flexDirection={["column", "column", "row"]}
          >
            <Heading size="md" as="h3" maxW="85%">
              {title}
            </Heading>
            <Text mt={["4", "4", "0"]}>{published}</Text>
          </Flex>
          <Text mt={4}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogCard;
