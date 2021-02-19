import React from "react";
import { Flex, Text, Stack } from "@chakra-ui/core";
import Socials from "./Socials";
const Introduction = () => {
  return (
    <Flex justifyContent="center" flexDirection="column" width="100%" mx="auto">
      <Stack flexDirection="column">
        <Text
          fontFamily="GT Walsheim Pro Bold"
          fontSize={["2rem", "5rem"]}
          color="#ed7842"
        >
          Hey, I am Saumya
        </Text>
        <Text fontWeight="100" color="#d9d9d9" fontSize={["1.2rem", "1.7rem"]}>
          I’m developer, noob chess player and runner.
        </Text>
        <Socials />
      </Stack>
    </Flex>
  );
};

export default Introduction;
