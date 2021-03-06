import React from "react";
import { useParams, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import CurrentWeather from "../../modules/CityModule/components/CurrentWeather";
import WeatherForecast from "../../modules/CityModule/components/WeatherForecast";

const CityView = () => {
  const { cityName } = useParams();
  const acceptedCity = useSelector((state) => state.cityObj.city);

  return (
    <>
      {cityName === acceptedCity ? (
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
