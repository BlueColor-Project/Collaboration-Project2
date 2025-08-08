import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import InputField from "../../component/Form/InputField";
import { signUp } from "../../api/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
    setError("");
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("모든 필드를 입력해주세요.");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return false;
    }

    if (formData.password.length < 8) {
      setError("비밀번호는 8자 이상이어야 합니다.");
      return false;
    }

    if (!termsAccepted) {
      setError("이용약관에 동의해주세요.");
      return false;
    }

    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const { data, error } = await signUp({
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });

      if (error) throw new Error(error);

      alert("회원가입이 완료되었습니다. 이메일 인증을 진행해주세요.");
      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SignUpContainer>
      <SignUpCard>
        <Title>회원가입</Title>
        <Subtitle>서비스 이용을 위한 계정을 만드세요</Subtitle>

        <FormSection>
          <InputField
            labeldata="이름"
            typedata="text"
            placeholder="홍길동"
            value={formData.name}
            onChange={(e) => handleInputChange(e, "name")}
          />

          <InputField
            labeldata="이메일"
            typedata="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />

          <InputField
            labeldata="비밀번호"
            typedata="password"
            placeholder="8자 이상 입력해주세요"
            Hint="8자 이상, 영문, 숫자, 특수문자를 포함해주세요"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />

          <InputField
            labeldata="비밀번호 확인"
            typedata="password"
            placeholder="비밀번호를 다시 입력해주세요"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange(e, "confirmPassword")}
          />
        </FormSection>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <CheckboxSection>
          <CheckboxWrapper>
            <Checkbox
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <CheckboxLabel htmlFor="terms">
              이용약관 및 개인정보 처리방침에 동의합니다
              <TermsLink>(보기)</TermsLink>
            </CheckboxLabel>
          </CheckboxWrapper>
        </CheckboxSection>

        <SignUpButton onClick={handleSignUp} disabled={isLoading}>
          {isLoading ? "처리중..." : "회원가입"}
        </SignUpButton>

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

const SignUpButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3367d6;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
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

const ErrorMessage = styled.div`
  color: #ff4444;
  font-size: 14px;
  margin-bottom: 16px;
  text-align: center;
`;

export default SignUp;
