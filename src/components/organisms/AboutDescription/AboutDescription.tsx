import React from "react"
import styled from "styled-components"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import { PageTitle } from "../../atoms/PageTitle"

const Wrapper = styled.section`
  max-width: 90%;
  margin: 0 auto;
  padding: 40px 0;
`

const Descripton = styled.p`
  width: 80%;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.5;
`

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
)

export const AboutDescription: React.FC = () => {
  const classes = useStyles()

  return (
    <Wrapper>
      <Grid container className={classes.root} spacing={4}>
        <Grid item xs={12}>
          <PageTitle title="about us" />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            <Descripton>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, est. Illum quo neque incidunt, sint porro deserunt sunt enim officia aliquam, maxime illo aperiam, iusto dolorum libero unde quibusdam inventore.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis quia, ab nemo voluptas modi iusto dolor veniam ut ullam magni error fugiat beatae corrupti dolore reprehenderit earum, quod temporibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio, dolorem animi fuga veritatis similique cumque repellendus voluptate pariatur illum excepturi rerum, iste libero ipsa labore natus quisquam recusandae a.
            </Descripton>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  )
}


