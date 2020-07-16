import React, { useContext, useEffect } from "react"
import { AppBar, Toolbar, IconButton } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { useHistory } from "react-router-dom"

import { Img } from "./styles"
import { Drawer } from "../Drawer"
import { AuthContext } from "../../../contexts/Auth"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#00011D",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
)

export const Header:React.FC = () => {
  const classes = useStyles()
  const { isSignedin, signout, currentUser, checkSignedin } = useContext(AuthContext)
  const history = useHistory()

  // 初回のみ実行で良いため
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {checkSignedin()}, [])

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Drawer />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Img src="/images/kingyosukui.png" alt="logo" />
        </Typography>
        {isSignedin && (
          <>
            {/* <Typography>{currentUser?.displayName}</Typography> */}
            <Button color="inherit" onClick={() => signout(history)}>サインアウト</Button>
            {/* TODO 写真が403 */}
            <Avatar alt="Profile Picture" src={currentUser?.photoURL} />
          </>
          )}
      </Toolbar>
    </AppBar>
  )
}