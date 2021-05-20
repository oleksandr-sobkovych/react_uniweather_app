import React, { useEffect, useState } from "react";

import {
  Card,
  makeStyles,
  Typography,
  Divider,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core";
import DisplayWeather from "../DisplayWeather";

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
});

const WeatherForecast = ({ city }) => {
  const classes = useStyles();
  const [days, setDays] = useState(3);
  const [currentDay, setCurrentDay] = useState(0);
  const [forecast, setForecast] = useState([]);
  const cloudy = 50;
  useEffect(() => {
    // API call
    setForecast([
      {
        index: 0,
        date: "",
        weather: {
          cels: 30,
          wind: 10,
          humidity: 60,
          clouds: 20,
          day: true,
          rain: true,
          hail: false,
          fog: false,
        },
      },
      {
        index: 1,
        date: "",
        weather: {
          cels: 20,
          wind: 7,
          humidity: 80,
          clouds: 80,
          day: false,
          rain: true,
          hail: false,
          fog: true,
        },
      },
    ]);
  }, [days, city]);

  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>
        Weather Forecast for {city}
      </Typography>
      {/*Days selector*/}
      <Divider />
      <AppBar className={classes.appBar}>
        <Tabs
          value={currentDay}
          onChange={(e, newValue) => setCurrentDay(newValue)}
        >
          {forecast.map((item) => (
            <Tab label={`Day ${item.index}`} key={item.index} />
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
    </Card>
  );
};

export default WeatherForecast;
