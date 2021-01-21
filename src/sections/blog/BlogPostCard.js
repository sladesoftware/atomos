import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { Date, IconText } from "components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`

const Title = styled.h1`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const Content = styled.p`
  flex: 1 auto;
  margin: 0;
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0.5rem 0.5rem;
  border: 0;
  border-top: 1px;
  border-bottom: 1px;
  border-style: solid;
  border-color: #ddd;
`

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    margin-right: 2rem;
  }
`

const Spacer = styled.div`
  flex: 1 auto;
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

const BlogPostCard = ({ title, publishedDate, text, readTime, url }) => (
  <Container>
    <Title>
      {title}
    </Title>

    <Content>
      {text}
    </Content>

    <ActionContainer>
      <Actions>
        <Date date={publishedDate} />
        <IconText icon={faBookOpen} text={getReadTime(readTime)} />
      </Actions>

      <Spacer />

      <StyledLink to={url} title="View">
        <FontAwesomeIcon icon={faEye} />
      </StyledLink>
    </ActionContainer>
  </Container>
)

BlogPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  publishedDate: PropTypes.string,
  text: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}

export default BlogPostCard