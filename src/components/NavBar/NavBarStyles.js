import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    minHeight: "9vh",
    background: "white",
    ["@media (max-width:1160px)"]: {},
  },
  toolBar: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "5vh",
    ["@media (max-width:1160px)"]: {
      maxHeight: "10vh",
    },
  },
  toolBarDiv: {
    display: "flex",
    color: "black",
    minWidth: "100%",
    maxHeight: "5vh",
    marginTop: "0.5%",
    ["@media (max-width:1160px)"]: {
      marginTop: "0",
      color: "black",
    },
  },
  leftDiv: {
    fontSize: "12px",
    minWidth: "10%",
    height: "auto",
    "&:hover": {
      cursor: "pointer",
    },
    float: "left",
    marginLeft: "10%",
    marginTop: "1.5%",
    ["@media (max-width:1160px)"]: {
      fontSize: "12px",
      "&:hover": {
        cursor: "pointer",
      },
      float: "left",
      marginLeft: "0",
    },
  },
  closeIcon: {
    float: "left",
  },
  leftText: {
    float: "right",
    marginTop: "3%",
    ["@media (max-width:1160px)"]: {
      display: "none",
    },
  },
  centerDiv: {
    margin: "0 auto",
    ["@media (max-width:1160px)"]: {
      fontSize: "16px",
    },
    ["@media (max-width:767px)"]: {
      fontSize: "12px",
    },
  },
  rightDiv: {
    display: "flex",
    fontSize: "16px",
    minWidth: "30%",
    float: "right",
    marginRight: "4%",
    marginTop: "1.5%",
    ["@media (max-width:1160px)"]: {
      display: "block",
    },
  },
  navLink: {
    padding: "0 4%",
    "&:hover": {
      cursor: "pointer",
    },
    color: "black",
    textDecoration: "none",
    ["@media (max-width:1160px)"]: {
      display: "none",
    },
  },
  rightSearchDiv: {
    display: "flex",
    float: "right",
    "&:hover": {
      cursor: "pointer",
    },
    ["@media (max-width:1160px)"]: {
      display: "block",
      minWidth: "100%",
      float: "right",
    },
  },
  rightSearchText: {
    marginTop: "1%",
    ["@media (max-width:1160px)"]: {
      display: "none",
    },
  },
  searchIcon: {
    ["@media (max-width:1160px)"]: {
      float: "right",
      margin: "0",
    },
  },
  divider: {
    maxHeight: "5vh",
    marginLeft: "2%",
    marginTop: "1.5%",
    ["@media (max-width:1160px)"]: {
      display: "none",
    },
  },
  textDecoration: {
    padding: "0 4%",
    "&:hover": {
      cursor: "pointer",
    },
    color: "black",
    textDecoration: "underline",
    fontWeight: "bold",
    ["@media (max-width:1160px)"]: {
      display: "none",
    },
  },
  toolBarDiv2: {
    color: "black",
    minWidth: "100%",
    margin: "2% 0",
  },
  navLink2: {
    padding: "0 4%",
    "&:hover": {
      cursor: "pointer",
    },
    color: "black",
    textDecoration: "none",
    ["@media (min-width:1160px)"]: {
      display: "none",
    },
  },
  textDecoration2: {
    padding: "0 4%",
    "&:hover": {
      cursor: "pointer",
    },
    color: "black",
    textDecoration: "underline",
    fontWeight: "bold",
    ["@media (min-width:1160px)"]: {
      display: "none",
    },
  },
  leftDivToolBar2: {
    float: "left",
    minHeight: "100%",
    minWidth: "33%",
  },
  centerDivToolBar2: {
    margin: "auto",
    height: "0",
    minWidth: "33%",
  },
  rightDivToolBar2: {
    float: "right",
    minWidth: "33%",
  },
}));
