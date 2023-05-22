import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import BlogHeader from "../../components/BlogHeader";
import mdxPrism from "mdx-prism";
import BlogSeo from "../../components/BlogSeo";
import CustomImage from "../../components/CustomImage";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import Article from "../../components/MDXComponents/styles";
import CustomLink from "../../components/components/Link";

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
        <BackToBlog href="/blog">
          <FiArrowLeft size={24} style={{ display: "inline" }} />
          <span>Back to Blog</span>
        </BackToBlog>

        <Article>
          <header>
            <BlogHeader frontMatter={frontMatter} slug={slug} />
          </header>
          <Content className="content-wrapper">{content}</Content>
          <footer>
            <EditLinks>
              <CustomLink href={discussUrl(slug)} isExternal>
                Discuss on Twitter
              </CustomLink>
              {` • `}
              <CustomLink href={editUrl(slug)} isExternal>
                Edit on GitHub
              </CustomLink>
            </EditLinks>
          </footer>
        </Article>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
`;

const Content = styled.div`
  color: var(--white-500);
  font-size: 1.125rem;

  > *:first-child {
    margin-top: 0 !important;
  }

  > *:last-child {
    margin-bottom: 0 !important;
  }
`;

const EditLinks = styled.div`
  margin-top: var(--32px);
  font-size: var(--16px);
  display: flex;
  gap: var(--8px);
`;

const BackToBlog = styled(CustomLink)`
  display: inline-flex;
  gap: 0.5rem;
  padding: 1rem 0;

  &:hover {
    svg {
      transform: translateX(-2px);
      transition: all 0.15s ease-out;
    }
  }
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
