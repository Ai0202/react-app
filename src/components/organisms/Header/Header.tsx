import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";

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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}