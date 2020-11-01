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
        <Text
          fontFamily="GT Walsheim Pro Bold"
          fontSize={["2rem", "5rem"]}
          color={colorMode === "light" ? "#233044" : "white"}
        >
          Hi! I am Saumya.
        </Text>
        <Text
          fontFamily="FreightTextProLight"
          color={secondaryTextColor[colorMode]}
          fontSize={["1.5rem", "2rem"]}
        >
          I’m a developer, Noob chess player and Runner.
        </Text>
        <Socials />
      </Stack>
    </Flex>
  );
};

export default Introduction;
