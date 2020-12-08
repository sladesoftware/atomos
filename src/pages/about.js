import React from "react"
import styled from "styled-components"
import { Page, CircularLogo } from "components"
import { Header, Paragraph } from "components/typography"
import { useCompanyDetails } from "queries"

const Container = styled.div`
`

const CompanyPanel = styled.div`
`

const CompanyName = styled.h4`
`

const CompanyDescription = styled.h5`
`

const CompanyTagline = styled.p`
`

const MainSection = styled.div`
`

const About = () => {
  const company = useCompanyDetails()

  return (
    <Page title="About">
      <Container>
        <CompanyPanel>
          <CircularLogo size="lg" />

          <CompanyName>
            {company.name}
          </CompanyName>

          <CompanyDescription>
            {`Software Development Consultancy`}
          </CompanyDescription>

          <CompanyTagline>
            {`Making your life easier`}
          </CompanyTagline>
        </CompanyPanel>

        <MainSection>
          <Header>
            {`About`}
          </Header>

          <Paragraph>
            {`Slade Software Ltd is a privately owned company directed by Samuel Slade, Independent Consultant,
            offering Software Development and Consultancy services.`}
          </Paragraph>

          <Paragraph>
            {`We cover many areas, from discovery and analysis of requirements, architecture design, technology
            research and development, product prototyping, application development, and team upskilling; just
            to name a few.`}
          </Paragraph>
        </MainSection>
      </Container>
    </Page>
  )
}

export default About