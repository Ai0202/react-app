import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 90%;
  margin: 0 auto;
  padding: 40px 0;
`
export const Img = styled.div`
  min-height: 50vh;
  background-image: url(../images/basketball.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`

export const Title = styled.h1`
  font-size: 6rem;
  color: #00011D;
  letter-spacing: 6px;
  font-family: 'Rowo Typeface';
  transform: rotate(-30deg);
  position: absolute;
  bottom: 1rem;
  right: -4rem;
`

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
`