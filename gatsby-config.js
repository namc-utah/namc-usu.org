module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "NAMC Website",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
