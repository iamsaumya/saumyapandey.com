const title = "Saumya Pandey – Developer";
const description = "Developer";

const SEO = {
  title,
  description,
  canonical: "https://saumyapandey.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://saumyapandey.com",
    title,
    description,
    images: [
      {
        url: "https://saumyapandey.com/static/images/og.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@itsrklover",
    site: "@itsrklover",
    cardType: "summary_large_image",
  },
};

export default SEO;
