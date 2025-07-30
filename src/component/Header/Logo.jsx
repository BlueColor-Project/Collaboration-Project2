import React from 'react'
import MainLogo from '../../images/mainLogo.png'
import styled from 'styled-components'

const Logo = () => {
  return (
    <LogoContainer>
            <img src={MainLogo} alt="MainLogo" />
    </LogoContainer>
  )
}

export default Logo

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    cursor: pointer;
    img {
        width: 90px;
        height: 35px;
    }
`

