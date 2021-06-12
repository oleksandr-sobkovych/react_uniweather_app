import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { MapMarker } from "./index";
import { mockedStore } from "../../../../setupTests";

describe(`rendering MapMarker`, () => {
  it("renders the MapMarker", () => {
    const tree = renderer
      .create(
        <Provider store={mockedStore}>
          <MapMarker />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
