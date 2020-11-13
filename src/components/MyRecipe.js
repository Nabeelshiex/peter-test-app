import React from "react";
import NavBar from "./NavBar/NavBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "yellow",
    minHeight: "100vh",
  },
}));

function MyRecipe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
    </div>
  );
}

export default MyRecipe;
