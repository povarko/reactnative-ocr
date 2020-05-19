import React, { Component } from "react";
import { Alert, StatusBar, Linking } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "@AppNavigators";
import createStore from "@AppRedux/createStore";
import { stylesheetConfig, axiosConfig } from "@AppConfig";
import { authActions } from "@AppRedux/actions";
import { navigationService, NotificationService } from "@AppServices";
import axios from "axios";
import appConfig from "./app.json";
import reactotron from "reactotron-react-native";

const { store, persistor } = createStore();
axiosConfig({});
stylesheetConfig();

// intercepts all api calls
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(config) {
    if (store.getState().auth.user) {
      store.dispatch(authActions.refreshToken());
    }

    if (store.getState().auth.user) {
      const token = store.getState().auth.user.accessToken;
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function(error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (store.getState().auth.user) {
        const token = store.getState().auth.user.accessToken;
        if (token) {
          originalRequest.headers["Authorization"] = "Bearer " + token;
          return axios(originalRequest);
        }
      }
    }

    return Promise.reject(error);
  }
);
// axios.interceptors.request.use(
//   function(config) {
//     if (store.getState().auth.user) {
//       store.dispatch(authActions.refreshToken());
//     }

//     if (store.getState().auth.user) {
//       const token = store.getState().auth.user.accessToken;
//       if (token) config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senderId: appConfig.senderID
    };
    this.notif = new NotificationService(this.onRegister, this.onNotification);
  }
  componentDidMount() {
    Linking.addEventListener("url", this._handleOpenURL);
  }
  componentWillUnmount() {
    Linking.removeEventListener("url", this._handleOpenURL);
  }
  _handleOpenURL(event) {
    console.log(event.url);
    let availableLink = event.url.split("//")[1];
    let method = availableLink.split("/")[0];
    let param = availableLink.split("/")[1];

    if (method === "confirmemail") {
      navigationService.navigate("RegisterEmailSent", {
        emailConfirmToken: param
      });
    } else if (method === "resetpassword") {
      navigationService.navigate("CreateNewPassword", {
        resetLink: param
      });
    }
  }

  onRegister = token => {
    Alert.alert("Registered !", JSON.stringify(token));
    reactotron.log(token);
  };

  onNotification = notif => {
    reactotron.log(notif);
    Alert.alert(notif.title, notif.message);
  };

  setNavigatorRef = navigatorRef => {
    navigationService.setTopLevelNavigator(navigatorRef);
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <StatusBar barStyle="light-content" />
          <AppNavigator uriPrefix="xsport://" ref={this.setNavigatorRef} />
        </PersistGate>
      </Provider>
    );
  }
}
