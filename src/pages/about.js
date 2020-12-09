import React from "react"
import styled from "styled-components"
import { Page, Layout } from "components"
import { media } from "styles"
import {
  CompanyPanel,
  AboutTheCompany,
  Services,
  Fees,
  Blog,
  Team,
  Values
} from "sections/about"

const Container = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  padding: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`

const CompanyPanelContainer = styled.div`
  margin-right: 2rem;

  ${media.phone`
    margin-right: 0;
  `}
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

const About = () => (
  <Page title="About">
    <Layout>
      <Container>
        <CompanyPanelContainer>
          <CompanyPanel />
        </CompanyPanelContainer>

        <MainSection>
          <AboutTheCompany />
          <Services />
          <Fees />
          <Blog />
          <Team />
          <Values />
        </MainSection>
      </Container>
    </Layout>
  </Page>
)

export default About