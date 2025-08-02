import React from 'react'
import ImgSlide from '../../component/Promotion/ImgSlide'
import styled from 'styled-components'
import CardSection from '../../component/Rangking/CardSection'
import RangkingSection from '../../mocdata/RangkingSection'
import TitleData from '../../component/Rangking/TitleData'
import UserCardData from '../../mocdata/UserCardData'

const Home = () => {
  return (
    <HomeContainer>
      <ImgSlide />
      <TitleData title="이달의 랭킹 TOP5" text="가장 인기있는 게임을 만나보세요" />
      <CardSection RangkingSection={RangkingSection} />
      <TitleData title="이달의 인기 유저 TOP5" text="가장 인기있는 게임을 만나보세요" />
      <CardSection RangkingSection={UserCardData} />
      
    </HomeContainer>
  ) 
} 

export default Home

const HomeContainer = styled.div`
    background-color: #141D2F;
    height: 170vh;
`