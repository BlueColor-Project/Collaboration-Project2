import React from "react";
import styled from "styled-components";

const InputField = ({ labeldata, typedata, passwordText, Hint, ...rest }) => {
  return (
    <InputGroup>
      <InputContainer>
        <Label>{labeldata}</Label>
        {passwordText && <Text>{passwordText}</Text>}
      </InputContainer>
      <Input type={typedata} {...rest} />
      {Hint && <HintText>{Hint}</HintText>}
    </InputGroup>
  );
};

export default InputField;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
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

const Text = styled.p`
  color: #d3d3d3;
  font-size: 14px;
  margin-top: 4px;
  text-align: right;
  cursor: pointer;
  &:hover {
    color: #4285f4;
  }
`;

const HintText = styled.p`
  color: #5e5e5e;
  font-size: 12px;
  margin-top: 4px;
  text-align: left;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;
