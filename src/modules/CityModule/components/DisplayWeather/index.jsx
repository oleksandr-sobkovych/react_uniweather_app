import React from "react";
import { Divider, makeStyles, Typography } from "@material-ui/core";
import {
  WiCelsius,
  WiDayCloudy,
  WiDaySunny,
  WiFahrenheit,
  WiFog,
  WiHail,
  WiHumidity,
  WiNightClear,
  WiNightCloudy,
  WiRain,
  WiWindy,
} from "weather-icons-react";

const useStyles = makeStyles({
  main_text: {
    fontSize: "4vw",
    color: "white",
    marginLeft: "auto",
  },
  wrap: {
    display: "flex",
  },
  secondary_text: {
    fontSize: "2.8vw",
    color: "lightgrey",
    display: "flex",
    paddingLeft: "10%",
  },
});

const DisplayWeather = ({
  cels,
  rain,
  fog,
  hail,
  clouds,
  day,
  humidity,
  wind,
  cloudy,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrap}>
        <Typography className={classes.main_text}>
          {cels}
          <WiCelsius />
        </Typography>
        <Typography className={classes.main_text}>
          {rain && <WiRain />}
          {fog && <WiFog />}
          {hail && <WiHail />}
          {clouds < cloudy ? (
            day ? (
              <WiDaySunny />
            ) : (
              <WiNightClear />
            )
          ) : day ? (
            <WiDayCloudy />
          ) : (
            <WiNightCloudy />
          )}
        </Typography>
      </div>
      <Typography className={classes.secondary_text}>
        {((cels * 9) / 5 + 32).toFixed(2)} <WiFahrenheit />
      </Typography>
      <Divider />
      <div className={classes.wrap}>
        <Typography className={classes.main_text}>
          {humidity}
          <WiHumidity />
        </Typography>
        <Typography className={classes.main_text}>
          {wind} km/h <WiWindy />
        </Typography>
      </div>
    </>
  );
};

export default DisplayWeather;
