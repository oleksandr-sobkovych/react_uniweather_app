import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  TextField,
  makeStyles,
  Button,
  CircularProgress,
} from "@material-ui/core";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_CITY } from "../../actions/actionTypes";
import { fetchAllCities } from "../../actions/actions";
import { convertNeSwToNwSe } from "google-map-react";
import { useAsyncEffect } from "../../../SharedModule/hooks";

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
  progress: {
    color: "white",
  },
});

const CityForm = () => {
  const supportedCities = useSelector((state) => state.cityObj.all_cities);
  const [options, setOptions] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);

  const loading = useAsyncEffect(
    async () => {
      return new Promise((resolve) =>
        resolve(
          typeof currentInput === "string" &&
            supportedCities
              .filter((city) =>
                city.name.toLowerCase().includes(currentInput.toLowerCase())
              )
              .slice(0, 10)
              .map((city) => city.name)
        )
      );
    },
    (newOptions) => {
      newOptions && setOptions(newOptions);
    },
    [currentInput, supportedCities],
    supportedCities.length > 0
  );

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
              return options.includes(value) || "City not found";
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Autocomplete
              className={classes.autocomplete}
              id="input-city"
              options={options}
              onChange={(e) => {
                setCurrentInput(e.target.value);
                return onChange(e);
              }}
              onSelect={(e) => {
                setCurrentInput(e.target.value);
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
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? (
                          <CircularProgress className={classes.progress} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
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
