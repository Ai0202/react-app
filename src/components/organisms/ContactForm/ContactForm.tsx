import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { declarationOfWar } from "../../../services/Firebase"
import swal from "@sweetalert/with-react"

import { ContactFormTitle } from "../../atoms/ContactFormTitle"
import { ContactFormInput } from "../../atoms/ContactFormInput"
import { ContactFormTextarea } from "../../atoms/ContactFormTextarea"
import { ContactFormButton } from "../../atoms/ContactFormButton"

type Inputs = {
  name: string
  email: string
  tel: string
  detail: string
  example: string
}

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>()

  const onSubmit = (data: Inputs) => {        
    swal({
      title: '本当に対戦を申し込みますか?',
      text: 'なるべく早めにご返信できるようにします',
      buttons: {
        cancel: true,
        confirm: {
          text: 'yes!!',
          closeModal: false,
        }
      },
      icon: "info",
    })
    .then((res: boolean | null) => {
      if (res === null) return

      return declarationOfWar(data)
    })
    .then((res: any) => {
      if (res === undefined) return
      
      swal({
        title: 'Good job!',
        text: 'just wait a contact from Kingyo',
        icon: 'success',
      })
    })
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ContactFormTitle>
          対戦申し込み
        </ContactFormTitle>
        <ContactFormInput 
          className={errors.name && 'error'} 
          register={register({ required: 'name is required' })} 
          name="name" 
          type="text" 
          placeholder="代表者氏名" 
        />
        {errors.name && <Error className="error-message">{errors.name.message}</Error>}
        <ContactFormInput 
          register={register({ required: 'email is required' })} 
          name="email" 
          type="email" 
          placeholder="kingyosukui@kingyosukui.com" 
        />
        {errors.email && <Error className="error-message">{errors.email.message}</Error>}
        <ContactFormInput
          register={register({ required: 'tel is required'})} 
          name="tel" 
          type="tel" 
          placeholder="08011111111" 
        />
        {errors.tel && <Error className="error-message">{errors.tel.message}</Error>}
        <ContactFormTextarea
          register={register({ required: '意気込みは必須です' })} 
          name="detail" 
          placeholder="意気込み" 
        />
        {errors.detail && <Error className="error-message">{errors.detail.message}</Error>}
        <ContactFormButton value="対戦を申し込む" />
      </Form>
    </Card>
  )
}

const Card = styled.section`
  margin: 30px auto 0;
  max-width: 80%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  box-shadow: 6px 6px 12px 4px rgba(63, 81, 181, 0.4);
`

const Error = styled.div`
  color: #f00;
  margin-left: 10px;
  margin-bottom: 30px;
`

const Form = styled.form``