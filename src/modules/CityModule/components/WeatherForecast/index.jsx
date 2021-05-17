import React from "react";
import { Card, TextField, InputAdornment, makeStyles } from "@material-ui/core";
import LocationCityOutlined from "@material-ui/icons/LocationCityOutlined";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #329ea8 30%, #5526a6 90%)",
    padding: "1% 2%",
  },
  input: {
    color: "white",
  },
});

const WeatherForecast = () => {
  const classes = useStyles();

  return (
    <Card>
      <form className={classes.root} noValidate autoComplete="on">
        <TextField
          id="input-city"
          label="Enter your city..."
          color="secondary"
          InputLabelProps={{
            style: { color: "lightgrey" },
          }}
          InputProps={{
            className: classes.input,
            startAdornment: (
              <InputAdornment position="start">
                <LocationCityOutlined />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Card>
  );
};

export default WeatherForecast;
