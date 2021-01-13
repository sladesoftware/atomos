import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import {
  Page,
  PageHeader,
  Layout,
  ServiceCard,
  GutterContainer
} from "components"

const Container = styled.div`
  margin-top: 2rem;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const getDescriptionParagraphs = description =>
  description.join(" ").split("\n")

const Services = ({ data: { services } }) => (
  <Page title="Work with me">
    <Layout>
      <Container>
        <GutterContainer>
          <InnerContainer>
            <PageHeader>
              {`Work with me`}
            </PageHeader>

            {getDescriptionParagraphs(services.description).map((description, index) => (
              <p key={index}>
                {description}
              </p>
            ))}

            <ServicesContainer>
              {services.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  features={service.features || []}
                  mainCharge={service.mainCharge}
                  secondaryCharge={service.secondaryCharge}
                />
              ))}
            </ServicesContainer>
          </InnerContainer>
        </GutterContainer>
      </Container>
    </Layout>
  </Page>
)

export default Services

export const query = graphql`
  query {
    services {
      description
      services {
        title
        features
        mainCharge {
          rate
          unit
        }
        secondaryCharge {
          rate
          unit
        }
      }
    }
  }
`