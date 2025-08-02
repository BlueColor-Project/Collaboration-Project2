import React from 'react'
import styled from 'styled-components'

const TitleData = ({title, text}) => {
  return (
    <>
        <TitleContainer>
    <TitleField>{title}</TitleField>
    <TextField>{text}</TextField>
    </TitleContainer>
    </>
  )
}

export default TitleData

const TitleContainer = styled.div`
    padding: 0 20px;
    margin: 40px 0 0 0;
    width: 100%;
    height: 100px;
`

const TitleField = styled.h2`
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 5px 0;
  `

  const TextField = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #C0C0C0;
    margin: 0 0 5px 0;
  `