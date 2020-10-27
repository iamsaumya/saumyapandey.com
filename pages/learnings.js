import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import fs from "fs";
import path from "path";
import { Box } from "@chakra-ui/core";

const root = process.cwd();

const Learnings = ({ mdxSource }) => {
  const content = hydrate(mdxSource);
  return <Box>{content}</Box>;
};

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, "content", "learnings.mdx"),
    "utf8"
  );
  const mdxSource = await renderToString(source);
  return { props: { mdxSource } };
}

export default Learnings;