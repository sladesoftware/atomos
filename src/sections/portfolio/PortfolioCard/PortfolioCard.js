import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { IconLink } from "components"
import { GitHubIcon } from "icons"
import { Card } from "./Card"
import { CardHeader } from "./CardHeader"
import { CardContent } from "./CardContent"
import { CardActions } from "./CardActions"
import CardImage from "./CardImage"

const HeaderText = styled.h3`
  margin: 0;
`

const Description = styled.p`
  padding: 0;
  margin: 0;
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

const PortfolioCard = props => {
  const {
    title,
    imageUrl,
    siteUrl,
    description,
    tag,
    gitHubUrl,
    showGitHub,
    type
  } = props

  return (
    <Card>
      <CardHeader title={title}>
        <HeaderText>
          {title}
        </HeaderText>
      </CardHeader>

      <CardImage
        imageUrl={imageUrl}
        siteUrl={siteUrl}
        type={type}
      />

      <CardContent>
        <Description>
          {description}
        </Description>
      </CardContent>

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
              <IconLink url={gitHubUrl}>
                <GitHubIcon />
              </IconLink>
            ) : (
                <i>{`coming soon`}</i>
              )}
          </>
        )}
      </CardActions>
    </Card>
  )
}

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
  showGitHub: PropTypes.bool,
  type: PropTypes.oneOf(["project", "article"])
}

export default PortfolioCard