const withMDX = require("@next/mdx")();
module.exports = withMDX({
  webpack(config, { isServer }) {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }
    return config;
  },
});
