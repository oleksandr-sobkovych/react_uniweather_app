import React, { useState, useCallback } from "react";
import {
  Card,
  makeStyles,
  Typography,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import DisplayWeather from "../DisplayWeather";
import { useAsyncEffect } from "../../../SharedModule/hooks";
import { CLOUDY_PERCENT, getWeatherObj } from "../../helper";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #329ea8 30%, #3326a6 90%)",
    padding: "1% 2%",
  },
  title: {
    fontSize: "2.5vw",
    color: "white",
  },
  progress: {
    color: "white",
  },
});

const CurrentWeather = ({ city }) => {
  const classes = useStyles();
  const [weather, setWeather] = useState({
    cels: NaN,
    rain: false,
    fog: false,
    hail: false,
    clouds: NaN,
    day: true,
    humidity: NaN,
    wind: NaN,
  });

  const loading = useAsyncEffect(
    useCallback(async () => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${"8c4cc13931b709dc9fa1256ad3d8c3ac"}`
      )
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
    }, [city]),
    useCallback((weatherObj) => {
      if (weatherObj) {
        setWeather(getWeatherObj(weatherObj));
      }
    }, []),
    [city]
  );

  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>
        Current Weather in {city}
      </Typography>
      <Divider />
      {loading ? (
        <CircularProgress className={classes.progress} />
      ) : (
        <DisplayWeather {...weather} cloudy={CLOUDY_PERCENT} />
      )}
    </Card>
  );
};

export default CurrentWeather;
