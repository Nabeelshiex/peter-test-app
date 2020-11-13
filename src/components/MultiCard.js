import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function MultiCard({ id }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={`https://picsum.photos/id/${id}/600/300`}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            Asiatiska kycklingfärsbullar med nudlar
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          dela med sig
        </Button>
        <Button size='small' color='primary'>
          lära sig mer
        </Button>
      </CardActions>
    </Card>
  );
}

export default MultiCard;
