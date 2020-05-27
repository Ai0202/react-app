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

export const MemberList: React.FC = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Grid container className={classes.root} spacing={4}>
        <Grid item xs={12}>
          {<PageTitle title="Member" />}
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Member />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  )
}
