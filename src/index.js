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
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import MarsWeatherView from "./views/MarsWeatherView";
import CosmicWeatherView from "./views/CosmicWeatherView";
import EarthWeatherView from "./views/EarthWeatherView";
import Navigation from "./modules/SharedModule/components/Navigation";
import Footer from "./modules/SharedModule/components/Footer";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./rootReducer";

const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/mars-weather" component={MarsWeatherView} />
          <Route exact path="/cosmic-weather" component={CosmicWeatherView} />
          <Route path="/earth-weather">
            <EarthWeatherView />
          </Route>
          <Route path="/" render={() => <Redirect to="/earth-weather" />} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
