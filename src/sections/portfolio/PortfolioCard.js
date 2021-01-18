import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { ViewIcon } from "icons"
import GitHub from "components/AccountLinks/GitHub"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  max-width: 20rem;
  margin-bottom: 2rem;
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
  text-align: center;
`

const Image = styled.img`
  margin: 0;
  max-height: 250px;
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
  padding: 0 0.5rem 0.5rem 0.5rem;
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

const PortfolioCard = ({ title, imageUrl, siteUrl, description, tag, gitHubUrl, showGitHub }) => (
  <Card>
    <CardHeader>
      <HeaderText>
        {title}
      </HeaderText>
    </CardHeader>

    <CardImage>
      <Image src={!!imageUrl && imageUrl !== "" ? imageUrl : "https://via.placeholder.com/400x250.png"} />

      {siteUrl && (
        <ViewIconContainer>
          <ViewIcon url={siteUrl} />
        </ViewIconContainer>
      )}
    </CardImage>

    <CardBody>
      <Description>
        {description}
      </Description>
    </CardBody>

    <CardActions>
      {tag && (
        <ReadMoreLink to={`/blog?tag=${tag}`}>
          {`read more`}
        </ReadMoreLink>
      )}

      <Spacer />

      {showGitHub && (
        <>
          {gitHubUrl ? (
            <GitHub url={gitHubUrl} />
          ) : (
              <>{`Coming soon`}</>
            )}
        </>
      )}
    </CardActions>
  </Card>
)

PortfolioCard.defaultProps = {
  showGitHub: false
}

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  siteUrl: PropTypes.string,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string,
  gitHubUrl: PropTypes.string,
  showGitHub: PropTypes.bool
}

export default PortfolioCard