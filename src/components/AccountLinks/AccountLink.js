import { Link } from "gatsby"
import styled from "styled-components"

const AccountLink = styled(Link)`
  color: unset;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
  font-size: 1.4rem;
  transition: color 0.1s ease-out;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

export default AccountLink