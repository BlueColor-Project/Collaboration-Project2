import React, { useState } from 'react'
import styled from 'styled-components'
import Promotion1 from '../../images/promotion1.png'
import Promotion2 from '../../images/promotion2.png'
import Promotion3 from '../../images/promotion3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const ImgSlide = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const NextArrow = (props) => {
    const { onClick, className } = props;
    return (
      <FaChevronCircleRight
      className={className}
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '30px',
        cursor: 'pointer',
        color: '#fff',
        '&:hover': {
          color: '#D9D9D9',
          transform: 'translateY(-50%) scale(1.1)',
          transition: 'all 0.5s ease'
        }
      }}
       />
    )
  } 

  const PrevArrow = (props) => {
    const {  onClick, className } = props;
    return (
      <FaChevronCircleLeft
      className={className}
      style={{
        position: 'absolute',
        left: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '30px',
        cursor: 'pointer',
        color: '#fff',
        '&:hover': {
          color: '#D9D9D9',
          transform: 'translateY(-50%) scale(1.1)',
          transition: 'all 0.5s ease'
        }
      }}
      onClick={onClick} />
    )
  }

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    customPaging: (i) => (
      <div className="slick-dot">
        <Dot active={i === currentSlide} onClick={() => handleSlideChange(i)}/>
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


  return (
    <ImgSlideContainer>
        <Slider {...settings}>
          <SliderContainer>
            <ImgSlideImg src={Promotion1} alt="Promotion1"/>
            <Description>
            <ImgSlideTitle>판타지 of War</ImgSlideTitle>
            <ImgSlideText>경험하지 못한 신비로운 전쟁의 세계</ImgSlideText>
            </Description>
          </SliderContainer>
          <SliderContainer>
            <ImgSlideImg src={Promotion2} alt="Promotion1"/>
            <Description>
            <ImgSlideTitle>Ironfall: 최후의 성벽</ImgSlideTitle>
            <ImgSlideText>당신은 마지막 방패이자, 인류의 희망이다</ImgSlideText>
            </Description>
          </SliderContainer>
          <SliderContainer>
            <ImgSlideImg src={Promotion3} alt="Promotion1"/>
            <Description>
            <ImgSlideTitle>Serene Valley (세린 밸리)</ImgSlideTitle>
            <ImgSlideText>조용한 계곡에서 피어나는 당신만의 삶</ImgSlideText>
            </Description>
          </SliderContainer>
        </Slider>
    </ImgSlideContainer>
  )
}

export default ImgSlide

const ImgSlideContainer = styled.div`
    width: 100%;
    height: 500px;
    background-color: #141D2F;
    position: relative;
    overflow: visible;
`
const SliderContainer = styled.div`
    position: relative;
    width: 100%;
`

const ImgSlideImg = styled.img`
    position: relative;
    width: 100%;
    height: 500px;
`

const Description = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`

const ImgSlideTitle = styled.h2`
    top: 20px;
    left: 20px;
    color: #fff;
`
const ImgSlideText = styled.p`

    bottom: 20px;
    left: 20px;
    color: #fff;
`

const Dot = styled.div`
    position: absolute;
    bottom: 200%;
    width: 10px;
    height: 10px;
    background-color: ${props => props.active ? '#D9D9D9' : '#7D7D7D'};
    border-radius: 50%;
    cursor: pointer;
`
