import React from "react";
import {
  Stack,
  Flex,
  Avatar,
  Button,
  useColorMode,
  IconButton
} from "@chakra-ui/core";
import NextLink from "next/link";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navBgColor = {
    light: "rgba(255, 255, 255, 0.8)",
    dark: "rgba(23, 25, 35, 0.8)"
  };
  return (
    <Flex
      justifyContent="space-between"
      alignItems="space-between"
      width="100%"
      mx="auto"
      maxW="800px"
      position="sticky"
      top="-1px"
      mt="3em"
      p={4}
      bg={navBgColor[colorMode]}
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
        <IconButton
          size="lg"
          aria-label="Toggle dark mode"
          icon={colorMode === "dark" ? "sun" : "moon"}
          onClick={toggleColorMode}
          mr={2}
        />
      </Flex>
    </Flex>
  );
};

export default NavBar;
