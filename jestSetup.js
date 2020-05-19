import mockAsyncStorage from "@react-native-community/async-storage/jest/async-storage-mock";

jest.mock("@react-native-community/async-storage", () => mockAsyncStorage);

jest.mock("react-native-gesture-handler", () => {});

jest.mock("react-native-share", () => {});

jest.mock("react-native-simple-toast", () => {});

jest.mock("react-native-push-notification", () => {});

//jest.mock("reactotron-react-native", () => {});

jest.mock("react-native-keychain", () => ({
  setGenericPassword: jest.fn(),
  getGenericPassword: jest.fn(),
  resetGenericPassword: jest.fn()
}));

// https://github.com/react-navigation/react-navigation/issues/2269
// React Navigation generates random React keys, which makes
// snapshot testing fail. Mock the randomness to keep from failing.
/*jest.mock('react-navigation/src/routers/KeyGenerator', () => ({
  generateKey: jest.fn(() => 123),
}));*/
