import React from "react"
import styled from "styled-components"
import { CircularLogo } from "components"
import { useCompanyDetails } from "queries"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

const CompanyPanel = () => {
  const company = useCompanyDetails()

  return (
    <Container>
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
    </Container>
  )
}

export default CompanyPanel