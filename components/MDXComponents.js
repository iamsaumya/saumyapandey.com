import {
  Box,
  Flex,
  Code,
  Heading,
  Kbd,
  Link,
  PseudoBox,
  Text,
  Divider,
  useColorMode,
} from "@chakra-ui/core";
import NextLink from "next/link";

const textColor = {
  light: "#334259",
  dark: "#d9d9d9",
};

const Table = (props) => (
  <Box overflowX="auto" w="full">
    <Box as="table" textAlign="left" mt="32px" w="full" {...props} />
  </Box>
);

const THead = (props) => {
  const { colorMode } = useColorMode();
  const bg = {
    light: "gray.50",
    dark: "whiteAlpha.100",
  };

  return (
    <Box
      as="th"
      bg={bg[colorMode]}
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
  const { colorMode } = useColorMode();
  const color = {
    light: "hsl(208, 99%, 44%)",
    dark: "hsl(208, 95%, 68%)",
  };
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link
          color={color[colorMode]}
          _hover={{ color: "#ed7842" }}
          fontSize={["1rem", "1.2rem"]}
          {...props}
        />
      </NextLink>
    );
  }

  return (
    <Link
      color={color[colorMode]}
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
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
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
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => {
    const { colorMode } = useColorMode();
    return (
      <Text
        as="p"
        mt={4}
        lineHeight="tall"
        color={textColor[colorMode]}
        {...props}
      />
    );
  },
  ul: (props) => {
    const { colorMode } = useColorMode();
    return (
      <Box
        as="ul"
        pt={2}
        pl={4}
        ml={2}
        color={textColor[colorMode]}
        {...props}
      />
    );
  },
  ol: (props) => {
    const { colorMode } = useColorMode();
    return (
      <Box
        as="ol"
        pt={2}
        pl={4}
        ml={2}
        color={textColor[colorMode]}
        {...props}
      />
    );
  },
  li: (props) => {
    const { colorMode } = useColorMode();
    return <Box as="li" pb={1} color={textColor[colorMode]} {...props} />;
  },
};

export { CustomLink };
export default MDXComponents;
