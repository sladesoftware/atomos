import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ViewIcon } from "icons"
import GitHub from "components/AccountLinks/GitHub"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  max-width: 20rem;
`

// Header
const CardHeader = styled.div`
  text-align: center;
  padding: 1rem 0;
`

const HeaderText = styled.h3`
  margin: 0;
`

// Image
const CardImage = styled.div`
  position: relative;
  flex: 1 auto;
`

const Image = styled.img`
  margin: 0;
`

const ViewIconContainer = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`

// Body
const CardBody = styled.div`
  padding: 1rem;
`

const Description = styled.p`
  padding: 0;
  margin: 0;
`

// Actions
const CardActions = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1rem 1rem 1rem;
  margin-right: -1rem;
`

const ReadMoreLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const Spacer = styled.div`
  flex: 1 auto;
`

const PortfolioCard = () => (
  <Card>
    <CardHeader>
      <HeaderText>
        Header
      </HeaderText>
    </CardHeader>

    <CardImage>
      <Image src="https://via.placeholder.com/400x250.png" />

      <ViewIconContainer>
        <ViewIcon url="/portfolio" />
      </ViewIconContainer>
    </CardImage>

    <CardBody>
      <Description>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
      </Description>
    </CardBody>

    <CardActions>
      <ReadMoreLink to="/">
        {`read more`}
      </ReadMoreLink>

      <Spacer />

      <GitHub url="https://github.com/sladesoftware/atomos" />
    </CardActions>
  </Card>
)

export default PortfolioCard