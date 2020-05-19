import "react-native";
import React from "react";
import { LoginScreen } from "../../src/containers/Login/screens/Login/LoginScreen";
import createStore from "@AppRedux/createStore";
import { Provider } from "react-redux";
import { shallow } from "enzyme";

const { store } = createStore();

const withStore = Component => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

describe("<LoginScreen />", () => {
  it("renders correctly", () => {
    expect(shallow(withStore(LoginScreen))).toMatchSnapshot();
  });

  it("shows correct response message", () => {
    const wrapper = shallow(<LoginScreen />);
    const instance = wrapper.instance();
    const responseNode = wrapper.filterWhere(
      node => node.prop("testID") === "response"
    );

    expect(wrapper.state("errorMessage")).toBe(null);

    expect(instance.getErrorMessage("cannot reach network")).toBe(
      "Please check your network connection and try again"
    );
    expect(instance.getErrorMessage("invalid email/password")).toBe(
      "Incorrect email or password"
    );
    expect(
      instance.getErrorMessage(
        "Account does not exist. Please click the link below to register."
      )
    ).toBe("Account does not exist");
    expect(instance.getErrorMessage("internal Server Error")).toBe(
      "Something went wrong"
    );
  });
});
