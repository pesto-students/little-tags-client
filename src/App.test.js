import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

describe("<App />", () => {
  it("renders correctly (snapshot)", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
