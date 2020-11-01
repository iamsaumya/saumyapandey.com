import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import fs from "fs";
import path from "path";
import { NextSeo } from "next-seo";
import { Box } from "@chakra-ui/core";

const root = process.cwd();

const Uses = ({ mdxSource }) => {
  const content = hydrate(mdxSource);
  return (
    <Box>
      <NextSeo
        title="Uses – Saumya Pandey"
        description="Here's what I'm currently using."
        canonical="https://saumyapandey.com/uses"
        openGraph={{
          url: "https://saumyapandey.com/uses",
          title: "Uses – Saumya Pandey",
          description: "Here's what I'm currently using."
        }}
      />
      {content}
    </Box>
  );
};

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, "content", "uses.mdx"),
    "utf8"
  );
  const mdxSource = await renderToString(source);
  return { props: { mdxSource } };
}

export default Uses;
