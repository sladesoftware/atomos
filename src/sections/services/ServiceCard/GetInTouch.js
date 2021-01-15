import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 1rem;
  text-align: center;
  height: 6rem;
  background-color: #ddd;
`

const InnerContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.h1`
  margin: 0;
`

const GetInTouch = () => (
  <Container>
    <InnerContainer>
      <Text>
        {`Get in touch`}
      </Text>
    </InnerContainer>
  </Container>
)

export default GetInTouch