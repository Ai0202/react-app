import React from "react";
import styled from "styled-components";

type Props = {
  title: String;
}

const Title = styled.h2`
  font-size: 3rem;
  color: #CD8724;
  font-family: 'Rowo Typeface';
  letter-spacing: 2px; 
  text-align: center;
`

export const PageTitle: React.FC<Props> = ({title}: Props) => {
  return (
    <Title>{title}</Title>
  )
}