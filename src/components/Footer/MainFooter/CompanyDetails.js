import React from "react"
import styled from "styled-components"
import { useCompanyDetails } from "./useCompanyDetails"
import MainFooterItem from "./MainFooterItem"
import logo from "images/apple-touch-icon.png"

const Block = styled.div`
  padding: 1rem 0;
`

const LogoContainer = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 50%;
`

const Logo = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
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
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
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