import { Link } from "@chakra-ui/core";
import NextLink from "next/link";

const NavLink = (props) => {
  const { children, isLast, toggleMenu, href = "/", isBlock, ...rest } = props;
  return (
    <NextLink href={href} passHref>
      <Link
        onClick={toggleMenu}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        p={[2, 4]}
        borderRadius="4px"
        fontSize={["1.3rem", "1.5rem"]}
        lineHeight="22px"
        fontWeight="light"
        {...rest}
        display={isBlock ? "block" : "inline"}
        _hover={{ textDecoration: "none", backgroundColor: "#ed7842" }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default NavLink;
