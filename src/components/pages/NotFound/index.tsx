import React from "react"
import styled from "styled-components"
import { Link as LinkComponent } from "react-router-dom"

export const NotFound: React.FC = () => {
  return (
    <Main>
      <Header>Error 404</Header>
      <Link className="text" to="/">Go back to Home</Link>
    </Main>
  )
}

const Main = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #888;
`

const Header = styled.h1`
  font-size: 50px;
  padding-right: 12px;
  animation: type .5s alternate infinite;

  @keyframes type {
	  0% {box-shadow: inset -3px 0px 0px #888;}
	  100% {box-shadow: inset -3px 0px 0px transparent;} 
  }
`

const Link = styled(LinkComponent)`
  color: #888;
  margin-top: 20px;
  font-size: 24px;
  text-decoration: none;
  padding-bottom: 6px;
  border-bottom: 2px solid #888;
`