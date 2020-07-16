import React, { useEffect } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import Grid from "@material-ui/core/Grid"
import { connect } from "react-redux"
import { Dispatch } from "redux"

// TODO あとで型指定に使用したい
// import { State } from "../../../redux/modules/member";

// TODO redux-sagaで勝手にどのページでも実行されるのを改善したい
import { getMembersRequest } from "../../../redux/modules/member"

import { Wrapper } from "./styles"
import { Member } from "../Member/Member"
import { PageTitle } from "../../atoms/PageTitle"

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
    circleWrapper: {
      marginTop: 40,
      textAlign: 'center',
      color: '#3f51b5'
    }
  }),
)

type Member = {
  name: string;
  description: string;
  number: number;
  image: string;
}

export type Props = {
  members: any[];
  loading: boolean;
  getMembers: Function;
}

// TODO ローディング
const MemberList: React.FC<Props> = (props) => {

  const { members, getMembers, loading } = props

  const classes = useStyles()

  useEffect(() => { getMembers() }, [])

  return (
    <Wrapper>
      <Grid container className={classes.root} spacing={4}>
        <Grid item xs={12}>
          <PageTitle title="Member" />
        </Grid>
        <Grid item className={classes.circleWrapper} xs={12}>
          {loading 
            ? <CircularProgress size={120} color='inherit' />
            :
            <Grid container justify="center" spacing={4}>
              {members.map((v, i) => (
                <Grid key={i} item>
                  <Member member={v} />
                </Grid>
              ))}
            </Grid>
          }
        </Grid>
      </Grid>
    </Wrapper>
  )
}

const mapStateToProps = (state: any) => {  
  return {
    members: state.member.members,
    loading: state.member.loading,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getMembers: () => dispatch(getMembersRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberList)
