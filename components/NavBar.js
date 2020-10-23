import React from "react";
import { Link, Stack, Flex, Avatar, Button } from "@chakra-ui/core";
import NextLink from "next/link";

const NavBar = () => (
  <Flex
    justifyContent="space-between"
    alignItems="space-between"
    width="100%"
    position="sticky"
    top="-1px"
    p={4}
    background="white"
    zIndex={1800}
  >
    <Stack isInline spacing={["1", "4"]} alignItems="center">
      <NextLink href="/" passHref>
        <Button as="a" variant="ghost" p={[2, 4]}>
          Home
        </Button>
      </NextLink>
      <NextLink href="/blog" passHref>
        <Button as="a" variant="ghost" p={[2, 4]}>
          Blog
        </Button>
      </NextLink>
      <NextLink href="/learnings" passHref>
        <Button as="a" variant="ghost" p={[2, 4]}>
          Learnings
        </Button>
      </NextLink>
      <NextLink href="/projects" passHref>
        <Button as="a" variant="ghost" p={[2, 4]}>
          Projects
        </Button>
      </NextLink>
    </Stack>
    <Flex justifyContent="center" alignItems="center">
      <Avatar
        size="md"
        src="https://avatars1.githubusercontent.com/u/40148448?s=460&v=4"
      />
    </Flex>
  </Flex>
);

export default NavBar;
