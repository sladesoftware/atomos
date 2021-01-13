import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Page, Layout, ServiceCard } from "components"

const Container = styled.div`
  margin-top: 2rem;
`

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const Services = ({ data: { services } }) => (
  <Page title="Work with me">
    <Layout>
      <Container>
        {services.description}

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