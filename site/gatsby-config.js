module.exports = {
  siteMetadata: {
    description: "Personal page of Matt Markham",
    locale: "en",
    title: "Matt Markham",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "dark-blue",
      },
    },
  ],
}
