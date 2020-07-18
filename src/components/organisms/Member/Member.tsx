import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Card, CardMedia, CardContent, CardActions, IconButton } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 200,
  },
  title: {
    fontSize: '2rem',
    color: '#CD8724',
    fontFamily: "'Rowo Typeface', 'Dancing Script', 'Sawarabi Gothic', 'san-serif'",
    letterSpacing: '2px',
  },
  pullLeft: {
    marginLeft: 'auto',
  }
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
      <CardMedia
        className={classes.media}
        image={member.image}
        title="Atsushi Ikeda"
      />
      <CardContent>
        <Typography className={classes.title}  gutterBottom variant="h5" component="h4">
          member.name
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          member.description
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton className={classes.pullLeft}>
          <EditIcon />
        </IconButton>
        <IconButton className={classes.pullLeft}>
          <DeleteIcon />
        </IconButton>
      </CardActions>

    </Card>
  )
}