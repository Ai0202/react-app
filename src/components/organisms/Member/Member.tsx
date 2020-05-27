import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { CardTitle } from "../../atoms/CardTitle";
import { CardDetail } from "../../atoms/CardDetail";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export const Member: React.FC = () => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/profile_3.jpg"
          title="Atsushi Ikeda"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <CardTitle name="Atsushi" />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <CardDetail 
              description="
                日本を代表するPG。
                シャキール・オニールを彷彿させるパワー、
                全盛期のアレン・アイバーソンと見紛うほどのドライブ、
                ステファン・カリーにも負けずとも劣らない3ポイント、、
                そんな選手だったらいいな。"
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}