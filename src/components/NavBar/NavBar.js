import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import { Divider } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../actions";
import { useStyles } from "./NavBarStyles";

function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const selectedNavLink = useSelector(
    (state) => state.navReducer.selectedNavLink,
  );

  function handleNavLinkClick({ selectedNavLink }) {
    dispatch(Actions.handleSelectedNavLink(selectedNavLink));
  }

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.toolBarDiv}>
            <div className={classes.leftDiv}>
              <CloseIcon className={classes.closeIcon} />
              <b className={classes.leftText}>Tillbaka till Min meny</b>
            </div>

            <Divider
              orientation='vertical'
              flexItem
              className={classes.divider}
            />

            <div className={classes.centerDiv}>
              <h3>Lägg till ett recept</h3>
            </div>

            <div className={classes.rightDiv}>
              <NavLink
                to='/'
                className={
                  selectedNavLink.utforska
                    ? classes.textDecoration
                    : classes.navLink
                }
                onClick={() =>
                  handleNavLinkClick({
                    selectedNavLink: {
                      utforska: true,
                      allaRecept: false,
                      minaRecept: false,
                    },
                  })
                }>
                Utforska
              </NavLink>
              <NavLink
                to='/all-recipes'
                className={
                  selectedNavLink.allaRecept
                    ? classes.textDecoration
                    : classes.navLink
                }
                onClick={() =>
                  handleNavLinkClick({
                    selectedNavLink: {
                      utforska: false,
                      allaRecept: true,
                      minaRecept: false,
                    },
                  })
                }>
                Alla recept
              </NavLink>
              <NavLink
                to='/my-recipe'
                className={
                  selectedNavLink.minaRecept
                    ? classes.textDecoration
                    : classes.navLink
                }
                onClick={() =>
                  handleNavLinkClick({
                    selectedNavLink: {
                      utforska: false,
                      allaRecept: false,
                      minaRecept: true,
                    },
                  })
                }>
                Mina recept
              </NavLink>
              <div className={classes.rightSearchDiv}>
                <SearchIcon className={classes.searchIcon} />
                <p className={classes.rightSearchText}>Sök</p>
              </div>
            </div>
          </div>
          <div className={classes.toolBarDiv2}>
            <div className={classes.leftDivToolBar2}>
              <NavLink
                to='/'
                className={
                  selectedNavLink.utforska
                    ? classes.textDecoration2
                    : classes.navLink2
                }
                onClick={() =>
                  handleNavLinkClick({
                    selectedNavLink: {
                      utforska: true,
                      allaRecept: false,
                      minaRecept: false,
                    },
                  })
                }>
                Utforska
              </NavLink>
            </div>
            <div className={classes.centerDivToolBar2}>
              <NavLink
                to='/all-recipes'
                className={
                  selectedNavLink.allaRecept
                    ? classes.textDecoration2
                    : classes.navLink2
                }
                onClick={() =>
                  handleNavLinkClick({
                    selectedNavLink: {
                      utforska: false,
                      allaRecept: true,
                      minaRecept: false,
                    },
                  })
                }>
                Alla recept
              </NavLink>
            </div>
            <div className={classes.rightDivToolBar2}>
              <NavLink
                to='/my-recipe'
                className={
                  selectedNavLink.minaRecept
                    ? classes.textDecoration2
                    : classes.navLink2
                }
                onClick={() =>
                  handleNavLinkClick({
                    selectedNavLink: {
                      utforska: false,
                      allaRecept: false,
                      minaRecept: true,
                    },
                  })
                }>
                Mina recept
              </NavLink>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
