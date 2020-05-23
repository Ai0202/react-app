import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import { Img } from "./styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
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
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Img src="images/kingyosukui.png" alt="logo" />
        <Typography variant="h6" className={classes.title}>
          Kingyosukui
        </Typography>
      </Toolbar>
    </AppBar>
  );
}