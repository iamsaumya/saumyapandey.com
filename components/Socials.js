import React from "react";
import { IconButton, Link } from "@chakra-ui/core";
import { useColorMode } from "@chakra-ui/core";
const Socials = () => {
  const { colorMode } = useColorMode();
  const socialColor = {
    light: "gray.500",
    dark: "#d9d9d9",
  };
  return (
    <div>
      <Link href="https://twitter.com/itsrklover" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon="twitter"
          size="lg"
          color={socialColor[colorMode]}
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/iamsaumya" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color={socialColor[colorMode]}
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/iamsaumya"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon="linkedin"
          size="lg"
          color={socialColor[colorMode]}
          variant="ghost"
        />
      </Link>
      <Link href="mailto:pandeyysaumya@gmail.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color={socialColor[colorMode]}
          variant="ghost"
        />
      </Link>
    </div>
  );
};

export default Socials;
