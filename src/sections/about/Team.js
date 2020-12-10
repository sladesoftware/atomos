import React from "react"
import styled from "styled-components"
import { Header, Paragraph } from "components/typography"
import { media } from "styles"
import samuelslade from "images/samuelslade.jpg"

const Container = styled.div`
  margin-bottom: 2rem;
`

const TeamMember = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
`

const ImageContainer = styled.div`
  position: relative;
  width: 162;
  height: 162px;
  overflow: hidden;
  border-radius: 50%;
`

const Image = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 2rem;
  padding-top: 0;

  ${media.phone`
    padding-left: 0;
    padding-top: 2rem;
  `}
`

const Name = styled.h4`
  margin-bottom: 0.2rem;
`

const Title = styled.h5`
  color: #555;
  font-weight: normal;
  margin-bottom: 1rem;
`

const Team = () => (
  <Container>
    <Header anchorId="team" offset>
      {`Meet the team`}
    </Header>

    <TeamMember>
      <ImageContainer>
        <Image alt="Samuel Slade" src={samuelslade} />
      </ImageContainer>

      <Description>
        <Name>Samuel Slade</Name>
        <Title>Director</Title>

        <Paragraph alignment="justify">
          {`Sam is the Director of Slade Software Ltd and currently the only consultant
          within the business. He is a husband-to-be, father and passionate technologist.
          His notable accomplishments include raising his two daughters, getting engaged to
          his partner, becoming a member of Mensa in 2018, starting his own business,
          and attaining a First Class Degree with Honours from University.`}
        </Paragraph>
      </Description>
    </TeamMember>
  </Container>
)

export default Team