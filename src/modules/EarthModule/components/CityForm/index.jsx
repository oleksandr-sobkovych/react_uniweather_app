import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card, TextField, makeStyles, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #329ea8 30%, #5526a6 90%)",
    padding: "1% 2%",
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginLeft: "auto",
  },
  autocomplete: {
    minWidth: "30vh",
  },
});

const CityForm = ({ acceptor: acceptorFunc }) => {
  const [supportedCities, setSupportedCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const classes = useStyles();
  useEffect(() => {
    // API call
    setSupportedCities(["Lviv", "London"]);
  }, []);

  return (
    <Card>
      <form className={classes.root} noValidate autoComplete="off">
        <Autocomplete
          className={classes.autocomplete}
          id="input-city"
          options={supportedCities}
          onSelect={(e) => {
            setCityName(e.target.value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter your city..."
              variant="outlined"
              color="secondary"
              InputLabelProps={{
                style: { color: "lightgrey" },
              }}
            />
          )}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => {
            acceptorFunc(cityName);
          }}
          component={RouterLink}
          to={`/earth-weather/${
            supportedCities.includes(cityName) ? cityName : ""
          }`}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default CityForm;
