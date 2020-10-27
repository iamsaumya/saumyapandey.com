import React from "react";
import { Flex, Text, Stack, Heading } from "@chakra-ui/core";
import Socials from "./Socials";
const Introduction = () => (
  <Flex justifyContent="center" flexDirection="column" width="100%" mx="auto">
    <Stack flexDirection="column">
      <Heading size="2xl">Hi! I am Saumya Pandey</Heading>
      <Text color="#2D3748" fontFamily="Inter,-apple-system,BlinkMacSystemFont">
        I’m a developer
      </Text>
      <Socials />
    </Stack>
  </Flex>
);

export default Introduction;
