module.exports = {
  siteMetadata: {
    title: `The definitive answer to the question "Is There World Peace Yet"`,
    description: `We investigate the quesion if there is world peace yet - the answer might surprise you`,
    author: `@prosellen`,
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

    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Is There World Peace Yet`,
        description: `The application does cool things and makes your life better.`,
        lang: `en`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fire.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
