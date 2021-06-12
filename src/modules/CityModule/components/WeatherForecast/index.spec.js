import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import WeatherForecast from "./index";
import { mockedStore } from "../../../../setupTests";

describe(`rendering WeatherForecast`, () => {
  it("renders the WeatherForecast", () => {
    const tree = renderer
      .create(
        <Provider store={mockedStore}>
          <WeatherForecast />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
