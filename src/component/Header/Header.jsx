import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
     <Logo />
      <Menu />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin: 20px 0;
    background-color: white;
`
