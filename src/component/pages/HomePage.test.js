import HomePage from "./HomePage";
// import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

const { mount } = Enzyme;

describe("<HomePage />", () => {
  it("renders correctly (snapshot)", () => {
    const tree = mount(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
