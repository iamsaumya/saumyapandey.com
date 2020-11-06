import { Button, useColorMode } from "@chakra-ui/core";
import NextLink from "next/link";

const NavLink = ({ href, name }) => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "#334259",
    dark: "#EDEDED"
  };
  return (
    <NextLink href={href} passHref>
      <Button
        as="a"
        variant="ghost"
        p={[2, 4]}
        color={colorMode === "light" ? textColor.light : textColor.dark}
        fontSize="18px"
        lineHeight="22px"
      >
        {name}
      </Button>
    </NextLink>
  );
};

export default NavLink;
