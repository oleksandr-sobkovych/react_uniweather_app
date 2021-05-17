import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import GoogleMapReact from "google-map-react";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #329ea8 30%, #5526a6 90%)",
    padding: "2% 2%",
  },
  title: {
    fontSize: 32,
    color: "white",
  },
});

const WeatherMap = () => {
  const location = {
    lat: 37.42216,
    lng: -122.08427,
  };
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} align="center">
          Weather Around the World
        </Typography>
        <div style={{ height: "60vh" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              // Insert your key (from system-side file in future)
              key: "",
            }}
            defaultCenter={location}
            defaultZoom={1}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherMap;
