import React from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";
import TitleData from './TitleData'

const CardSection = (props) => {
    return (
        <>
        <RangkingCardContainer>
            <CardGroupContainer>
          <CardGroup>
            {props.RangkingSection.map((item) => (
              <CardBox key={item.GameRanking}>
                <CardImage src={item.image} alt="card" />
                <NumberBox>{item.GameRanking}</NumberBox>
                <CardTitle>{item.GameTitle}</CardTitle>
              <SudSection>
                <CardSubTitle>{item.GameGenre}</CardSubTitle>
                <FaStar color="#E19010" size={20}/>
                <CardSubText>{item.Rating}</CardSubText>
              </SudSection>
              <CardText>{item.Description}</CardText>
            </CardBox>
            ))}
          </CardGroup>
          </CardGroupContainer>
        </RangkingCardContainer>
        </>
      )
}

export default CardSection

// 


const RangkingCardContainer = styled.div`
    padding: 0 20px;
`

const CardGroupContainer = styled.div`
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
`

const CardGroup = styled.div`
    display: flex;
    gap: 20px;
`

const CardBox = styled.div`
    position: relative;
    width: 278px;
    height: 278px;
    background-color: #fff;
    border-radius: 15px;
`

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
    filter: brightness(0.7);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        filter: brightness(1);
        opacity: 1;
    }
`

const NumberBox = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    background-color: #E19010;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
`

const CardTitle = styled.h2`
    position: absolute;
    top: 120px;
    left: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
`

const SudSection = styled.div`
    position: absolute;
    top: 170px;
    left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`

const CardSubTitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    border-radius: 20px;
    padding: 7px;
    color: #FFF;
    margin-right: 10px;
    background-color: rgba(65, 63, 59, 0.8);
`

const CardSubText = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #fff;
`

const CardText = styled.p`
    position: absolute;
    top: 230px;
    left: 10px;
    font-size: 14px;
    font-weight: 400;
    padding: 0 10px;
    color:rgb(242, 225, 225);
`
