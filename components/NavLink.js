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
  padding: 0.25rem;
  margin: ${(props) => (props.isLast ? 0 : "0.5rem")};
  margin-right: 1rem;
  font-size: 1.5rem;
  line-height: 1.375rem;
  font-weight: 300;
  display: ${(props) => (props.isBlock ? "block" : "inline")};
  &:hover {
    text-decoration: "none";
    background-color: #ed7842;
  }
`;

export default NavLink;
