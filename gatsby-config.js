/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `experience`,
        path: `${__dirname}/experience`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-theme-portfolio-minimal",
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        blogSettings: {
          entityName: "Article",
          path: "/blog",
          usePathPrefixForArticles: false,
        },
      },
    },
    "gatsby-plugin-postcss",
  ],
};
