import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import fs from "fs";
import path from "path";
import { NextSeo } from "next-seo";
import { Box, Stack } from "@chakra-ui/core";

const root = process.cwd();

const failures = ({ mdxSource }) => {
  const content = hydrate(mdxSource);
  return (
    <Box height="100%">
      <NextSeo
        title="Failures – Saumya Pandey"
        description="Here's what I tried hard and failed."
        canonical="https://saumyapandey.com/failures"
        openGraph={{
          url: "https://saumyapandey.com/failures",
          title: "Failures – Saumya Pandey",
          description: "Here's what I tried hard and failed.",
        }}
      />
      <Stack as="article" fontSize={["1rem", "1.5rem"]}>
        {content}
      </Stack>
    </Box>
  );
};

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, "content", "failures.mdx"),
    "utf8"
  );
  const mdxSource = await renderToString(source);
  return { props: { mdxSource } };
}

export default failures;
