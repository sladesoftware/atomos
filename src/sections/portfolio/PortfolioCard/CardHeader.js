import styled from "styled-components"

export const CardHeader = styled.div`
  text-align: center;
  padding: 1rem;

  & > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`