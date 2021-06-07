import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navContainer: {
    listStyleType: "none",
    display: "flex",
    margin: 0,
  },
  navItem: {
    marginLeft: 10,
  },
});

const Navigation = () => {
  const classes = useStyles();
  return (
    <nav>
      <ul className={classes.navContainer}>
        <li className={classes.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
