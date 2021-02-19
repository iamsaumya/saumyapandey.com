import React from "react";
import { IconButton, Link } from "@chakra-ui/core";
const Socials = () => {
  return (
    <div>
      <Link href="https://twitter.com/itsrklover" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon="twitter"
          size="lg"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/iamsaumya" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
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
          variant="ghost"
        />
      </Link>
      <Link href="mailto:pandeyysaumya@gmail.com" title="Email" isExternal>
        <IconButton aria-label="Email" icon="mail" size="lg" variant="ghost" />
      </Link>
    </div>
  );
};

export default Socials;
