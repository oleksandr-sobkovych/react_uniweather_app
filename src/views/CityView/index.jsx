import React from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const CityView = () => {
  const { cityName } = useParams();

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={4}>
        {cityName}
      </Grid>
    </Grid>
  );
};

export default CityView;
