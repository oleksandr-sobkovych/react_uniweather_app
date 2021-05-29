import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card, TextField, makeStyles, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const { control, handleSubmit, getValues, errors } = useForm();

  const onSubmit = () => {
    if (!errors) {
      const values = getValues();
      acceptorFunc(cityName);
      dispatch();
    }
  };

  return (
    <Card>
      <form className={classes.root} autoComplete="off">
        <Controller
          control={control}
          name={"input-city"}
          rules={{
            required: "City name required",
            validate: (value) => supportedCities.includes(value),
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Autocomplete
              className={classes.autocomplete}
              id="input-city"
              onChange={onChange}
              error={error}
              options={supportedCities}
              onSelect={(e) => {
                setCityName(e.target.value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  value={value}
                  helperText={error ? error.message : null}
                  label="Enter your city..."
                  variant="outlined"
                  color="secondary"
                  InputLabelProps={{
                    style: { color: "lightgrey" },
                  }}
                />
              )}
            />
          )}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default CityForm;
