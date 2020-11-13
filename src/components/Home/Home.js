import React from "react";
import NavBar from "../NavBar/NavBar";
import "./home.css";
import SliderCarousel from "./SliderCarousel";
import { useStyles } from "./HomeStyles";
import MultiCarousel from "./MultiCarousel";

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.home}>
        <div className={classes.carousel}>
          <SliderCarousel />
        </div>
        <div className={classes.mostChoosen}>
          <h2>Våra mest valda</h2>
          <MultiCarousel />
        </div>
        <div className={classes.mostChoosen}>
          <h2>Nya recept</h2>
          <MultiCarousel />
        </div>
        <div className={classes.mostChoosen}>
          <h2>Recept på besök</h2>
          <MultiCarousel />
        </div>
        <div className={classes.mostChoosen}>
          <h2>Snabbt och gott</h2>
          <MultiCarousel />
        </div>
        <div className={classes.finalDiv}>
          <h2>Kött, fisk, vego eller kyckling?</h2>
          <div>
            <img
              src='https://picsum.photos/id/259/300/300'
              style={{ margin: "2%" }}
            />
            <img
              src='https://picsum.photos/id/260/300/300'
              style={{ margin: "2%" }}
            />
            <img
              src='https://picsum.photos/id/261/300/300'
              style={{ margin: "2%" }}
            />
            <img
              src='https://picsum.photos/id/258/300/300'
              style={{ margin: "2%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
