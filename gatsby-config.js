const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Slade Software",
    description: "Making your life easier through software development consultancy and implementation services",
    author: "Slade Software Ltd",
    company: {
      name: "Slade Software Ltd",
      registrationNumber: "09704854",
      registeredAddress: {
        street: "179 Park Lane",
        town: "Poynton",
        county: "Stockport",
        country: "England",
        postcode: "SK12 1RH"
      }
    },
    pages: [
      {
        text: "about",
        path: "/about",
        active: false
      },
      {
        text: "blog",
        path: "/blog",
        active: true
      },
      {
        text: "portfolio",
        path: "/portfolio",
        active: false
      },
      {
        text: "products",
        path: "/products",
        active: false
      }
    ]
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
        name: "data",
        path: path.join(__dirname, "data")
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src/images")
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: path.join(__dirname, "static/fonts")
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-json",
      options: {
        typeName: ({ node }) => node.name
      }
    }
  ],
}
