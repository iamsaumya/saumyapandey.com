import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import BlogHeader from "../../components/BlogHeader";
import { CustomLink } from "../../components/MDXComponents";
import { Box, Stack } from "@chakra-ui/core";
import mdxPrism from "mdx-prism";
import BlogSeo from "../../components/BlogSeo";

const root = process.cwd();

const editUrl = (slug) =>
  `https://github.com/iamsaumya/saumyapandey.com/edit/master/content/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://saumyapandey/blog/${slug}`
  )}`;

export default function BlogPost({ mdxSource, frontMatter, slug }) {
  const content = hydrate(mdxSource);
  return (
    <>
      {frontMatter && (
        <BlogSeo
          url={`https://saumyapandey.com/blog/${slug}`}
          {...frontMatter}
        />
      )}
      <Box m={8}>
        <BlogHeader frontMatter={frontMatter} slug={slug} />
        <Stack as="article" textAlign="justify" fontSize={["1rem", "1.5rem"]}>
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
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs
      .readdirSync(path.join(root, "content/blog"))
      .map((p) => ({ params: { slug: p.replace(/\.mdx/, "") } }))
  };
}

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, "content/blog", `${params.slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    mdxOptions: { rehypePlugins: [mdxPrism] }
  });
  return { props: { mdxSource, frontMatter: data, slug: params.slug } };
}
