import styled from "styled-components";
import NextLink from "next/link";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link {...props} />
      </NextLink>
    );
  }

  return <Link target="_blank" {...props} rel="noopener" />;
};

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  outline: none;
  color: var(--blue-200);

  :hover {
    color: var(--orange-200);
    transition: all 0.15s ease-out;
  }
`;

export default CustomLink;
