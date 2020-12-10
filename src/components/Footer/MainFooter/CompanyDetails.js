import React from "react"
import styled from "styled-components"
import { CircularLogo } from "components"
import { useCompanyDetails } from "queries"
import MainFooterItem from "./MainFooterItem"

const Block = styled.div`
  padding: 1rem 0;
`

const CompanyName = styled.div`
  color: #fff;
  font-weight: bold;
`

const Address = styled.div`
`

const Email = styled.div`
`

const CompanyDetails = () => {
  const company = useCompanyDetails()
  const address = company.registeredAddress

  return (
    <MainFooterItem>
      <Block>
        <CircularLogo size="md" />
      </Block>

      <Block>
        <CompanyName>
          {company.name}
        </CompanyName>
        {company.registrationNumber}
      </Block>

      <Block>
        <Address>
          {[
            address.street,
            address.town,
            address.county,
            address.country,
            address.postcode
          ].join(", ")}
        </Address>
      </Block>

      <Block>
        <Email>
          {company.email}
        </Email>
      </Block>
    </MainFooterItem>
  )
}

export default CompanyDetails