import React from "react"
import styled from "styled-components"
import { Page, Layout, CircularLogo } from "components"
import { Header, Paragraph } from "components/typography"
import { useCompanyDetails } from "queries"
import { media } from "styles"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`

const CompanyPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 2rem;

  ${media.phone`
    margin-right: 0;
  `}
`

const CompanyName = styled.h4`
  margin: 1rem 0;
`

const CompanyDescription = styled.h5`
  margin-bottom: 0.8rem;
`

const CompanyTagline = styled.p`
  font-size: 0.9rem;
`

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const About = () => {
  const company = useCompanyDetails()

  return (
    <Page title="About">
      <Layout>
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

            <Paragraph alignment="justify">
              {`${company.name} is a privately owned company directed by ${company.director},
              Independent Consultant, offering Software Development and Consultancy services.
              We cover many areas, from discovery and analysis of requirements, architecture design,
              technology research and development, product prototyping, application development, and
              team upskilling; just to name a few.`}
            </Paragraph>
          </MainSection>
        </Container>
      </Layout>
    </Page>
  )
}

export default About