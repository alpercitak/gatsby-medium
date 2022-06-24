import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-medium`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@alpercitak`,
      },
    },
  ],
  pathPrefix: '/gatsby-medium',
};

export default config;
