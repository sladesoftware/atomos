import React from "react"
import styled from "styled-components"
import { Page, Layout, CircularLogo } from "components"
import { Header, Paragraph } from "components/typography"
import { useCompanyDetails } from "queries"
import { media } from "styles"

const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
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
  border-left: 1px dotted #bbb;
  padding-left: 2rem;

  ${media.phone`
    border: none;
    padding: 0;
  `}
`

const Section = styled.div`
`

const About = () => {
  const company = useCompanyDetails()

  return (
    <Page title="About">
      <Layout>
        <Container>
          <CompanyPanel>
            <CircularLogo size="lg" addBorder />

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
            <Section>
              <Header anchorId="company" offset>
                {`About the company`}
              </Header>

              <Paragraph alignment="justify">
                {`${company.name} is a privately owned company directed by ${company.director},
                Independent Consultant, offering Software Development and Consultancy services through
                technical leadership. We cover many areas, from discovery and analysis of requirements,
                architecture design, technology research and development, product prototyping,
                application development, and team upskilling; just to name a few.`}
              </Paragraph>
            </Section>

            <Section>
              <Header anchorId="services" offset>
                {`Services`}
              </Header>

              <Paragraph alignment="justify">
                {`TODO: Talk about services`}
              </Paragraph>
            </Section>

            <Section>
              <Header anchorId="fees" offset>
                {`Fees`}
              </Header>

              <Paragraph alignment="justify">
                {`TODO: Give a brief overview of fees and link to the actual page`}
              </Paragraph>
            </Section>

            <Section>
              <Header anchorId="blog" offset>
                {`Blog`}
              </Header>

              <Paragraph alignment="justify">
                {`TODO: Reference the blog - maybe this shouldn't be a section, per se`}
              </Paragraph>
            </Section>

            <Section>
              <Header anchorId="team" offset>
                {`Meet the team`}
              </Header>

              <Paragraph alignment="justify">
                {`TODO: Talk about the "team" - i.e. Samuel Slade, Director. Maybe don't call it "team"`}
              </Paragraph>
            </Section>

            <Section>
              <Header anchorId="values" offset>
                {`Our values`}
              </Header>

              <Paragraph alignment="justify">
                {`TODO: Talk about our values - namely that we aim to not outsource`}
              </Paragraph>
            </Section>
          </MainSection>
        </Container>
      </Layout>
    </Page>
  )
}

export default About