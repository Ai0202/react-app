import React, { useState } from "react"
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
import CircularProgress from '@material-ui/core/CircularProgress';

import { postMemberRequest } from "../../../redux/modules/member"

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
  loading: boolean;
  loaded: boolean;
  registerMember: Function;
}

const MembersCreate: React.FC<Props> = (props: any) => {
  const { loading, registerMember } = props
  const classes = useStyles()

  const [member, setMember] = useState({
    name: "",
    description: "",
    number: "",
    image: "/images/default.png",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setMember(member => ({ ...member, [name]: value }))
  }

  // 画像投稿
  const handleChangeFile = (e: any) => {
    const target: HTMLInputElement = e.target as HTMLInputElement

    const file: File | null = target.files !== null ? target.files.item(0) : null
   
    setMember(member => ({ ...member, [target.name]: file }))
        
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
          registerMember(member)
        }}
        >
          <CardContent className={classes.root}>
            <TextField
              id="name"
              label="Name"
              name="name"
              placeholder="Kingyo taro"
              multiline
              required
              value={member.name}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="number"
              label="Number"
              name="number"
              placeholder="0"
              multiline
              value={member.number}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="description"
              label="Description"
              name="description"
              placeholder="鉄砲玉"
              multiline
              value={member.description}
              onChange={(e) => handleChange(e)}
            />
            <Input 
              id="image"
              name="image"
              placeholder="image"
              type="file"
              onChange={(e) => handleChangeFile(e)}
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
                {loading ? <CircularProgress size={24} /> : "登録" }
              </Button>
            </CardActions>
          </Box>
        </form>
      </Card>
    </Wrapper>
  )
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.member.loading,
    loaded: state.member.loaded,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    registerMember: (member: any) => dispatch(postMemberRequest(member))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersCreate)
