import { Link, useColorMode } from "@chakra-ui/core";
import NextLink from "next/link";

const NavLink = (props) => {
  const { colorMode } = useColorMode();
  const { children, isLast, toggleMenu, href = "/", isBlock, ...rest } = props;

  const textColor = {
    light: "#334259",
    dark: "#EDEDED",
  };

  return (
    <NextLink href={href} passHref>
      <Link
        onClick={toggleMenu}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        p={[2, 4]}
        color={colorMode === "light" ? textColor.light : textColor.dark}
        fontSize={["1.5rem", "1.7rem"]}
        lineHeight="22px"
        {...rest}
        display={isBlock ? "block" : "inline"}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default NavLink;
