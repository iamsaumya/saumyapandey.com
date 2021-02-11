import { Stack, Flex, Box, useColorMode, IconButton } from "@chakra-ui/core";
import React from "react";
import NavLink from "./NavLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  const navBgColor = {
    light: "rgba(255, 255, 255)",
    dark: "#050505",
  };
  return (
    <Flex
      flexDirection="column"
      width="100%"
      mx="auto"
      maxW="850px"
      position="sticky"
      top="-1px"
      mt="1em"
      p={4}
      bg={navBgColor[colorMode]}
      zIndex={1800}
      fontFamily="GT Walsheim Pro"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
          {show ? <AiOutlineClose size="42" /> : <AiOutlineMenu size="42" />}
        </Box>

        <Flex
          flexDirection="row"
          display={{ base: "none", md: "block" }}
          spacing={["1", "4"]}
          alignItems="center"
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/learnings">Learnings</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </Flex>
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
      {show && (
        <Flex
          display={{ base: "block", md: "none" }}
          spacing={["1", "4"]}
          alignItems="center"
        >
          <Flex flexDirection="column" alignItems="center">
            <NavLink toggleMenu={toggleMenu} isBlock href="/">
              Home
            </NavLink>
            <NavLink toggleMenu={toggleMenu} isBlock href="/blog">
              Blog
            </NavLink>
            <NavLink toggleMenu={toggleMenu} isBlock href="/learnings">
              Learnings
            </NavLink>
            <NavLink toggleMenu={toggleMenu} isBlock href="/projects">
              Projects
            </NavLink>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default NavBar;
