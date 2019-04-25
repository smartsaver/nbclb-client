module.exports = {
  siteMetadata: {
    title: `Gatsby mui jest storybook template`,
    description: `Boilerplate setup for gatsby, jest, storbyook, jss, and material-ui`,
    author: `Jonathan Cunanan <cunanan.jonathan1995@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        start_url: `/`,
        // icon: `src/images/gatsby-icon.png`
      },
    },
  ],
}
