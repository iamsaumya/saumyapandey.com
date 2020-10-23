import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import BlogHeader from "../../components/BlogHeader";
import { CustomLink } from "../../components/MDXComponents";
import { Box, Link } from "@chakra-ui/core";
const root = process.cwd();

const editUrl = (slug) =>
  `https://github.com/iamsaumya/saumyapandey.com/edit/master/pages/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://saumyapandey/blog/${slug}`
  )}`;

export default function BlogPost({ mdxSource, frontMatter, slug }) {
  const content = hydrate(mdxSource);

  return (
    <>
      <BlogHeader frontMatter={frontMatter} slug={slug} />
      {content}
      <Box mt={10}>
        <CustomLink href={discussUrl(slug)} isExternal>
          {"Discuss on Twitter"}
        </CustomLink>
        {` • `}
        <CustomLink href={editUrl(slug)} isExternal>
          {"Edit on GitHub"}
        </CustomLink>
      </Box>
    </>
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
  const mdxSource = await renderToString(content);
  return { props: { mdxSource, frontMatter: data, slug: params.slug } };
}
