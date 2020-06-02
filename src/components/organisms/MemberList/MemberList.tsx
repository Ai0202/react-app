import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { firestore } from "../../../services/Firebase";

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

type Member = {
  name: string;
  description: string;
  number: number;
  image: string;
}

const INITIAL_STATE: Member = {
  name: '******',
  description: '***********************',
  number: 0,
  image: '/images/default.png',
};

// TODO ローディング
export const MemberList: React.FC = () => {
  const classes = useStyles();
  let [members, setMember] = useState([INITIAL_STATE]);

  useEffect(() => {
    const tmpMembers: any[] = [];
    firestore.collection('members')
      .get()
      .then(res => {
        res.forEach(member => {
          tmpMembers.push(member.data());
        })
        setMember(tmpMembers);
      });
  }, []);
  

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
