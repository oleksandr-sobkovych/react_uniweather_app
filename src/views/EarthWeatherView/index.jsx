import React from "react";

import { Switch, Route } from "react-router-dom";

import { Grid } from "@material-ui/core";

import CityForm from "../../modules/EarthModule/components/CityForm";
import WeatherMap from "../../modules/EarthModule/components/WeatherMap";
import CityView from "../CityView";

const EarthWeatherView = () => {
  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12}>
        <CityForm />
      </Grid>
      <Switch>
        <Route exact path="/earth-weather/:cityName">
          <CityView />
        </Route>
      </Switch>
      <Grid item xs={11}>
        <WeatherMap />
      </Grid>
    </Grid>
  );
};

export default EarthWeatherView;
