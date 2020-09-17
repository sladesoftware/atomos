import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const QUERY = graphql`
  query {
    site {
      siteMetadata {
        company {
          name
          registrationNumber
          registeredAddress {
            street
            town
            county
            country
            postcode
          }
        }
      }
    }
  }
`

const Container = styled.div`
  text-align: left;
  font-size: 0.7rem;
  margin: 2rem;
  float: left;
`

const Header = styled.h5`
  margin-bottom: 0.6rem;
`

const CompanyName = styled.p`
  color: ${props => props.theme.colors.muted};
  margin-bottom: 0.6rem;
`

const Label = styled.label`
  font-weight: bold;
`

const Address = styled.p`
  color: ${props => props.theme.colors.muted};
  margin-bottom: 0.6rem;
`

const RegistrationNumber = styled.p`
  color: ${props => props.theme.colors.muted};
  margin-bottom: 0.6rem;
`

const CompanyDetails = () => {
  const { site } = useStaticQuery(QUERY)

  const company = site.siteMetadata.company
  const address = company.registeredAddress

  return (
    <Container>
      <Header>
        Company
      </Header>

      <CompanyName>
        {company.name}
      </CompanyName>

      <Label>
        Registered Address
      </Label>
      <Address>
        {[address.street, address.town, address.county, address.country, address.postcode].join(", ")}
      </Address>

      <Label>
        Company Number
      </Label>
      <RegistrationNumber>
        {company.registrationNumber}
      </RegistrationNumber>
    </Container>
  )
}

export default CompanyDetails