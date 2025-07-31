import React from 'react';
import styled from 'styled-components';
import { FaGoogle, FaGithub, FaFacebookF } from 'react-icons/fa';
import InputField from '../../component/Form/InputField';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()

  return (
    <LoginContainer>
      <LoginCard>
        <Title>로그인</Title>
        <InputField labeldata="이메일 또는 사용자명" typedata="text" placeholder="이메일 또는 사용자명을 입력하세요" />

        <InputGroup>
          <PasswordHeader>
            <Label>비밀번호</Label>
            <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
          </PasswordHeader>
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </InputGroup>

        <LoginButton>로그인</LoginButton>

        <Divider>
          <DividerLine />
          <DividerText>또는 다음으로 계속</DividerText>
          <DividerLine />
        </Divider>

        <SocialLoginContainer>
          <SocialButton>
            <FaGoogle />
          </SocialButton>
          <SocialButton>
            <FaGithub />
          </SocialButton>
          <SocialButton>
            <FaFacebookF />
          </SocialButton>
        </SocialLoginContainer>

        <SignupLink>
          계정이 없으신가요? <SignupText onClick={() => navigate("/signup")}>회원가입</SignupText>
        </SignupLink>
      </LoginCard>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 20px;
`;

const LoginCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
  color: #333;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const PasswordHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const ForgotPassword = styled.a`
  font-size: 14px;
  color: #666;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #333;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #4285f4;
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 24px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #3367d6;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
`;

const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #ddd;
`;

const DividerText = styled.span`
  padding: 0 16px;
  font-size: 14px;
  color: #666;
`;

const SocialLoginContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 24px;
`;

const SocialButton = styled.button`
  width: 48px;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #bbb;
    background-color: #f8f9fa;
  }
  
  svg {
    font-size: 18px;
    color: #666;
  }
`;

const SignupLink = styled.div`
  text-align: center;
  font-size: 14px;
  color: #666;
`;

const SignupText = styled.span`
  color: #4285f4;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
