const withPreact = require("next-plugin-preact");
module.exports = withPreact({
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
});
