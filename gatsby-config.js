module.exports = {
  siteMetadata: {
    title: `Nova Scotia CLB`,
    description: `Your child could be eligible to receive up to $2,000 in free money for their post-secondary education from the Canada Learning Bond (CLB).`,
    author: `SmartSAVER.org <info@smartsaver.org>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        start_url: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-137044672-1`,
      },
    },
  ],
};
