import React from "react";
import Grid from "@material-ui/core/Grid";
import AstroPicture from "../../modules/SpaceModule/components/AstroPicture";
import CosmicWarning from "../../modules/SpaceModule/components/CosmicWarning";

const CosmicWeatherView = () => (
  <Grid container>
    <Grid item xs={12}>
      <CosmicWarning />
    </Grid>
    <Grid item xs={12}>
      <AstroPicture />
    </Grid>
  </Grid>
);

export default CosmicWeatherView;
