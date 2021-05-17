import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MarsWeatherView from "./views/MarsWeatherView";
import CosmicWeatherView from "./views/CosmicWeatherView";
import EarthWeatherView from "./views/EarthWeatherView";
import CityView from "./views/CityView";
import Navigation from "./modules/SharedModule/components/Navigation";
import PrivateRoute from "./modules/SharedModule/PrivateRoute";
import Footer from "./modules/SharedModule/components/Footer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/earth-weather" />} />
        <Route exact path="/mars-weather" component={MarsWeatherView} />
        <Route exact path="/cosmic-weather" component={CosmicWeatherView} />
        <Route exact path="/earth-weather" component={EarthWeatherView} />
        <PrivateRoute
          exact
          path="/earth-weather/:cityName"
          component={CityView}
          propsPredicate={(props) => {
            console.log(props);
            return true;
          }}
        />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
