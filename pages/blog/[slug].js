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
import Image from "next/image";

const root = process.cwd();

const editUrl = (slug) =>
  `https://github.com/iamsaumya/saumyapandey.com/edit/master/content/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://saumyapandey/blog/${slug}`
  )}`;

export default function BlogPost({ mdxSource, frontMatter, slug }) {
  const content = hydrate(mdxSource, { components: { Image } });
  return (
    <>
      {frontMatter && (
        <BlogSeo
          url={`https://saumyapandey.com/blog/${slug}`}
          {...frontMatter}
        />
      )}
      <Box width="100%" mx="auto">
        <BlogHeader frontMatter={frontMatter} slug={slug} />
        <Stack as="article" fontSize={["1rem", "1.2rem"]} p="4">
          {content}
        </Stack>
        <Box mt={10} fontSize={["1rem", "1.2rem"]}>
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
      .map((p) => ({ params: { slug: p.replace(/\.mdx/, "") } })),
  };
}

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, "content/blog", `${params.slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: { Image },
    mdxOptions: { rehypePlugins: [mdxPrism] },
  });
  return { props: { mdxSource, frontMatter: data, slug: params.slug } };
}
