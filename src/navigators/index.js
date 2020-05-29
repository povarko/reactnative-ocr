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
  UploadScreen,
  EditScreen,
  ViewScreen,
  FilterScreen,
  ExportScreen,
  CategoryScreen,
  ProfileScreen,
  AuthLoadingScreen,
  ForgotPasswordScreen,
  PasswordResetEmailSentScreen,
  CreateNewPasswordScreen,
  RegisterScreen,
  RegisterEmailSentScreen,
  RegistrationSuccessScreen
} from "@AppContainers";

const MainStackNavigator = createStackNavigator(
  {
    MainScreen: MainScreen,
    UploadScreen: UploadScreen,
    ViewScreen: ViewScreen,
    EditScreen: EditScreen,
    FilterScreen: FilterScreen,
    ExportScreen: { screen: ExportScreen },
    CategoryScreen: CategoryScreen,
    ProfileScreen: ProfileScreen
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
    CreateNewPassword: CreateNewPasswordScreen,
    Register: RegisterScreen,
    RegisterEmailSent: RegisterEmailSentScreen,
    RegistrationSuccess: RegistrationSuccessScreen
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
