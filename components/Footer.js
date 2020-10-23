import React from "react";
import NextLink from "next/link";
import { Flex, Link, IconButton } from "@chakra-ui/core";
import Socials from "../components/Socials";

const Footer = () => (
  <Flex align="center" mx={4} direction="column">
    <Socials />
    <div>
      <NextLink href="/uses" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Uses"
        >
          /uses
        </Link>
      </NextLink>
    </div>
  </Flex>
);

export default Footer;
