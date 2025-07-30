import React from 'react'
import styled from 'styled-components'
import { MenuData } from '../../mocdate/MenuData'

const Menu = () => {
  return (
    <MenuContainer>
        <MenuList>
            {MenuData.map((menu) => (
                <MenuLink key={menu.id}>{menu.name}</MenuLink>
            ))}
            <MenuLink2>로그인</MenuLink2>
            <Slash>/</Slash>
            <MenuLink2>회원가입</MenuLink2>
        </MenuList>
    </MenuContainer>
  )
}

export default Menu

const MenuContainer = styled.div`
    width: 100%;
    display: flex;
`

const MenuList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const MenuLink = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    margin-right:30px;
    color: #757575;
    cursor: pointer;
    &:hover {
        color: #000;
    }
`

const MenuLink2 = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    color: #757575;
    margin-right:6px;
    cursor: pointer;
    &:hover {
        color: #000;
    }
`

const Slash = styled.a`
     text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    color: #757575;
    margin-right:6px;
`