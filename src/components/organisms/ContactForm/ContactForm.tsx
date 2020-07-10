import React, { useState } from "react"
import styled from "styled-components"
import { declarationOfWar } from "../../../services/Firebase"
import swal from "@sweetalert/with-react"

import { ContactFormTitle } from "../../atoms/ContactFormTitle"
import { ContactFormInput } from "../../atoms/ContactFormInput"
import { ContactFormTextarea } from "../../atoms/ContactFormTextarea"
import { ContactFormButton } from "../../atoms/ContactFormButton"

export const ContactForm: React.FC = () => {
  const [opponent, setOpponent] = useState({
    name: "",
    email: "",
    tel: "",
    detail: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setOpponent(opponent => ({ ...opponent, [name]: value}))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    declarationOfWar(opponent).then(() => {
      // TODO ローディング
      // TODO バリデーション
      swal('Good job!', 'just wait a contact from Kingyo', 'success')
    })
  }

  return (
    <Card>
      <Form onSubmit={e => handleSubmit(e)}>
        <ContactFormTitle>
          対戦申し込み
        </ContactFormTitle>
        <ContactFormInput name="name" type="text" placeholder="代表者氏名" onChange={e => handleChange(e)} />
        <ContactFormInput name="email" type="email" placeholder="kingyosukui@kingyosukui.com" onChange={e => handleChange(e)} />
        <ContactFormInput name="tel" type="tel" placeholder="08011111111" onChange={e => handleChange(e)} />
        <ContactFormTextarea name="detail" placeholder="意気込み" onChange={e => handleChange(e)} />
        <ContactFormButton value="対戦を申し込む" />
      </Form>
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

const Form = styled.form``