import styled, { css } from "styled-components";
import CustomLink from "../components/Link";

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
    <table {...props} />
  </div>
);

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

const MDXComponents = {
  h1: (props) => {
    const { children, ...rest } = props;
    return (
      <h1 id={children.replaceAll(" ", "-")} {...rest}>
        {children}
        <DocsHeading id={children.replaceAll(" ", "-")} />
      </h1>
    );
  },
  h2: (props) => {
    const { children, ...rest } = props;
    return (
      <h2 id={children.replaceAll(" ", "-")} {...rest}>
        {children}
        <DocsHeading id={children.replaceAll(" ", "-")} />
      </h2>
    );
  },
  h3: (props) => {
    const { children, ...rest } = props;
    return (
      <h3 id={children.replaceAll(" ", "-")} {...rest}>
        {children}
        <DocsHeading id={children.replaceAll(" ", "-")} />
      </h3>
    );
  },
  inlineCode: (props) => <code {...props} />,
  br: (props) => <div style={{ height: "24px" }} {...props} />,
  hr: (props) => <hr {...props} />,
  table: Table,
  th: (props) => <th {...props} />,
  td: (props) => <td {...props} />,
  a: CustomLink,
  p: (props) => {
    return <p {...props} />;
  },
  ul: (props) => {
    return <ul {...props} />;
  },
  ol: (props) => {
    return <ol {...props} />;
  },
  li: (props) => {
    return <li {...props} />;
  },
};

export default MDXComponents;
