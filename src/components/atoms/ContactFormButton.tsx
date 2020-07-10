import React, { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

export const ContactFormButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ value }) => (
  <ButtonBox>
    <Button>{ value }</Button>
  </ButtonBox>
)

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  padding: 20px 40px;
  font-size: 24px;
  background-color: #CD8724;
  color: #fff;
  border: none;
  box-shadow: 4px 4px 12px 4px rgba(63, 81, 181, 0.2);
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
    opacity: 0.6;
  }
`