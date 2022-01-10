import NextLink from "next/link";
import styled, { css } from "styled-components";
import Flex from "../../components/Flex";

// const Quote = (props) => {
//   return (
//     <Callout
//       mt={4}
//       w="98%"
//       bg="blue.900"
//       variant="left-accent"
//       status="info"
//       css={{
//         "> *:first-of-type": {
//           marginTop: 0,
//           marginLeft: 8,
//         },
//       }}
//       {...props}
//     />
//   );
// };

const Table = (props) => (
  <div style={{ overflowX: "auto", width: "100%" }}>
    <table
      style={{ textAlign: "left", marginTop: "32px", width: "100%" }}
      {...props}
    />
  </div>
);

const THead = styled.th`
  background: #3c3e43;
  font-weight: 400;
  padding: 0.5rem;
  font-size: 1.2rem;
`;

const TData = styled.td`
  padding: 0.5rem;
  border-bottom-width: 1px;
  border-color: "inherit";
  font-size: 1rem;
  white-space: normal;
`;

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
  color: #60b3fb;

  :hover {
    color: #ed7842;
    transition: all 0.15s ease-out;
  }
`;

const HeadingCSS = css`
  scroll-snap-align: start;
  scroll-margin-top: 6rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;

  &[id]:hover > a {
    display: inline;
  }
`;

const DocsHeading = (props) => {
  if (!props.id) return null;

  return (
    <HashSelector aria-label="anchor" href={`#${props.id}`}>
      #
    </HashSelector>
  );
};

const HashSelector = styled.a`
  color: rgb(49, 130, 206);
  font-weight: 300;
  outline: none;
  opacity: 1;
  margin-left: 0.375rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  display: none;
`;

const Divider = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-bottom: 0.006rem solid #aeb0b7;
  opacity: 0.6;
`;

const Heading1 = styled.h1`
  ${HeadingCSS}
  font-size: 2rem;
`;

const Heading2 = styled.h2`
  ${HeadingCSS}
  font-size: 1.5rem;
`;

const Heading3 = styled.h3`
  ${HeadingCSS}
  font-size: 1.2rem;
`;

const listItemCSS = css`
  list-style: auto;
  padding-top: 0.5rem;
  padding-left: 1rem;
  margin-left: 0.5rem;
  font-weight: lighter;
`;

const P = styled.p`
  margin-top: 1rem;
  line-height: 1.625;
  font-weight: lighter;
`;

const OL = styled.ol`
  ${listItemCSS}
`;

const UL = styled.ul`
  ${listItemCSS}
`;

const MDXComponents = {
  h1: (props) => {
    const { children, ...rest } = props;
    return (
      <Heading1 id={children.replaceAll(" ", "-")} {...rest}>
        {children}
        <DocsHeading id={children.replaceAll(" ", "-")} />
      </Heading1>
    );
  },
  h2: (props) => {
    const { children, ...rest } = props;
    return (
      <Heading2 id={children.replaceAll(" ", "-")} {...rest}>
        {children}
        <DocsHeading id={children.replaceAll(" ", "-")} />
      </Heading2>
    );
  },
  h3: (props) => {
    const { children, ...rest } = props;
    return (
      <Heading3 id={children.replaceAll(" ", "-")} {...rest}>
        {children}
        <DocsHeading id={children.replaceAll(" ", "-")} />
      </Heading3>
    );
  },
  inlineCode: (props) => (
    <code
      style={{
        color: "gray",
        backgroundColor: "#d7d8db",
        padding: "0.25rem",
        borderRadius: "2px",
        fontSize: "0.84em",
      }}
      {...props}
    />
  ),
  br: (props) => <div style={{ height: "24px" }} {...props} />,
  hr: Divider,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => {
    return <P {...props} />;
  },
  ul: (props) => {
    return <UL {...props} />;
  },
  ol: (props) => {
    return <OL {...props} />;
  },
  li: (props) => {
    return <li style={{ paddingBottom: "0.25rem" }} {...props} />;
  },
};

export { CustomLink };
export default MDXComponents;
