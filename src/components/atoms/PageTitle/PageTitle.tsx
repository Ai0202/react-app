import React from "react"
import styled from "styled-components"

type Props = {
  title: string;
}

const Title = styled.h2`
  font-size: 3rem;
  color: #CD8724;
  font-family: 'Rowo Typeface', 'Dancing Script', 'Sawarabi Gothic', 'san-serif';
  letter-spacing: 2px; 
  text-align: center;
`

export const PageTitle: React.FC<Props> = ({title}: Props) => {
  return (
    <Title>{title}</Title>
  )
}