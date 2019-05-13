const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata 233`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.resolve(__dirname, './src')
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
