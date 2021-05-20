import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CurrentWeather from "../../modules/CityModule/components/CurrentWeather";
import WeatherForecast from "../../modules/CityModule/components/WeatherForecast";

const CityView = ({ acceptRoute: route }) => {
  const { cityName } = useParams();

  return (
    <>
      {cityName === route ? (
        <>
          <Grid item xs={5}>
            <CurrentWeather city={cityName} />
          </Grid>
          <Grid item xs={7}>
            <WeatherForecast city={cityName} />
          </Grid>
        </>
      ) : (
        //  enforce form interface for safer API calls
        <Redirect to="/" />
      )}
    </>
  );
};

export default CityView;
