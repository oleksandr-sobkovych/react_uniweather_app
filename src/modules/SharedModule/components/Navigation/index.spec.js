import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Navigation from "./index";
import { mockedStore } from "../../../../setupTests";

describe(`Navigation rendering`, () => {
  it("renders the Navigation", () => {
    const tree = renderer
      .create(
        <Provider store={mockedStore}>
          <Navigation />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
