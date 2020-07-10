import React, { TextareaHTMLAttributes } from "react"
import styled from "styled-components"

export const ContactFormTextarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ( { name, placeholder, onChange } ) => (
  <InputBox>
    <Textarea name={name} placeholder={placeholder} onChange={onChange} />
  </InputBox>
)

const InputBox = styled.div`
  margin-bottom: 20px;

  &::last-child {
    margin-bottom: 0;
  }
`

const Textarea = styled.textarea`
  min-height: 240px;
  width: 100%;
  font-size: 24px;
  line-height: 1.5;
  padding-left: 10px;
  border: none;
  box-shadow: 4px 4px 12px 4px rgba(63, 81, 181, 0.2);
  color: #3f51b5;
  transition: all 0.2s;

  &:focus {
    transform: scale(1.05);
  }
`