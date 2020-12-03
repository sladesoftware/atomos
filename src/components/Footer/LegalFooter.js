import React from "react"
import styled from "styled-components"

const StyledLegalFooter = styled.section`
  background-color: #333;
  padding: 0.9375rem 1.875rem;
`

const LegalBlock = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`

const LegalContent = styled.div`
  margin: 0.125rem 0.625rem;
  white-space: nowrap;
`

const LegalFooter = () => (
  <StyledLegalFooter>
    <LegalBlock>
      <LegalContent>
        Copyright &copy; Slade Software Ltd 2020
      </LegalContent>
    </LegalBlock>
  </StyledLegalFooter>
)

export default LegalFooter