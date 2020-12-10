import { graphql, useStaticQuery } from "gatsby"

const QUERY = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 5
    ) {
      nodes {
        id
        frontmatter {
          slug
          title
          date(formatString: "Do MMM YYYY")
        }
      }
    }
  }
`

export const useRecentPosts = () => {
  const { allMdx } = useStaticQuery(QUERY)

  return allMdx.nodes.map(post => ({
    path: post.frontmatter.slug,
    text: post.frontmatter.title
  }))
}