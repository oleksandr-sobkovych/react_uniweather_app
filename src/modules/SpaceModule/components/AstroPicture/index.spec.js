import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import AstroPicture from "./index";
import { mockedStore } from "../../../../setupTests";

describe(`AstroPicture rendering`, () => {
  it("renders the AstroPicture", () => {
    const tree = renderer
      .create(
        <Provider store={mockedStore}>
          <AstroPicture />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
