import React from 'react';
import styled from 'styled-components';
import { FinDuoData } from '../../mocdata/FinDuoData';
import ButtonField from '../../component/Form/ButtonField';

const FinDuoPage = () => {

  return (
    <Container>
      <Header>
        <InputBox>
        <OptionInput type="select" placeholder="전체" />
          <MainInput type="text" placeholder="검색어를 입력하세요" />
          <ButtonField buttonText="검색"
          width="100px"
          padding="13px 20px"
          backgroundcolor="#4285f4"
          color="white"
          border="none"
          borderRadius="0 6px 6px 0"
          cursor="pointer"
          />
        </InputBox>
        <Title>듀오 찾기</Title>
        <Subtitle>함께 게임을 즐길 파트너를 찾아보세요!</Subtitle>
      </Header>
      
      <GamersGrid>
        {FinDuoData.map((gamer) => (
          <GamerCard key={gamer.id}>
            <ProfileSection>
              <ProfileImage>
                <img src={`https://i.pravatar.cc/60?img=${gamer.id}`} alt={gamer.name} />
              </ProfileImage>
              <GamerInfo>
                <GamerName>{gamer.name}</GamerName>
                <GameName>{gamer.game}</GameName>
              </GamerInfo>
            </ProfileSection>
            
            <StatsSection>
              <BadgeSection>
              <TierBadge tierColor={gamer.tierColor}>
                {gamer.tier}
              </TierBadge>
              <LevelInfo>레벨 {gamer.level}</LevelInfo>
              </BadgeSection>
              <PositionInfo>포지션: {gamer.position}</PositionInfo>
            </StatsSection>
            
            <ButtonField buttonText="듀오 신청"
              width="100%"
              padding="10px"
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
          </GamerCard>
        ))}
      </GamersGrid>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 40px 20px;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 40px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const OptionInput = styled.select`
  display: flex;
  border: 1px solid #ccc;
  width: 150px;
  height: 50px;
  align-items: center;
  border-radius: 6px 0 0 6px;
`;

const MainInput = styled.input`
  display: flex;
  align-items: center;
  width: 800px;
  height: 50px;
  border: 1px solid #ccc;
  padding: 0 10px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

const GamersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`;

const GamerCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GamerInfo = styled.div`
  flex: 1;
`;

const GamerName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
`;

const GameName = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const StatsSection = styled.div`
  margin-bottom: 20px;
`;

const BadgeSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  gap: 8px;
`;

const TierBadge = styled.span`
  display: inline-block;
  background-color: ${props => props.tierColor};
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const LevelInfo = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;

const PositionInfo = styled.div`
  font-size: 14px;
  color: #666;
`;

export default FinDuoPage;