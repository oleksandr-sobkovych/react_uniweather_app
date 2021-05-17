import React, { useEffect, useState } from "react";
import {
  Card,
  TextField,
  InputAdornment,
  makeStyles,
  Button,
} from "@material-ui/core";
import LocationCityOutlined from "@material-ui/icons/LocationCityOutlined";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #329ea8 30%, #5526a6 90%)",
    padding: "1% 2%",
  },
  input: {
    color: "white",
  },
  field: {
    margin: "0 0 0 1%",
  },
});

const CityForm = () => {
  const [cityName, setCityName] = useState("");
  const classes = useStyles();
  const history = useHistory();
  let supportedCities;
  useEffect(() => {
    // connect to API
    supportedCities = ["Lviv", "London"];

    return () => {
      /* disconnect from API */
    };
  });

  return (
    <Card>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.field}
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
          onChange={(e) => setCityName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            if (supportedCities.includes(cityName)) {
              history.push(`/earth-weather/${cityName}`);
            }
          }}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default CityForm;
