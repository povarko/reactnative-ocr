import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import {
  SplashScreen,
  LoginScreen,
  MainScreen,
  EditScreen,
  AuthLoadingScreen,
  ForgotPasswordScreen,
  PasswordResetEmailSentScreen,
  VirtualShareCertificateScreen,
  PlayerCertificateScreen,
  TwoFAConfirmScreen,
  CreateNewPasswordScreen,
  RegisterScreen,
  RegisterEmailSentScreen,
  RegistrationSuccessScreen,
  EnterPinScreen,
  TouchIdScreen
} from "@AppContainers";
import MainTabNavigaor from "./MainTabNavigator";

import { BuySellScreen } from "@AppContainers";

const MainStackNavigator = createStackNavigator(
  {
    MainScreen: MainScreen,
    EditScreen: EditScreen,
    MainTab: { screen: MainTabNavigaor, path: "" },
    VirtualShareCertificate: VirtualShareCertificateScreen,
    BuySellCertificate: BuySellScreen,
    PlayerCertificate: PlayerCertificateScreen
  },
  {
    headerMode: "screen",
    initialRouteName: "MainScreen"
  },
  {
    header: ({scene, previous, navigation}) => {
      const {options} = scene.descriptor;
      const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;
      
      return (
        <p>{title}</p>
      )
    }
  }
);

const AuthStackNavigator = createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Login: LoginScreen,
    ForgotPassword: ForgotPasswordScreen,
    PasswordResetEmailSent: PasswordResetEmailSentScreen,
    TwofaConfirm: TwoFAConfirmScreen,
    CreateNewPassword: CreateNewPasswordScreen,
    Register: RegisterScreen,
    RegisterEmailSent: RegisterEmailSentScreen,
    RegistrationSuccess: RegistrationSuccessScreen,
    EnterPin: EnterPinScreen,
    TouchId: TouchIdScreen
  },
  {
    headerMode: "none",
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(
  createSwitchNavigator({
    Splash: { screen: SplashScreen },
    Auth: AuthStackNavigator,
    Main: { screen: MainStackNavigator, path: "" }
  })
);
