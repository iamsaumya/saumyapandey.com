import React from "react";
import NextLink from "next/link";
import { Flex, Link, useColorMode } from "@chakra-ui/core";
import Socials from "../components/Socials";
const Footer = () => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "rgb(119,124,155)",
    dark: "#EDEDED",
  };
  return (
    <Flex align="center" mt={4} direction="column">
      <Socials />
      <div>
        <NextLink href="/uses" passHref>
          <Link
            fontSize="18px"
            lineHeight="22px"
            color={textColor[colorMode]}
            minWidth="100px"
            mr={2}
            title="Uses"
          >
            /uses
          </Link>
        </NextLink>
        <NextLink href="/static/resume.pdf" passHref>
          <Link
            fontSize="18px"
            lineHeight="22px"
            color={textColor[colorMode]}
            minWidth="100px"
            mr={2}
            title="Uses"
          >
            /resume
          </Link>
        </NextLink>
      </div>
    </Flex>
  );
};
export default Footer;
