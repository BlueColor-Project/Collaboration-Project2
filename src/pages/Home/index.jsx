import React from 'react'
import ImgSlide from '../../component/Promotion/ImgSlide'
import RangkingCard from '../../component/Rangking/RangkingCard'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeContainer>
      <ImgSlide />
      <RangkingCard />
    </HomeContainer>
  ) 
} 

export default Home

const HomeContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: #141D2F;
`