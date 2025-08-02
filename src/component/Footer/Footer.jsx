import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { ColumnData, FooterInfoData } from '../../mocdata/FooterData'
import ButtonField from '../Form/ButtonField'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LeftSection>
          <Logo>DUO</Logo>
          <Slogan>협력적인 솔루션을 통한 혁신과 탁월함</Slogan>
          <SocialIcons>
            <SocialIcon>
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon>
              <FaTwitter />
            </SocialIcon>
            <SocialIcon>
              <FaInstagram />
            </SocialIcon>
            <SocialIcon>
              <FaLinkedinIn />
            </SocialIcon>
          </SocialIcons>
        </LeftSection>

        <MiddleSection>
          <FooterColumn>
            <ColumnTitle>바로가기</ColumnTitle>
            {ColumnData.map((item) => (
              <ColumnLink key={item.id}>{item.title}</ColumnLink>
            ))}
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>연락처</ColumnTitle>
            {FooterInfoData.map((item) => (
              <ContactInfo key={item.id}>{item.title}</ContactInfo>
            ))}
          </FooterColumn>
        </MiddleSection>

        <RightSection>
          <ColumnTitle>뉴스레터</ColumnTitle>
          <NewsletterForm>
            <EmailInput type="email" placeholder="이메일을 입력하세요" />
            <ButtonField buttonText="구독하기"
             padding="12px 24px"
             backgroundcolor="#4285f4"
             color="white"
             border="none"
             borderRadius="6px"
             fontSize="14px"
             fontWeight="500"
             cursor="pointer"
             transition="background-color 0.2s"
             hoverbackgroundcolor="#3367d6"
            />
          </NewsletterForm>
        </RightSection>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 60px 0;
  width: 100%;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #4285f4;
  margin: 0;
`

const Slogan = styled.p`
  font-size: 14px;
  color: #ccc;
  margin: 0;
  line-height: 1.5;
`

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4285f4;
  }

  svg {
    font-size: 16px;
    color: white;
  }
`

const MiddleSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ColumnTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin: 0 0 8px 0;
`

const ColumnLink = styled.a`
  font-size: 14px;
  color: #ccc;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #4285f4;
  }
`

const ContactInfo = styled.p`
  font-size: 14px;
  color: #ccc;
  margin: 0;
  line-height: 1.6;
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const NewsletterForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const EmailInput = styled.input`
  padding: 12px 16px;
  border: 1px solid #333;
  border-radius: 6px;
  background-color: #2a2a2a;
  color: white;
  font-size: 14px;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    border-color: #4285f4;
  }
`