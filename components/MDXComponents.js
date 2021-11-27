import {
  Box,
  Flex,
  Code,
  Heading,
  Link,
  PseudoBox,
  Text,
  Divider,
  Callout,
} from "@chakra-ui/core";
import NextLink from "next/link";

const Quote = (props) => {
  return (
    <Callout
      mt={4}
      w="98%"
      bg="blue.900"
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const Table = (props) => (
  <Box overflowX="auto" w="full">
    <Box as="table" textAlign="left" mt="32px" w="full" {...props} />
  </Box>
);

const THead = (props) => {
  return (
    <Box
      as="th"
      bg="whiteAlpha.100"
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  );
};

const TData = (props) => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link
          color="hsl(208, 95%, 68%)"
          _hover={{ color: "#ed7842" }}
          fontSize={["1rem", "1.2rem"]}
          {...props}
        />
      </NextLink>
    );
  }

  return (
    <Link
      color="hsl(208, 95%, 68%)"
      fontSize={["1rem", "1.2rem"]}
      _hover={{ color: "#ed7842" }}
      isExternal
      {...props}
    />
  );
};

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: "100px",
      scrollSnapMargin: "100px", // Safari
      "&[id]": {
        pointerEvents: "none",
      },
      "&[id]:before": {
        display: "block",
        height: " 6rem",
        marginTop: "-6rem",
        visibility: "hidden",
        content: `""`,
      },
      "&[id]:hover a": { opacity: 1 },
    }}
    {...props}
    mb="0.5em"
    mt="1em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <PseudoBox
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: "outline",
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </PseudoBox>
      )}
    </Box>
  </Heading>
);

const Hr = () => {
  return <Divider borderColor="gray.600" my={4} w="100%" />;
};

const MDXComponents = {
  h1: (props) => (
    <Flex align="center" justify="center">
      <Heading
        fontSize={["2rem", "2.5rem"]}
        fontFamily="FreightTextBook"
        as="h1"
        size="xl"
        id={props.children.replaceAll(" ", "-")}
        {...props}
      />
    </Flex>
  ),
  h2: (props) => (
    <DocsHeading
      fontFamily="FreightTextBook"
      as="h2"
      fontWeight="bold"
      size="lg"
      fontSize={["1rem", "1.2rem"]}
      id={props.children.replaceAll(" ", "-")}
      {...props}
    />
  ),
  h3: (props) => (
    <DocsHeading
      fontFamily="FreightTextBook"
      as="h3"
      size="md"
      fontWeight="bold"
      fontSize={["1rem", "1.2rem"]}
      id={props.children.replaceAll(" ", "-")}
      {...props}
    />
  ),
  inlineCode: (props) => (
    <Code variantColor="gray" fontSize="0.84em" {...props} />
  ),
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => {
    return <Text as="p" mt={4} lineHeight="tall" {...props} />;
  },
  ul: (props) => {
    return <Box as="ul" pt={2} pl={4} ml={2} {...props} />;
  },
  ol: (props) => {
    return <Box as="ol" pt={2} pl={4} ml={2} {...props} />;
  },
  li: (props) => {
    return <Box as="li" pb={1} {...props} />;
  },
  blockquote: Quote,
};

export { CustomLink };
export default MDXComponents;
