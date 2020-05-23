import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 90%;
  margin: 0 auto;
  position: relative;
`
export const Img = styled.div`
  margin-top: 40px;
  min-height: 50vh;
  background-image: url(../images/basketball.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`

export const Title = styled.h1`
  font-size: 6rem;
  color: #000;
  letter-spacing: 6px;
  font-family: 'Rowo Typeface';
  transform: rotate(-30deg);
  position: absolute;
  bottom: 1rem;
  right: -5rem;
`

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
`