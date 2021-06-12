import React, { useState, useCallback } from "react";
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
import { CLOUDY_PERCENT, getWeatherObj } from "../../helper";

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

  const loading = useAsyncEffect(
    useCallback(async () => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${"8c4cc13931b709dc9fa1256ad3d8c3ac"}`
      )
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
    }, [city]),
    useCallback((weatherArray) => {
      if (weatherArray) {
        setForecast(
          weatherArray.list
            .filter((elem) => elem.dt_txt.includes("15:00:00"))
            .map((elem, i) => ({
              index: i,
              date: elem.dt_txt.slice(0, 10),
              weather: getWeatherObj(elem),
            }))
        );
      }
    }, []),
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
                <DisplayWeather {...item.weather} cloudy={CLOUDY_PERCENT} />
              )}
            </div>
          ))}
        </>
      )}
    </Card>
  );
};

export default WeatherForecast;
