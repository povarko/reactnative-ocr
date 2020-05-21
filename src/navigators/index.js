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
  ViewScreen,
  FilterScreen,
  ExportScreen,
  CategoryScreen,
  ProfileScreen,
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
    ViewScreen: ViewScreen,
    EditScreen: EditScreen,
    FilterScreen: FilterScreen,
    ExportScreen: { screen: ExportScreen },
    CategoryScreen: CategoryScreen,
    ProfileScreen: ProfileScreen,
    MainTab: { screen: MainTabNavigaor, path: "" },
    VirtualShareCertificate: VirtualShareCertificateScreen,
    BuySellCertificate: BuySellScreen,
    PlayerCertificate: PlayerCertificateScreen
  },
  {
    headerMode: "screen",
    initialRouteName: "MainScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f9f9f9"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "normal"
      }
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
