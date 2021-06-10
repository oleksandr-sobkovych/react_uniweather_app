import React, { useEffect, useState } from "react";
import {
  Card,
  makeStyles,
  Typography,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import DisplayWeather from "../DisplayWeather";
import { useAsyncEffect } from "../../../SharedModule/hooks";

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
  const [cels, setCels] = useState(NaN);
  const [wind, setWind] = useState(NaN);
  const [humidity, setHumidity] = useState(NaN);
  const [clouds, setClouds] = useState(NaN);
  const [day, setDay] = useState(true);
  const [rain, setRain] = useState(false);
  const [hail, setHail] = useState(false);
  const [fog, setFog] = useState(false);
  const cloudy = 50;
  const kelvinD = 273.15;

  const loading = useAsyncEffect(
    async () => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${"8c4cc13931b709dc9fa1256ad3d8c3ac"}`
      )
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
    },
    (weatherObj) => {
      if (weatherObj) {
        setClouds(weatherObj.clouds.all);
        setCels((weatherObj.main.temp - kelvinD).toFixed(2));
        setDay(
          weatherObj.dt >= weatherObj.sys.sunrise &&
            weatherObj.dt < weatherObj.sys.sunset
        );
        setHumidity(weatherObj.main.humidity);
        setWind(weatherObj.wind.speed);
        setFog(weatherObj.weather.some((el) => el.main === "Fog"));
        setRain(weatherObj.weather.some((el) => el.main === "Rain"));
        setHail(weatherObj.weather.some((el) => el.main === "Hail"));
      }
    },
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
        <DisplayWeather
          rain={rain}
          cels={cels}
          clouds={clouds}
          cloudy={cloudy}
          day={day}
          fog={fog}
          hail={hail}
          humidity={humidity}
          wind={wind}
        />
      )}
    </Card>
  );
};

export default CurrentWeather;
