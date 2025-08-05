import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGoogle, FaGithub, FaFacebookF } from 'react-icons/fa';
import InputField from '../../component/Form/InputField';
import { useNavigate } from 'react-router-dom';
import ButtonField from '../../component/Form/ButtonField';




const Login = () => {
  const navigate = useNavigate()

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const ClickLogin = () => {
    const ValidEmail = "test@example.com"
    const ValidEmailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const ValidPassword = "123456"
    const PasswordRule = /^[a-zA-Z0-9]*$/

    if (ValidEmailRule.test(Email) === false) {
      alert("이메일 형식이 올바르지 않습니다.");
      setEmail('');
    } else if(PasswordRule.test(password) === false){
      alert("비밀번호는 특수문자를 포함할 수 없습니다.");
      setPassword('');
    } else if(Email === ValidEmail && password === ValidPassword) {
      alert("로그인 성공")
      setEmail('');
      setPassword('');
      navigate('/');
    }else {
      alert("입력하신 정보가 일치하지 않습니다.")
      setEmail('');
      setPassword('');
    }
  }

   //1. 비밀번호 노출 버튼 생성
 //2. 보기 버튼 클릭 시 "보기" -> "숨기기" 텍스트 변경
 //3. 숨기기 버튼을 클릭 시 "숨기기" -> "보기" 텍스트 변경
 //4. 버튼 "숨기기"로 변경 시 input type = "text"로 변경
 //5. 버튼 "숨기기" -> "보기"로 변경 시 input type -> "password"로 변경

  const TogglePassword = () => {
    setShowPassword(ViewButton => !ViewButton);
   }



  return (
    <LoginContainer>
      <LoginCard>
        <Title>로그인</Title>
        <InputField 
        labeldata="이메일 또는 사용자명"
        typedata="text"
        placeholder="이메일 또는 사용자명을 입력하세요" 
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        maxLength={30}
        />

        <InputGroup>
          <PasswordHeader>
            <InputField
            labeldata="비밀번호" 
            typedata={showPassword ? "password" : "text"}
            passwordText="비밀번호를 잊으셨나요?" 
            placeholder="비밀번호를 입력하세요" 
            maxLength={20}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            />
            <ViewButton 
            onClick={TogglePassword}
            >
            {showPassword ? "보기" : "숨기기"}
            </ViewButton>
          </PasswordHeader>
        </InputGroup>
          <ButtonField 
          buttonText="로그인" 
          backgroundcolor="#4285f4"
          color="white"
          width="100%"
          padding="12px"
          border="none"
          borderRadius="6px"
          fontSize="16px"
          fontWeight="500"
          cursor="pointer"
          hoverbackgroundcolor="#3367d6"
          onClick={ClickLogin}
          />
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
  }
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
  position: relative;
`;

const ViewButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 70%;
  transform: translateY(-50%);
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
  cursor: pointer;
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
