const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Slade Software",
    description: "Making your life easier through software development consultancy and implementation services",
    author: "Slade Software Ltd",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        images: path.join(__dirname, "src/images"),
        pages: path.join(__dirname, "src/pages"),
        styles: path.join(__dirname, "src/styles")
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src/images")
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ],
}
