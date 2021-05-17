import React from "react";
import { Grid } from "@material-ui/core";

import CityForm from "../../modules/EarthModule/components/CityForm";
import WeatherMap from "../../modules/EarthModule/components/WeatherMap";

const EarthWeatherView = () => (
  <Grid container spacing={3} justify="center">
    <Grid item xs={12}>
      <CityForm />
    </Grid>
    <Grid item xs={11}>
      <WeatherMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBuaSx6nCA0D-PWaFtrvosKmBJoIzTpBuo&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `70vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </Grid>
  </Grid>
);

export default EarthWeatherView;
