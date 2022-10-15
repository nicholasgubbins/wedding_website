module.exports = {
  siteMetadata: {
    title: "Terouz &amp; Nick Get Married"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Terouz & Nick Get Married",
        short_name: "Terouz & Nick",
        start_url: "/",
        background_color: "#C86733",
        theme_color: "#C86733",
        display: "standalone",
        icon: "src/images/italy.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-typescript`,
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ]
};
