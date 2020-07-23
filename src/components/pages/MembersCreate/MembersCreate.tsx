import React, { useState } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import swal from "@sweetalert/with-react"

import { DropzoneArea } from 'material-ui-dropzone'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import CircularProgress from '@material-ui/core/CircularProgress';

import { postMemberRequest } from "../../../redux/modules/member"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    pullRight: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '8px 16px'
    }
  }),
)

type Props = {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  registerMember: Function;
}

const MembersCreate: React.FC<Props> = (props: any) => {
  const { loading, loaded, error, registerMember } = props
  const classes = useStyles()

  const [member, setMember] = useState({
    name: "",
    description: "",
    number: "",
    image: "/images/default.jpg",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setMember(member => ({ ...member, [name]: value }))
  }

  // 画像投稿
  const handleChangeFile = (files: any) => {
    setMember(member => ({ ...member, image: files[0] }))   
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    registerMember(member)
      .then((res: any) => {
        console.log(res)
        
        swal({
          title: 'Good job!',
          text: 'you add a new member bro!!',
          icon: 'success',
        })

        setMember({
          name: "",
          description: "",
          number: "",
          image: "/images/default.jpg",
        })
      })
  }

  return (
    <Wrapper>
      <Card>
        <CardHeader 
          title="Register Member" 
          avatar={
            <Avatar aria-label="recipe" src="/images/festival.png" />
          }
        />
        <form onSubmit={e => handleSubmit(e)} >
          <CardContent className={classes.root}>
            <TextField
              id="name"
              label="Name"
              name="name"
              placeholder="「覚悟」とは！！"
              multiline
              fullWidth
              required
              value={member.name}
              style={{ margin: 8 }}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="number"
              label="Number"
              name="number"
              placeholder="暗闇の荒野に"
              multiline
              fullWidth
              value={member.number}
              style={{ margin: 8 }}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="description"
              label="Description"
              name="description"
              placeholder="進むべき道を切り開くことだッ！"
              multiline
              fullWidth
              value={member.description}
              style={{ margin: 8 }}
              onChange={(e) => handleChange(e)}
            />
            {/* TODO styleのかえ方が不明 */}
            <div style={{ margin: "10px auto", width: "98%"}}>
              <DropzoneArea 
                filesLimit={1} 
                onChange={(files) => handleChangeFile(files)} 
                dropzoneText="Drag and drop a image here or click"
                acceptedFiles={['image/*']}
                showFileNames
              />
            </div>
          </CardContent>
          <CardActions className={classes.pullRight}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ margin: 8 }}
            >
              {loading ? <CircularProgress size={24} /> : "登録" }
            </Button>
          </CardActions>
        </form>
      </Card>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  max-width: 80%;
  margin: 0 auto;
  padding: 40px 0;
`

const mapStateToProps = (state: any) => {
  return {
    loading: state.member.loading,
    loaded: state.member.loaded,
    error: state.member.error,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    registerMember: async (member: any) => dispatch(postMemberRequest(member))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersCreate)
