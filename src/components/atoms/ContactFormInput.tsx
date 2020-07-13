import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  register: any
}

export const ContactFormInput: React.FC<Props> = ({  register, name, type, placeholder, onChange }) => (
  <InputBox>
    <Input ref={register} name={name} type={type} placeholder={placeholder} onChange={onChange} />  
  </InputBox>
)

const InputBox = styled.div`
  margin-bottom: 20px;

  &::last-child {
    margin-bottom: 0;
  }
`

const Input = styled.input`
  width: 100%;
  font-size: 24px;
  line-height: 3;
  padding-left: 10px;
  border: none;
  box-shadow: 4px 4px 12px 4px rgba(63, 81, 181, 0.2);
  color: #3f51b5;
  transition: all 0.2s;

  &:focus {
    transform: scale(1.05);
  }
`