import React from "react"
import styled from "styled-components"
import { useCompanyDetails } from "queries"

const Container = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Panel = styled.div`
  max-width: 30rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  padding: 2rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1rem solid ${props => props.theme.colors.secondary};
`

const Header = styled.h3`
  text-align: center;
`

const Line = styled.hr`
  width: 5rem;
`

const Button = styled.a`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem 2rem;
  border: none;
  margin-bottom: 0.5rem;
  cursor: pointer;
  text-decoration: none;
`

const ButtonText = styled.p`
  margin: 0;
  color: #fff;
  font-variant: small-caps;
  font-weight: bold;
  text-align: center;
`

const SubText = styled.h6`
  color: #aaa;
  font-weight: normal;
`

const CallToAction = () => {
  const { email } = useCompanyDetails()

  return (
    <Container>
      <Panel>
        <Header>
          {`Get in touch to learn more!`}
        </Header>

        <Line />

        <Button href={`mailto:${email}?subject=Services Enquiry`}>
          <ButtonText>
            {`Drop me an`}
            <br />
            {`Email`}
          </ButtonText>
        </Button>

        <SubText>
          {`(Opens your default email app)`}
        </SubText>
      </Panel>
    </Container>
  )
}

export default CallToAction