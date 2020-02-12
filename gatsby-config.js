module.exports = {
  siteMetadata: {
    title: `Tirolesa de Taquaruçu`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Djamilson`,
    siteUrl: "https://gcn.netlify.com",
    image: "/images/share.jpg",
    menuLinks: [
      {
        name: "Home",
        slug: "/",
      },
      {
        name: "Sobre",
        slug: "/about/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tirolesa-taquarucu`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
