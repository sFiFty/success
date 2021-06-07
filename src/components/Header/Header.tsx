import React from "react";
import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import Navigation from "../Navigation";
import Auth, { showAuthModal } from "../../modules/Auth";

import { shallowEqual, useStore } from "react-redux";
import { useSelector } from "../../redux/utils";

const useStyles = makeStyles({
  root: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "left",
  },
  menuContainer: {
    textAlign: "right",
  },
});

const Header = () => {
  const store = useStore();

  const classes = useStyles();

  const user = useSelector((state) => state.modules.auth.user, shallowEqual);

  const handleLogout = () => {
    // TODO
  };

  const handleShowAuthModal = () => showAuthModal(store);

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          SUCCESS
        </Grid>
        <Grid
          item
          xs={9}
          container
          spacing={3}
          className={classes.menuContainer}
        >
          <Grid item xs={9}>
            <Navigation />
          </Grid>
          <Grid item xs={3}>
            {user ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Button onClick={handleShowAuthModal}>Login</Button>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Auth />
    </Container>
  );
};

export default Header;
