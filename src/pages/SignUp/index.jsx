import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import InputField from '../../component/Form/InputField';
import ButtonField from '../../component/Form/ButtonField';
import { supabase } from '../lib/supabaseClient';

const SignUp = () => {
  const navigate = useNavigate()

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordCheck, setPasswordCheck] = useState('');
  const [ChackBox, setChackBox] = useState(false);
  const [SignUpError, setSignUpError] = useState(false);

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
      options: {
        data: {
          name: Name,
        },
      },
    });

    if (error) {
      console.error("회원가입 실패 상세:", error);
      alert('회원가입 실패: ' + error.message);
    } else {
      alert('회원가입 성공!');
      console.log(data);
      navigate('/');
    }
  }

  const ChackBoxInput = () => {
    if (ChackBox === true) {
      handleSignUp();
    } else {
    }
  }

  return (
    <SignUpContainer>
      <SignUpCard>
        <Title>회원가입</Title>
        <Subtitle>서비스 이용을 위한 계정을 만드세요</Subtitle>

        <FormSection>
          <StepGroup>
            <InputField 
            labeldata="이름" 
            typedata="text" 
            placeholder="홍길동" 
            value={Name}
            onChange={(e) => { 
              setName(e.target.value)
              setSignUpError(false)
            }}
            style={{
              border: SignUpError ? "1px solid rgb(164, 2, 2)" : "1px solid #4285f4"
            }}
            />
          </StepGroup>

          <StepGroup>
            <InputField 
            labeldata="이메일" 
            typedata="email"
            placeholder="example@email.com"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value)
              setSignUpError(false)
            }}
            style={{
              border: SignUpError ? "1px solid rgb(164, 2, 2)" : "1px solid #4285f4"
            }}
            />
          </StepGroup>

          <StepGroup>
            <InputField 
            labeldata="비밀번호" 
            typedata="password" 
            placeholder="8자 이상 입력해주세요" 
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value)
              setSignUpError(false)
            }}
            style={{
              border: SignUpError ? "1px solid rgb(164, 2, 2)" : "1px solid #4285f4"
            }}
            maxLength={20}
            />
            <PasswordHelp>8자 이상, 영문, 숫자, 특수문자를 포함해주세요</PasswordHelp>
          </StepGroup>

          <StepGroup>
            <InputField 
            labeldata="비밀번호 확인" 
            typedata="password" 
            placeholder="비밀번호를 다시 입력해주세요" 
            value={PasswordCheck}
            onChange={(e) => {
              setPasswordCheck(e.target.value)
              setSignUpError(false)
            }}
            style={{
              border: SignUpError ? "1px solid rgb(164, 2, 2)" : "1px solid #4285f4"
            }}
            maxLength={20}
            />
          </StepGroup>
        </FormSection>

        <CheckboxSection>
          <CheckboxWrapper>
            <Checkbox 
            type="checkbox" 
            id="terms" 
            checked={ChackBox}
            onChange={() => setChackBox(!ChackBox)}
            />
            <CheckboxLabel htmlFor="terms">
              이용약관 및 개인정보 처리방침에 동의합니다 
              <TermsLink>(보기)</TermsLink>
            </CheckboxLabel>
          </CheckboxWrapper>
        </CheckboxSection>

        <ButtonField 
        buttonText="회원가입"
        backgroundcolor="#4285f4"
        color="white"
        width="100%"
        padding="12px"
        border="none"
        borderRadius="6px"
        fontSize="16px"
        fontWeight="500"
        cursor="pointer"
        disabled={ChackBox === true ? false : true}
        hoverbackgroundcolor={ChackBox === true ? "#3367d6" : "#4285f4"}
        onClick={handleSignUp}
        />

        <LoginLink>
          이미 계정이 있으신가요?{" "}
          <LoginText onClick={() => navigate("/login")}>로그인</LoginText>
        </LoginLink>
      </SignUpCard>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 20px;
`;

const SignUpCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 32px;
`;

const FormSection = styled.div`
  margin-bottom: 24px;
`;

const StepGroup = styled.div`
  margin-bottom: 20px;
`;

const PasswordHelp = styled.p`
  color: #5e5e5e;
  font-size: 12px;
  margin-top: 4px;
  text-align: left;
`;

const CheckboxSection = styled.div`
  margin-bottom: 24px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-top: 2px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
  cursor: pointer;
  line-height: 1.4;
`;

const TermsLink = styled.span`
  color: #4285f4;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginLink = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #666;
`;

const LoginText = styled.span`
  color: #4285f4;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default SignUp;
