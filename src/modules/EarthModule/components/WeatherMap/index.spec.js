import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import WeatherMap from "./index";
import { mockedStore } from "../../../../setupTests";

describe(`rendering WeatherMap`, () => {
  it("renders the WeatherMap", () => {
    const tree = renderer
      .create(
        <Provider store={mockedStore}>
          <WeatherMap />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
