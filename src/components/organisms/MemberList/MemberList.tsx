import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
// import { Dispatch } from "redux";
// TODO あとで型指定に使用したい
// import { State } from "../../../redux/modules/member";

// TODO redux-sagaで勝手にどのページでも実行されるのを改善したい
// import { getMembers } from "../../../redux/modules/member";

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

export type Props = {
  members: any[];
  loading: boolean;
  loaded: boolean;
}

// TODO ローディング
const MemberList: React.FC<Props> = (props) => {

  const classes = useStyles();
  
  return (
    <Wrapper>
      <Grid container className={classes.root} spacing={4}>
        <Grid item xs={12}>
          <PageTitle title="Member" />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            {props.members.map((v, i) => (
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

const mapStateToProps = (state: any) => {  
  return {
    members: state.member.members,
    loading: state.member.loading,
    loaded: state.member.loaded,
  }
}

export default connect(mapStateToProps)(MemberList);
