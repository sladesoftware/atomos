import React from "react"
import styled from "styled-components"
import { NavLinks } from "components"
import { Header, Paragraph } from "components/typography"
import { useRecentPosts } from "queries"

const Container = styled.div`
  margin-bottom: 2rem;
`

const Blog = () => {
  const posts = useRecentPosts()

  return (
    <Container>
      <Header anchorId="blog" offset>
        {`Blog`}
      </Header>

      <Paragraph alignment="justify">
        {`Take a look at our recent posts on our blog.`}
      </Paragraph>

      <NavLinks links={posts} linkColor="#000" />
    </Container>
  )
}

export default Blog