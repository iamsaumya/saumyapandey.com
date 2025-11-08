import React from "react";
import { NextSeo, ArticleJsonLd } from "next-seo";

const BlogSeo = ({ title, summary, publishedAt, modifiedAt, url, image }) => {
  const publishedDate = new Date(publishedAt).toISOString();
  const modifiedDate = new Date(modifiedAt).toISOString();

  const featuredImage = {
    url: `https://saumyapandey.com${image}`,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – Saumya Pandey`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: publishedDate,
            modifiedTime: modifiedDate,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
        twitter={{
          handle: "@iamsaumya137",
          site: "@iamsaumya137",
          cardType: "summary_large_image",
          title,
          description: summary,
          image: featuredImage.url,
        }}
      />
      <ArticleJsonLd
        authorName="Saumya Pandey"
        dateModified={modifiedDate}
        datePublished={publishedDate}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Saumya Pandey"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
