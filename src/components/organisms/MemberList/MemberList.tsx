import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

import { Wrapper } from "./styles";
import { Member } from "../Member/Member";
import { PageTitle } from "../../atoms/PageTitle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const members = [
  { 
    name: "Atsushi", 
    description: 
      "日本を代表するPG。シャキール・オニールを彷彿させるパワー、全盛期のアレン・アイバーソンと見紛うほどのドライブ、 ステファン・カリーにも負けずとも劣らない3ポイント、、 そんな選手だったらいいな。",
    image: "/images/profile_3.jpg"
  },
  { 
    name: "ShoSho", 
    description: 
      "フィリピンのギャングスター。バスケが得意",
    image: "/images/profile_3.jpg"
  },
]

export const MemberList: React.FC = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Grid container className={classes.root} spacing={4}>
        <Grid item xs={12}>
          <PageTitle title="Member" />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            {members.map((v, i) => (
              <Grid key={i} item>
                <Member member={v} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  )
}
