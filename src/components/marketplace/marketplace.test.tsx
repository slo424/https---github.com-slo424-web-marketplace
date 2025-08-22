import * as React from "react";
import { shallow } from "enzyme";
import Marketplace from "./marketplace";

describe("Marketplace", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Marketplace />);
    expect(wrapper).toMatchSnapshot();
  });
});
