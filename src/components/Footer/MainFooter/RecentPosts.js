import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import NavLinks from "../../NavLinks"
import MainFooterItem from "./MainFooterItem"

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

const RecentPosts = () => {
  const { allMdx } = useStaticQuery(QUERY)

  const posts = allMdx.nodes.map(post => ({
    path: post.frontmatter.slug,
    text: post.frontmatter.title
  }))

  console.log(posts)

  return (
    <MainFooterItem header="Recent Posts">
      <NavLinks links={posts} />
    </MainFooterItem>
  )
}

export default RecentPosts