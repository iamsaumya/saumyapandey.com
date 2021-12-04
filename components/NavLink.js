import NextLink from "next/link";
import styled from "styled-components";

const NavLink = (props) => {
  const { children, toggleMenu, href = "/", ...rest } = props;
  return (
    <NextLink href={href} passHref>
      <Link onClick={toggleMenu} {...rest}>
        {children}
      </Link>
    </NextLink>
  );
};

const Link = styled.a`
  border-radius: 2px;
  padding: 0.25rem 0.6rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  line-height: 1.375rem;
  text-align: center;
  font-weight: 600;
  display: ${(props) => (props.isBlock ? "block" : "inline-block")};
`;

export default NavLink;
