import React from 'react'
import styled from 'styled-components'

const ButtonField = ({buttonText, ...props}) => {
  return (
    <Button 
    {...props}
    $borderRadius={props.borderRadius}
    >
      {buttonText}
      </Button>
  )
}

export default ButtonField

const Button = styled.button`
    width: ${props => props.width};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundcolor};
    color: ${props => props.color};
    border: ${props => props.border};
    border-radius: ${props => props.$borderRadius};
    font-size: ${props => props.fontSize};
    cursor: ${props => props.cursor};
    transition: ${props => props.transition};

    &:hover {
        background-color: ${props => props.hoverbackgroundcolor};
    }
`


