import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import BlogHeader from "../../components/BlogHeader";
import { CustomLink } from "../../components/MDXComponents";
import mdxPrism from "mdx-prism";
import BlogSeo from "../../components/BlogSeo";
import CustomImage from "../../components/CustomImage";
import styled from "styled-components";

const root = process.cwd();

const editUrl = (slug) =>
  `https://github.com/iamsaumya/saumyapandey.com/edit/master/content/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://saumyapandey/blog/${slug}`
  )}`;

export default function BlogPost({ mdxSource, frontMatter, slug }) {
  const content = hydrate(mdxSource, { components: { CustomImage } });
  return (
    <>
      {frontMatter && (
        <BlogSeo
          url={`https://saumyapandey.com/blog/${slug}`}
          {...frontMatter}
        />
      )}
      <Main width="100%" mx="auto">
        <BlogHeader frontMatter={frontMatter} slug={slug} />
        <Content>{content}</Content>
        <EditLinks>
          <CustomLink href={discussUrl(slug)} isExternal>
            {"Discuss on Twitter"}
          </CustomLink>
          {` • `}
          <CustomLink href={editUrl(slug)} isExternal>
            {"Edit on GitHub"}
          </CustomLink>
        </EditLinks>
      </Main>
    </>
  );
}

const Main = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Content = styled.article`
  color: #fefefe;
  font-size: 1.2rem;
  padding: 1rem;
`;

const EditLinks = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

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
    components: { CustomImage },
    mdxOptions: { rehypePlugins: [mdxPrism] },
  });
  return { props: { mdxSource, frontMatter: data, slug: params.slug } };
}
