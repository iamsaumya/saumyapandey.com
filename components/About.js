import React from "react";
import { Flex, Text, Stack, Heading, Link, IconButton } from "@chakra-ui/core";
import Socials from "../components/Socials";
const About = () => (
  <Flex
    justifyContent="center"
    flexDirection="column"
    width="100%"
    maxW="700px"
    mx="auto"
    p={4}
  >
    <Stack flexDirection="column">
      <Heading size="2xl" marginTop="1em">
        Hi! I am Saumya Pandey
      </Heading>
      <Text color="#2D3748" fontFamily="Inter,-apple-system,BlinkMacSystemFont">
        I’m a developer, writer, and creator. I work at ▲Vercel as a Solutions
        Architect. You’ve found my personal slice of the internet – everything
        you want to know and more is here.
      </Text>
      <Socials />
    </Stack>
  </Flex>
);

export default About;
