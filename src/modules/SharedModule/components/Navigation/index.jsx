import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Button,
} from "@material-ui/core";
import { HomeOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: "1vh",
  },
  button: {
    color: "#557A95",
    "&:hover": {
      color: "#70a1c4",
    },
  },
  appbar: {
    backgroundColor: "#1f2e38",
    position: "static",
  },
});

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton className={classes.button} component={Link} to="/">
            <HomeOutlined />
          </IconButton>
          <Button
            className={classes.button}
            component={Link}
            to="/earth-weather"
            color="secondary"
          >
            Earth
          </Button>
          <Button
            className={classes.button}
            component={Link}
            to="/cosmic-weather"
          >
            Cosmic
          </Button>
          <Button
            className={classes.button}
            component={Link}
            to="/mars-weather"
          >
            Mars
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
