import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Img } from "./styles";
import { Drawer } from "../Drawer";

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
);

export const Header:React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Drawer />
        </IconButton>
        <Img src="/images/kingyosukui.png" alt="logo" />
      </Toolbar>
    </AppBar>
  );
}