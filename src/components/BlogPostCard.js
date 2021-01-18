import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
  margin: 1rem 0;
`

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

const Title = styled.h1`
  display: inline-block;
`

const Spacer = styled.div`
  display: inline-block;
  flex-grow: 1;
`

const Subtitle = styled.h4`
  display: inline-block;
  white-space: nowrap;
`

const Content = styled.p`
  margin: 0;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`

const ReadTime = styled.div`
  display: inline-block;
  font-variant: small-caps;
  color: ${props => props.theme.colors.muted};
  white-space: nowrap;
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const getReadTime = readTime => {
  if (readTime === 1) {
    return `${readTime} minute`
  }

  return `${readTime} minutes`
}

const BlogPostCard = ({ title, subtitle, text, readTime, url }) => (
  <Container>
    <TitleContainer>
      <Title>
        {title}
      </Title>

      <Spacer />

      <Subtitle>
        {subtitle}
      </Subtitle>
    </TitleContainer>

    <Content>
      {text}
    </Content>

    <Actions>
      <ReadTime>
        {getReadTime(readTime)}
      </ReadTime>

      <Spacer />

      <StyledLink to={url} title="View">
        <FontAwesomeIcon icon={faEye} />
      </StyledLink>
    </Actions>
  </Container>
)

BlogPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}

export default BlogPostCard