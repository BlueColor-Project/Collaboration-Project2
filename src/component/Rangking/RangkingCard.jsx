import React from 'react'
import styled from 'styled-components'

const RangkingCard = () => {
  return (
    <RangkingCardContainer>
      <RangkingCardTitle>이달의 랭킹 TOP5</RangkingCardTitle>
      <RangkingCardText>가장 인기있는 게임을 만나보세요</RangkingCardText>
    </RangkingCardContainer>
  )
}

export default RangkingCard

const RangkingCardContainer = styled.div`
    padding: 0 20px;
    margin: 40px 0 0 0;
    width: 100%;
    height: 100px;
`

const RangkingCardTitle = styled.h2`
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 5px 0;
    
`

const RangkingCardText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    margin: 0;
`