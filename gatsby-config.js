const path = require("path")

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.sladesoftware.co.uk/",
    title: "Slade Software",
    description: "Making your life easier through software development consultancy and implementation services",
    author: "Slade Software Ltd",
    company: {
      name: "Slade Software Ltd",
      email: "samuel.slade@sladesoftware.co.uk",
      registrationNumber: "09704854",
      registeredAddress: {
        street: "179 Park Lane",
        town: "Poynton",
        county: "Stockport",
        country: "England",
        postcode: "SK12 1RH"
      },
      director: "Samuel Slade"
    },
    pages: [
      {
        text: "about",
        path: "/about",
        active: true
      },
      {
        text: "services",
        path: "/services",
        active: true
      },
      {
        text: "portfolio",
        path: "/portfolio",
        active: true
      },
      {
        text: "products",
        path: "/products",
        active: false
      },
      {
        text: "blog",
        path: "/blog",
        active: true
      }
    ]
  },
  plugins: [
    // General
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        icons: path.join(__dirname, "src/icons"),
        images: path.join(__dirname, "src/images"),
        pages: path.join(__dirname, "src/pages"),
        sections: path.join(__dirname, "src/sections"),
        styles: path.join(__dirname, "src/styles"),
        queries: path.join(__dirname, "src/queries")
      }
    },

    // Data
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: path.join(__dirname, "data")
      }
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        typeName: ({ node }) => node.name
      }
    },

    // Images
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src/images")
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    // Fonts
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: path.join(__dirname, "static/fonts")
      }
    },

    // Posts
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: path.join(__dirname, "posts")
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [ ".mdx", ".md" ]
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                const tag = `${site.siteMetadata.siteUrl}${edge.node.frontmatter.slug}`

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: tag,
                  guid: tag,
                  custom_elements: [{ "content:encoded": edge.node.body }]
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt
                      body
                      frontmatter {
                        title
                        date
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: "/blog/rss.xml",
            title: "Latest blog posts"
          }
        ]
      }
    }
  ],
}
