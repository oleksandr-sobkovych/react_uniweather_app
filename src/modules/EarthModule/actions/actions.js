import { GET_ALL_CITIES_FAIL, GET_ALL_CITIES_SUCCESS } from "./actionTypes";

export const fetchAllCities = () => (dispatch) => {
  fetch("http://localhost:8000/cities")
    .then((response) => response.json())
    .then((response) =>
      response.map((el) => ({
        name: `${el.name}, ${el.country}`,
        lat: el.coord.lat,
        lon: el.coord.lon,
      }))
    )
    .then((response) => {
      dispatch({ type: GET_ALL_CITIES_SUCCESS, payload: response });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ALL_CITIES_FAIL,
        payload: [{ name: "", lat: 37.42216, lon: -122.08427 }],
      });
    });
};
