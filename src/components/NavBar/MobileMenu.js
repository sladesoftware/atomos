import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const IconButton = styled.button`
  background: transparent;
  border: none;
`

const Icon = styled(FontAwesomeIcon)`
`

const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: ${props => props.open ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
`

const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`

const MobileMenu = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <IconButton
        onClick={e => {
          e.preventDefault()
          setIsMenuOpen(true)
        }}
      >
        <Icon icon={faBars} />
      </IconButton>

      <Menu open={isMenuOpen}>
        <CloseButtonContainer>
          <IconButton
            onClick={e => {
              e.preventDefault()
              setIsMenuOpen(false)
            }}
          >
            <Icon icon={faTimes} />
          </IconButton>
        </CloseButtonContainer>

        {children}
      </Menu>
    </>
  )
}

MobileMenu.propTypes = {
  children: PropTypes.node.isRequired
}

export default MobileMenu