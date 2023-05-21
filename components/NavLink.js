import NextLink from "next/link";
import styled from "styled-components";

const NavLink = (props) => {
  const { children, toggleMenu, href = "/", ...rest } = props;
  return (
    <NextLink href={href} passHref>
      <Link onClick={toggleMenu} className="nav-link" {...rest}>
        {children}
      </Link>
    </NextLink>
  );
};

const Link = styled.a`
  border-radius: 2px;
  padding: var(--2px) var(--8px);
  font-size: var(--20px);
  text-align: center;
  font-weight: 500;
  display: ${(props) => (props.isBlock ? "block" : "inline-block")};
`;

export default NavLink;
