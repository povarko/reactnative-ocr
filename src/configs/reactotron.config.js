import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

export const reactotronConfig = Reactotron.configure({ name: "xsport" })
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();
