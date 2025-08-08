import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaUser, FaEye, FaThumbsUp, FaComment } from 'react-icons/fa';
import CommunityData from '../../mocdata/CommunityData';

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

 
  const categories = ['전체', '리그 오브 레전드', '오버워치 2', '발로란트', '메이플스토리', '스타크래프트'];

  return (
    <CommunityContainer>
      <Header>
        <SearchSection>
          <CategorySelect 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </CategorySelect>
          <SearchInputWrapper>
            <SearchInput 
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchButton>
              <FaSearch />
              검색
            </SearchButton>
          </SearchInputWrapper>
        </SearchSection>
      </Header>

      <PostsList>
        {CommunityData.map((post) => (
          <PostItem key={post.id}>
            <PostHeader>
              <CategoryTag category={post.category}>
                {post.category}
              </CategoryTag>
              {post.isHot && <HotBadge>HOT</HotBadge>}
            </PostHeader>
            
            <PostTitle>{post.title}</PostTitle>
            
            <PostMeta>
              <AuthorInfo>
                <FaUser />
                <span>{post.author}</span>
                <TimeStamp>{post.time}</TimeStamp>
              </AuthorInfo>
              
              <PostStats>
                <StatItem>
                  <FaEye />
                  <span>{post.views}</span>
                </StatItem>
                <StatItem>
                  <FaThumbsUp />
                  <span>{post.likes}</span>
                </StatItem>
                <StatItem>
                  <FaComment />
                  <span>{post.comments}</span>
                </StatItem>
              </PostStats>
            </PostMeta>
          </PostItem>
        ))}
      </PostsList>
    </CommunityContainer>
  );
};

const CommunityContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const SearchSection = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CategorySelect = styled.select`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  min-width: 120px;

  &:focus {
    outline: none;
    border-color: #4285f4;
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #4285f4;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3367d6;
  }

  svg {
    font-size: 12px;
  }
`;

const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PostItem = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const CategoryTag = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  background-color: ${props => {
    switch (props.category) {
      case '리그 오브 레전드': return '#C89B3C';
      case '오버워치 2': return '#F99E1A';
      case '발로란트': return '#FF4655';
      case '메이플스토리': return '#4CAF50';
      case '스타크래프트': return '#9C27B0';
      default: return '#666';
    }
  }};
`;

const HotBadge = styled.span`
  padding: 2px 6px;
  background-color: #ff4444;
  color: white;
  border-radius: 3px;
  font-size: 10px;
  font-weight: bold;
`;

const PostTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
  cursor: pointer;
  line-height: 1.4;

  &:hover {
    color: #4285f4;
  }
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;

  svg {
    font-size: 12px;
  }
`;

const TimeStamp = styled.span`
  color: #999;
  font-size: 13px;
`;

const PostStats = styled.div`
  display: flex;
  gap: 16px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #666;

  svg {
    font-size: 12px;
  }
`;

export default Community;