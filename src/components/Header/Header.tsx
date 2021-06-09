import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Navigation from "../Navigation";
import Auth from "../../modules/Auth";

const useStyles = makeStyles({
  root: {
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "left",
  },
  menuContainer: {
    textAlign: "right",
  },
  authContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

const Header = () => {
  const classes = useStyles();

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
          <Grid item xs={3} className={classes.authContainer}>
            <Auth />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
