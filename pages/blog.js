import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "../components/BlogCard";

export default function Blog({ info }) {
  return (
    <>
      {info.map((blog) => (
        <BlogCard {...blog} key={blog.slug} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  const root = process.cwd();

  const paths = fs
    .readdirSync(path.join(root, "content/blog"))
    .map((p) => p.replace(/\.mdx/, ""));

  let info = [];
  paths.forEach((p) => {
    const source = fs.readFileSync(
      path.join(root, "content/blog", `${p}.mdx`),
      "utf8"
    );
    const { data, content } = matter(source);
    info.push({ ...data, slug: p });
  });

  info.sort((a, b) => {
    if (new Date(`${a.publishedAt}`) > new Date(`${b.publishedAt}`)) {
      return -1;
    } else if (new Date(`${a.publishedAt}`) < new Date(`${b.publishedAt}`)) {
      return 1;
    } else return 0;
  });

  return { props: { info } };
}
