require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: '{Command Centre}',
    author: 'Khandobin Fedor'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
     {
       resolve: `gatsby-transformer-remark`,
       options: {
         plugins: [
           `gatsby-remark-relative-images`,
           {
             resolve: `gatsby-remark-images`,
             options: {
               maxWidth: 750,
               linkImagesToOriginal: false
             }
           }
         ]
       }
     },
  ],
}
