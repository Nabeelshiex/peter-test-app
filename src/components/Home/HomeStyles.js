import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#eee",
    minHeight: "100%",
    flexDirection: "column",
  },
  home: {
    marginTop: "5%",
  },
  carousel: {
    margin: "0 10%",
    ["@media (max-width:1160px)"]: {
      margin: 0,
    },
  },
  mostChoosen: {
    margin: "0 10.7%",
    ["@media (max-width:1023px)"]: {
      margin: "0.7%",
    },
  },
  finalDiv: {
    margin: "0 10.7%",
    // marginBottom: "10%",
    ["@media (max-width:1023px)"]: {
      margin: "0.7%",
    },
  },
}));
