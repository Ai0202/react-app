import React, { useState, useEffect } from "react"
import styled from "styled-components"
import swal from "@sweetalert/with-react"
import { withRouter } from "react-router-dom"

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
import { useParams, useHistory } from "react-router-dom"

import { getMemberDetail, updateMember } from "../../../services/Firebase"
import { routes } from "../../../url"

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

const MembersEdit: React.FC = () => {
  const classes = useStyles()
  const { id } = useParams()
  const history = useHistory()

  const [member, setMember] = useState({
    id: "",
    name: "test",
    description: "",
    number: 0,
    imagePath: "",
    fileName: "/images/default.jpg",
  })

  useEffect(() => {
    getMemberDetail(id)
      .then(data => {
        setMember(member => ({...data}))
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    updateMember(member)
    .then((res: any) => {
      swal({
        title: 'Good job!',
        text: 'you update the member! nice one bro!!',
        icon: 'success',
      })
      .then(() => {
        history.push(routes.members)
      })
    })
  }

  return (
    <Wrapper>
      <Card>
        <CardHeader 
          title="Update Member" 
          avatar={
            <Avatar aria-label="recipe" src="/images/festival.jpg" />
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
              {false ? <CircularProgress size={24} /> : "更新" }
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

export default withRouter(MembersEdit)
