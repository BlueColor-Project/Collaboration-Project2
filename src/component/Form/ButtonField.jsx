import React from 'react'
import styled from 'styled-components'

const ButtonField = ({buttonText}) => {
  return (
    <Button>{buttonText}</Button>
  )
}

export default ButtonField

const Button = styled.button`
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
`


