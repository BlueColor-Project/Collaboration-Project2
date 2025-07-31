import React from 'react'
import ImgSlide from '../../component/Promotion/ImgSlide'
import RangkingTitle from '../../component/Rangking/RangkingTitle'
import RangkingCardSection from '../../component/Rangking/RangkingCard'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeContainer>
      <ImgSlide />
      <RangkingTitle />
      <RangkingCardSection/>
    </HomeContainer>
  ) 
} 

export default Home

const HomeContainer = styled.div`
    width: 100%;
    background-color: #141D2F;
    height: 150vh;
    padding: 0 20px;
`