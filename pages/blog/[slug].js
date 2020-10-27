import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import BlogHeader from "../../components/BlogHeader";
import { CustomLink } from "../../components/MDXComponents";
import { Box, Link, Stack } from "@chakra-ui/core";
import mdxPrism from "mdx-prism";
const root = process.cwd();

const editUrl = (slug) =>
  `https://github.com/iamsaumya/saumyapandey.com/edit/master/content/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://saumyapandey/blog/${slug}`
  )}`;

export default function BlogPost({ mdxSource, frontMatter, slug }) {
  const content = hydrate(mdxSource);

  return (
    <Box m={8}>
      <BlogHeader frontMatter={frontMatter} slug={slug} />
      <Stack as="article" textAlign="justify">
        {content}
      </Stack>
      <Box mt={10}>
        <CustomLink href={discussUrl(slug)} isExternal>
          {"Discuss on Twitter"}
        </CustomLink>
        {` • `}
        <CustomLink href={editUrl(slug)} isExternal>
          {"Edit on GitHub"}
        </CustomLink>
      </Box>
    </Box>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs
      .readdirSync(path.join(root, "content"))
      .map((p) => ({ params: { slug: p.replace(/\.mdx/, "") } }))
  };
}

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, "content", `${params.slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    mdxOptions: { rehypePlugins: [mdxPrism] }
  });
  return { props: { mdxSource, frontMatter: data, slug: params.slug } };
}
