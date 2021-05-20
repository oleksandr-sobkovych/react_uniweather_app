import React, { useEffect, useState } from "react";
import { Card, makeStyles, Typography, Divider } from "@material-ui/core";
import DisplayWeather from "../DisplayWeather";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #329ea8 30%, #3326a6 90%)",
    padding: "1% 2%",
  },
  title: {
    fontSize: "2.5vw",
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

  useEffect(() => {
    // API call
    setCels(30);
    setClouds(city === "Lviv" ? 80 : 20);
    setDay(false);
    setFog(city === "Lviv");
    setHumidity(city === "Lviv" ? 70 : 23);
    setWind(city === "Lviv" ? 5 : 10);
  }, [city]);

  return (
    <Card className={classes.root}>
      <Typography className={classes.title}>
        Current Weather in {city}
      </Typography>
      <Divider />
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
    </Card>
  );
};

export default CurrentWeather;
