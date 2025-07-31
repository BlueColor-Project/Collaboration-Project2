import React from 'react'
import styled from 'styled-components'

const InputField = ({labeldata, typedata, ...rest}) => {
  return (

          <InputGroup>
          <Label>{labeldata}</Label>
          <Input type={typedata} {...rest} />
        </InputGroup>

  )
}

export default InputField

const InputGroup = styled.div`
  margin-bottom: 20px;
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
