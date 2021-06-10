import React, { useEffect, useState } from "react";

import {
  Card,
  makeStyles,
  Typography,
  Divider,
  AppBar,
  Tabs,
  Tab,
  CircularProgress,
} from "@material-ui/core";
import DisplayWeather from "../DisplayWeather";
import { useAsyncEffect } from "../../../SharedModule/hooks";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #3326a6 30%, #5526a6 90%)",
    padding: "1% 2%",
  },
  title: {
    fontSize: 28,
    color: "white",
  },
  appBar: {
    position: "static",
  },
  progress: {
    color: "white",
  },
});

const WeatherForecast = ({ city }) => {
  const classes = useStyles();
  const [currentDay, setCurrentDay] = useState(0);
  const [forecast, setForecast] = useState([]);
  const cloudy = 50;
  const kelvinD = 273.15;

  const loading = useAsyncEffect(
    async () => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${"8c4cc13931b709dc9fa1256ad3d8c3ac"}`
      )
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
    },
    (weatherArray) => {
      if (weatherArray) {
        setForecast(
          weatherArray.list
            .filter((elem) => elem.dt_txt.includes("15:00:00"))
            .map((elem, i) => ({
              index: i,
              date: elem.dt_txt.slice(0, 10),
              weather: {
                cels: (elem.main.temp - kelvinD).toFixed(2),
                wind: elem.wind.speed,
                humidity: elem.main.humidity,
                clouds: elem.clouds.all,
                day: true,
                rain: elem.weather.some((el) => el.main === "Rain"),
                hail: elem.weather.some((el) => el.main === "Hail"),
                fog: elem.weather.some((el) => el.main === "Fog"),
              },
            }))
        );
      }
    },
    [city]
  );

  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>
        Weather Forecast for {city}
      </Typography>
      <Divider />
      {loading ? (
        <CircularProgress className={classes.progress} />
      ) : (
        <>
          <AppBar className={classes.appBar}>
            <Tabs
              value={currentDay}
              scrollButtons="on"
              variant="scrollable"
              onChange={(e, newValue) => setCurrentDay(newValue)}
            >
              {forecast.map((item) => (
                <Tab label={`${item.date}`} key={item.index} />
              ))}
            </Tabs>
          </AppBar>
          {forecast.map((item) => (
            <div
              key={item.index}
              role="tabpanel"
              hidden={currentDay !== item.index}
              id={`tabpanel-${item.index}`}
            >
              {currentDay === item.index && (
                <DisplayWeather
                  rain={item.weather.rain}
                  cels={item.weather.cels}
                  clouds={item.weather.clouds}
                  cloudy={cloudy}
                  day={item.weather.day}
                  fog={item.weather.fog}
                  hail={item.weather.hail}
                  humidity={item.weather.humidity}
                  wind={item.weather.wind}
                />
              )}
            </div>
          ))}
        </>
      )}
    </Card>
  );
};

export default WeatherForecast;
