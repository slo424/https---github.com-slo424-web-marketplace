import * as React from "react";
import { shallow } from "enzyme";
import Header from "./header";

describe("HeaderComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
