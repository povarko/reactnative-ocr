import "react-native";
import React from "react";
import { ManageDevicesScreen } from "../../src/containers/Security/screens/ManageDevices/ManageDevicesScreen";
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

describe("<ManageDevicesScreen />", () => {
  it("renders correctly", () => {
    expect(shallow(withStore(ManageDevicesScreen))).toMatchSnapshot();
  });

  it("it renders devices list", () => {
    const devices = [
      {
        id: "123",
        city: "city",
        country: "country",
        lastActive: "2019-12-05T15:20:48.000Z"
      }
    ];
    const wrapper = shallow(
      <ManageDevicesScreen
        devices={devices}
        navigation={{ addListener: jest.fn }}
      />
    );
    const instance = wrapper.instance();
    expect(instance.renderDevices()).toHaveLength(devices.length);
  });

  it("correctly handles not having devices", () => {
    const wrapper = shallow(
      <ManageDevicesScreen devices={[]} navigation={{ addListener: jest.fn }} />
    );
    const instance = wrapper.instance();
    expect(instance.renderDevices()).toHaveLength(0);
  });
});
