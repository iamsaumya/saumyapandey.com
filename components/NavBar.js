import { Stack, Flex, Button, useColorMode, IconButton } from "@chakra-ui/core";
import NextLink from "next/link";
import NavLink from "./NavLink";
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
      fontFamily="GT Walsheim Pro"
    >
      <Stack isInline spacing={["1", "4"]} alignItems="center">
        <NavLink href="/" name="Home" />
        <NavLink href="/blog" name="Blog" />
        <NavLink href="/learnings" name="Learnings" />
        <NavLink href="/projects" name="Projects" />
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
