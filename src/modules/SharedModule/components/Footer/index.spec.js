import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Footer from "./index";
import { mockedStore } from "../../../../setupTests";

describe(`Footer rendering`, () => {
  it("renders the Footer", () => {
    const tree = renderer
      .create(
        <Provider store={mockedStore}>
          <Footer />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
