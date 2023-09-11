/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env`
})
module.exports = {
  siteMetadata: {
    title: `СТО на Стебенева 12 в Минске`,
    description: `СТО Риа Моторс - любые работы по ремонту Вашего авто ✅ Скидки и акции ✅ 13 лет опыта ✆ Звоните: +375 29 372 63 65`,
    author: ``,
    siteUrl: `https://riamotors.by/`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL_DEMO,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Риа Моторс | СТО на Стебенева 12 в Минске`,
        short_name: `Риа Моторс`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss'
  ],
}
