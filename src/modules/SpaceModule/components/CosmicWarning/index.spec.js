import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import CosmicWarning from "./index";
import { mockedStore } from "../../../../setupTests";

describe(`CosmicWarning rendering`, () => {
  it("renders the CosmicWarning", () => {
    const tree = renderer
      .create(
        <Provider store={mockedStore}>
          <CosmicWarning />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
