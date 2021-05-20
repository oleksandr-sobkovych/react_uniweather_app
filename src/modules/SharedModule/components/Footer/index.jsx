import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { GitHub, CopyrightOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "1vh",
  },
  button: {
    color: "#2b6b6b",
    "&:hover": {
      color: "#3a8f8f",
    },
  },
  appbar: {
    backgroundColor: "#48474c",
    position: "static",
  },
  title: {
    fontSize: 12,
    color: "#28272d",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton
            className={classes.button}
            component={Link}
            target="_blank"
            to={{
              pathname:
                "https://github.com/oleksandr-sobkovych/react_uniweather_app",
            }}
          >
            <GitHub />
          </IconButton>
          <Typography className={classes.title} align="right">
            Copyright <CopyrightOutlined /> 2021 UCU.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
