import HomePage from "./HomePage";
// import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import intl from "../../utils/enzymeHelper";
import toJSON from "enzyme-to-json";

const { mount } = Enzyme;

describe("<HomePage />", () => {
  it("renders correctly (snapshot)", () => {
    const tree = mount(intl(<HomePage />, "en"));
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
