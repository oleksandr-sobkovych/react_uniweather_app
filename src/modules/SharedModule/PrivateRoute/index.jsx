import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, propsPredicate, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        propsPredicate(props) ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default PrivateRoute;
