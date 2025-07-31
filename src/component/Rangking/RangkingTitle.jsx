import React from 'react'
import styled from 'styled-components'

const RangkingTitle = () => {
  return (
    <RangkingTitleContainer>
    <TitleField>이달의 랭킹 TOP5</TitleField>
    <TextField>가장 인기있는 게임을 만나보세요</TextField>
    </RangkingTitleContainer>
  )
}

export default RangkingTitle

const RangkingTitleContainer = styled.div`
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


  // const RangkingTitle = (props) => {
  //   const { title, text } = props;
  //   return (
  //     <RangkingTitleContainer>
  //       <RangkingTitleText>{title}</RangkingTitleText>
  //       <RangkingText>{text}</RangkingText>
  //     </RangkingTitleContainer>
  //   )
  // }
  
  // export default RangkingTitle
  
  // const RangkingTitleContainer = styled.div`
  //     padding: 0 20px;
  //     margin: 40px 0 0 0;
  //     width: 100%;
  //     height: 100px;
  // `
  
  // const RangkingTitleText = styled.h2`
  //     font-size: 36px;
  //     font-weight: 700;
  //     color: #fff;
  //     margin: 0 0 5px 0;
  // `
  
  // const RangkingText = styled.p`
  //     font-size: 16px;
  // `