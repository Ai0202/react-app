import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import Input from "@material-ui/core/Input"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"

import { postMember } from "../../../redux/modules/member"

const Wrapper = styled.section`
  max-width: 80%;
  margin: 0 auto;
  padding: 40px 0;
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }),
)

type Props = {
  registerMember: Function;
}

const MembersCreate: React.FC<Props> = (props: any) => {
  const classes = useStyles()

  const [member, setMember] = useState({
    name: "",
    description: "",
    number: "",
  })

  // TODO すべての入力フォームに対応する
  const handleChange = (e: any) => {

    const name =  e.target.value
    const description = e.target.value
    const number = Number(1)

    setMember({ name, description, number: "" })
  }

  return (
    <Wrapper>
      <Card>
        <CardHeader 
          title="Register Member" 
          avatar={
            <Avatar aria-label="recipe">
              K
            </Avatar>
          }
        />
        <form onSubmit={e => {
          e.preventDefault()
          props.registerMember(member)
        }}
        >
          <CardContent className={classes.root}>
            <TextField
              id="name"
              label="Name"
              placeholder="Kingyo taro"
              multiline
              required
              value={member.name}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="number"
              label="Number"
              placeholder="0"
              multiline
              value={member.number}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="description"
              label="Description"
              placeholder="鉄砲玉"
              multiline
              value={member.description}
              onChange={(e) => handleChange(e)}
            />
            <Input 
              id="image"
              placeholder="image"
              type="file"
            />
          </CardContent>
          <Box
            display="flex"
            justifyContent="flex-end"
          >
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                  登録
              </Button>
            </CardActions>
          </Box>
        </form>
      </Card>
    </Wrapper>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    registerMember: (member: any) => dispatch(postMember(member))
  }
}

export default connect((() => ({})), mapDispatchToProps)(MembersCreate)


/**
 * TODO 登録処理
 * 
 * 課題
 * inputされた内容の取得
 * 登録ボタン押下後のactionの実行
 * 
 * 処理の流れ
 * 
 * 登録ボタンをクリック
 * ↓
 * 入力内容の取得
 * ↓
 * dispatchの関数にわたす
 * ↓
 * actionを実行
 * ↓
 * (firebaseにデータを保存)
 * ↓
 * reducerを呼ぶ
 * ↓
 * stateの中身を更新
 * 
 */