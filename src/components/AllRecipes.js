import React from "react";
import NavBar from "./NavBar/NavBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "green",
    minHeight: "100vh",
  },
}));

function AllRecipes() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
    </div>
  );
}

export default AllRecipes;
