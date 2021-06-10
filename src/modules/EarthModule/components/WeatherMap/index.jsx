import React, { useState, useEffect } from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import { MapMarker } from "../MapMarker";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #329ea8 30%, #5526a6 90%)",
    padding: "2% 2%",
  },
  title: {
    fontSize: 32,
    color: "white",
  },
  marker: {
    color: "red",
  },
});

const WeatherMap = () => {
  const defaultLocation = {
    lat: 37.42216,
    lng: -122.08427,
  };
  const [location, setLocation] = useState(defaultLocation);
  const supportedCities = useSelector((state) => state.cityObj.all_cities);
  const selectedCity = useSelector((state) => state.cityObj.city);
  const classes = useStyles();

  useEffect(() => {
    const cityObj = supportedCities.find((el) => el.name === selectedCity);
    if (cityObj) {
      setLocation({ lat: cityObj.lat, lng: cityObj.lon });
    }
  }, [supportedCities, selectedCity]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} align="center">
          Last Selected City Location
        </Typography>
        <div style={{ height: "60vh" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "",
            }}
            defaultCenter={defaultLocation}
            center={location}
            defaultZoom={3}
          >
            <MapMarker
              className={classes.marker}
              lat={location.lat}
              lng={location.lng}
            />
          </GoogleMapReact>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherMap;
