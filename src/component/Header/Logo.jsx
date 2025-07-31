import React from 'react'
import MainLogo from '../../images/mainLogo.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate()
    return (
    <LogoContainer>
            <img src={MainLogo} alt="MainLogo" onClick={() => navigate("/")} />
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

