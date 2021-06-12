import React, { useState, useCallback } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { CopyrightOutlined } from "@material-ui/icons";
import { useAsyncEffect } from "../../../SharedModule/hooks";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(120deg, #bdb51c 10%, #1b0930 25%)",
    padding: "2% 2%",
    margin: "1vh",
  },
  title: {
    fontSize: 32,
    color: "white",
  },
  description: {
    fontSize: 14,
    color: "white",
  },
  copyright: {
    fontSize: 10,
    color: "grey",
  },
  progress: {
    color: "white",
  },
});

const AstroPicture = () => {
  const [title, setTitle] = useState(NaN);
  const [hdurl, setHdurl] = useState(NaN);
  const [copyright, setCopyright] = useState(NaN);
  const [description, setDescription] = useState(NaN);

  const loading = useAsyncEffect(
    useCallback(async () => {
      return fetch(
        "https://api.nasa.gov/planetary/apod?api_key=4mzYWueZhEy7fVpGZQDcpa6YXPmolZJRagVbGjh1"
      )
        .then((response) => response.json())
        .then((response) => [
          [
            response.title,
            response.hdurl ? response.hdurl : response.url,
            response.explanation,
            response.copyright,
          ],
          false,
        ])
        .catch((error) => {
          console.log(error);
          return [undefined, true];
        });
    }, []),
    useCallback((data) => {
      if (!data[1]) {
        const [title, hdurl, description, copyright] = data[0];
        setTitle(title);
        setDescription(description);
        setHdurl(hdurl);
        setCopyright(copyright);
      }
    }, [])
  );

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {loading ? (
        <CircularProgress className={classes.progress} />
      ) : (
        <>
          <CardMedia className={classes.media} component={"img"} src={hdurl} />
          <CardContent>
            <Typography className={classes.copyright} align="right">
              <CopyrightOutlined /> {copyright}
            </Typography>
            <Typography className={classes.title} align="center">
              {title}
            </Typography>
            <Typography className={classes.description} align="center">
              {description}.
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default AstroPicture;
