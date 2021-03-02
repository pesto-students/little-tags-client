import Navbar from "./Navbar";
// import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import intl from "../../utils/enzymeHelper";
import toJson from "enzyme-to-json";

const { mount } = Enzyme;

describe("<Navbar />", () => {
  it("renders correctly (snapshot)", () => {
    const tree = mount(intl(<Navbar />, "en"));
    expect(toJson(tree)).toMatchSnapshot();
  });
});
