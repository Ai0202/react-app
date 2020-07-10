import React from "react"
import styled from "styled-components"

import { ContactFormTitle } from "../../atoms/ContactFormTitle"
import { ContactFormInput } from "../../atoms/ContactFormInput"
import { ContactFormTextarea } from "../../atoms/ContactFormTextarea"
import { ContactFormButton } from "../../atoms/ContactFormButton"

export const ContactForm: React.FC = () => {

  return (
    <Card>
      <ContactFormTitle>
        対戦申し込み
      </ContactFormTitle>
      <ContactFormInput name="name" type="text" placeholder="代表者氏名" />
      <ContactFormInput name="email" type="email" placeholder="kingyosukui@kingyosukui.com" />
      <ContactFormInput name="tel" type="tel" placeholder="08011111111" />
      <ContactFormTextarea name="detail" placeholder="意気込み" />
      <ContactFormButton value="対戦を申し込む" />
    </Card>
  )
}

const Card = styled.section`
  margin: 30px auto 0;
  max-width: 780px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  box-shadow: 6px 6px 12px 4px rgba(63, 81, 181, 0.4);
`
