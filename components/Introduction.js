import React from "react";
import { Flex, Text, Stack, Heading, useColorMode } from "@chakra-ui/core";
import Socials from "./Socials";
const Introduction = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "#d9d9d9",
  };

  return (
    <Flex justifyContent="center" flexDirection="column" width="100%" mx="auto">
      <Stack flexDirection="column">
        <Text
          fontFamily="GT Walsheim Pro Bold"
          fontSize={["2rem", "5rem"]}
          color={colorMode === "light" ? "#233044" : "white"}
        >
          Hi! I am Saumya.
        </Text>
        <Text
          fontWeight="100"
          color={secondaryTextColor[colorMode]}
          fontSize={["1.2rem", "1.7rem"]}
        >
          I’m developer, noob chess player and runner.
        </Text>
        <Socials />
      </Stack>
    </Flex>
  );
};

export default Introduction;
