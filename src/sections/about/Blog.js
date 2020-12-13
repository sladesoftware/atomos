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

      <Paragraph>
        {`For a little further insight into some of the work that I do, have a look
        at some of my more recent posts on my blog.`}
      </Paragraph>

      <NavLinks links={posts} showBullet />
    </Container>
  )
}

export default Blog