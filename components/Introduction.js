import React from "react";
import { Flex, Text, Stack, Heading, useColorMode } from "@chakra-ui/core";
import Socials from "./Socials";
const Introduction = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400"
  };

  return (
    <Flex justifyContent="center" flexDirection="column" width="100%" mx="auto">
      <Stack flexDirection="column">
        <Heading size="2xl">Hi! I am Saumya Pandey</Heading>
        <Text
          color={secondaryTextColor[colorMode]}
          fontFamily="Inter,-apple-system,BlinkMacSystemFont"
        >
          I’m a developer
        </Text>
        <Socials />
      </Stack>
    </Flex>
  );
};

export default Introduction;
