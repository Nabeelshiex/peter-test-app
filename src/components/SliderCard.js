import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 300,
    width: 600,
    ["@media (max-width:1160px)"]: {
      height: 300,
      width: 800,
    },
    ["@media (max-width:767px)"]: {
      height: 300,
      width: 375,
    },
  },
});

function SliderCard({ image, imageText }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title='Contemplative Reptile'
        />
        <h1
          style={{
            position: "absolute",
            left: "30px",
            bottom: "1px",
            color: "white",
          }}>
          {imageText}
        </h1>
      </CardActionArea>
    </Card>
  );
}

export default SliderCard;
