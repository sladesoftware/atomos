import React from "react"
import styled from "styled-components"
import { Page, Layout, GutterContainer } from "components"
import { media } from "styles"
import {
  CompanyPanel,
  AboutTheCompany,
  ServicesAndFees,
  Blog,
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
  border-left: 1px dotted ${props => props.theme.colors.primary};
  padding-left: 2rem;

  ${media.phone`
    border: none;
    padding: 0;
  `}
`

const About = () => (
  <Page title="About">
    <Layout>
      <GutterContainer>
        <Container>
          <CompanyPanelContainer>
            <CompanyPanel />
          </CompanyPanelContainer>

          <MainSection>
            <AboutTheCompany />
            <Values />
            <ServicesAndFees />
            <Blog />
          </MainSection>
        </Container>
      </GutterContainer>
    </Layout>
  </Page>
)

export default About