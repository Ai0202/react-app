import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { Wrapper, Title, Img } from "./styles";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    large: {
      height: theme.spacing(20),
      width: theme.spacing(20),
    },
  }),
);

export  const MainVisual: React.FC = () => {
  const classes = useStyles();
  
  return (
    <Wrapper>
      <Img>
        <Title>Kingyo Sukui</Title>
      </Img>
    </Wrapper>
  )
}