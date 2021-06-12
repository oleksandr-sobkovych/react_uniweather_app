import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import CityForm from "./index";
import { mockedStore } from "../../../../setupTests";

describe(`rendering CityForm`, () => {
  it("renders the CityForm", () => {
    const tree = renderer
      .create(
        <Provider store={mockedStore}>
          <CityForm />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
