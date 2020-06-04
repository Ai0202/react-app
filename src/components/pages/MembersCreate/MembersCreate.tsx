import React from "react";
import styled from "styled-components";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from "*.module.css";

const Wrapper = styled.section`
  max-width: 80%;
  margin: 0 auto;
  padding: 40px 0;
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export const MembersCreate: React.FC = () => {
  const classes = useStyles();

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
        <form>
          <CardContent className={classes.root}>
            <TextField
              id="name"
              label="Name"
              placeholder="Kingyo taro"
              multiline
              required
            />
            <TextField
              id="number"
              label="Number"
              placeholder="0"
              multiline
            />
            <TextField
              id="description"
              label="Description"
              placeholder="鉄砲玉"
              multiline
            />
            <Input 
              id="image"
              placeholder="image"
              type="file"
            />
          </CardContent>
          <CardActionArea>
            <CardActions>
              <Button variant="contained" color="primary">
                登録
                </Button>
            </CardActions>
          </CardActionArea>
        </form>
      </Card>
    </Wrapper>
  )
}

