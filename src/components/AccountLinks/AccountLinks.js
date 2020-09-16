import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import GitHub from "./GitHub"
import LinkedIn from "./LinkedIn"
import StackOverflow from "./StackOverflow"

const Container = styled.div`
  display: block;
`

const QUERY = graphql`
  query {
    company {
      profile {
        gitHub
        linkedIn
        stackOverflow
      }
    }
  }
`

const AccountLinks = () => {
  const { company } = useStaticQuery(QUERY)

  return (
    <Container>
      <GitHub url={company.profile.gitHub} />
      <LinkedIn url={company.profile.linkedIn} />
      <StackOverflow url={company.profile.stackOverflow} />
    </Container>
  )
}

export default AccountLinks