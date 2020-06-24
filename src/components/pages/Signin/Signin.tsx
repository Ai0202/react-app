import React, { useState, useContext, useCallback } from "react"
// import { isEmail } from "validator"
import styled from "styled-components"
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core"
import { AuthContext } from "../../../contexts/auth"

const Contents = styled.div`
  & {
    width: 40%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    margin-top: 10%;
    display: flex;
    flex-direction: column;
  }
`

const Tabs = styled.div`
  & {
    display: flex;
    height: 40px;
    padding-top: 40px;
  }
`

const TabButton = styled.div`
  & {
    flex: 1;
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #5c666f;
    box-shadow: 0 1px 0 0 #5c666f;
    cursor: pointer;
  }
`

const Form = styled.div`
  & {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`

const InputForm = styled(FormControl)`
  && {
    margin: 15px;
  }
`

const Button = styled.div`
  & {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2196f3;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    opacity: 1;

    &:hover {
      opacity: 0.8;
      font-weight: bold;
    }
  }
`

export const Signin: React.FC = () => {
  const { signin } = useContext(AuthContext)

  // form用state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const onEmailChange = useCallback(
    e => {
    //   if (e.target.value.length <= 0) {
    //     setErrors({ ...errors, email: 'Required.' })
    //   } else if (!isEmail(e.target.value)) {
    //     setErrors({ ...errors, email: 'Invalid Email.' })
    //   } else {
    //     delete errors.email
    //     setErrors(errors)
    //   }
    //   setEmail(e.target.value)
    },
    [email]
  )

  const onPasswordChange = useCallback(
    e => {
      if (e.target.value.length <= 0) {
        setErrors({ ...errors, password: 'Required.' })
      } else if (e.target.value.length < 6) {
        setErrors({ ...errors, password: 'Too Short.' })
      } else if (e.target.value.length > 20) {
        setErrors({ ...errors, password: 'Too Long.' })
      } else if (
        !/^[a-zA-Z0-9\+\-=@\^!#\$%&'\(\)\[\]\{\}\<\>\?_']+$/.test(
          e.target.value
        )
      ) {
        setErrors({ ...errors, password: 'Invalid Password.' })
      } else {
        delete errors.password
        setErrors(errors)
      }
      setPassword(e.target.value)
    },
    [password]
  )

  // サインイン
  const onButtonClick = useCallback(
    () => {
      let currentErrors = errors
      if (email.length <= 0) {
        currentErrors = { ...currentErrors, email: 'Required.' }
      }
      if (password.length <= 0) {
        currentErrors = { ...currentErrors, password: 'Required.' }
      }
      if (Object.keys(currentErrors).length > 0) {
        setErrors(currentErrors)
        return
      }

      signin(email, password)
    
    },
    [email, password, errors]
  )

  return (
    <Contents>
      <Tabs>
        <TabButton>Sign In</TabButton>
      </Tabs>
      <Form>
        <InputForm
          error={'email' in errors && errors.email.length > 0}
          aria-describedby="email-error"
        >
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={onEmailChange}
          />
          <FormHelperText id="email-error">{errors.email}</FormHelperText>
        </InputForm>
        <InputForm
          error={'password' in errors && errors.password.length > 0}
          aria-describedby="password-error"
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={onPasswordChange}
          />
          <FormHelperText id="password-error">{errors.password}</FormHelperText>
        </InputForm>
      </Form>
      <Button onClick={onButtonClick}>Sign In</Button>
    </Contents>
  )
}