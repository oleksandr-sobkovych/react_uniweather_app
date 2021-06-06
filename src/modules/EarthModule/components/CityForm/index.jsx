import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, TextField, makeStyles, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SET_CURRENT_CITY } from "../../actions/actionTypes";
import { convertNeSwToNwSe } from "google-map-react";

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

const CityForm = () => {
  const [supportedCities, setSupportedCities] = useState([""]);
  // const [cityName, setCityName] = useState("");
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    // API call
    setSupportedCities(["Lviv", "London"]);
  }, []);

  const dispatch = useDispatch();

  const { control, handleSubmit, getValues, errors } = useForm({
    defaultValues: { input_city: "" },
  });

  const onSubmit = () => {
    if (!errors) {
      dispatch({ type: SET_CURRENT_CITY, payload: getValues().input_city });
      history.push(`/earth-weather/${getValues().input_city}`);
    }
  };

  return (
    <Card>
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name={"input_city"}
          rules={{
            required: "City name required",
            validate: (value) => {
              return supportedCities.includes(value) || "City not found";
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Autocomplete
              className={classes.autocomplete}
              id="input-city"
              options={supportedCities}
              onChange={onChange}
              onSelect={(e) => {
                onChange(e);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!error}
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
