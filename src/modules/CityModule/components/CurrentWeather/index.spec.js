import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import CurrentWeather from "./index";
import { mockedStore } from "../../../../setupTests";

describe(`rendering CurrentWeather`, () => {
  it("renders the CurrentWeather", () => {
    const tree = renderer
      .create(
        <Provider store={mockedStore}>
          <CurrentWeather />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
