import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

import { CardTitle } from "../../atoms/CardTitle"
import { CardDetail } from "../../atoms/CardDetail"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
})

type Props = {
  member: {
    name: string;
    description: string;
    image: string;
  }
}

export const Member: React.FC<Props> = ({member}: Props) => {
  const classes = useStyles()
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={member.image}
          title="Atsushi Ikeda"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <CardTitle name={member.name} />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <CardDetail 
              description={member.description}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}