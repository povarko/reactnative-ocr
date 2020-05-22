import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Title, Input, Button } from "@AppComponents";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Images, Icons } from "@AppTheme";
import { SafeAreaView } from "react-navigation";
import validator from "validator";
import { authActions } from "@AppRedux/actions";
import { connect } from "react-redux";
import styles from "./styles";

export class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    hasInvalidEmail: false,
    hasInvalidPassword: false,
    errorMessage: null
  };

  handleForgotPassword = () => {
    this.props.navigation.navigate("ForgotPassword");
  };

  gotoRegister = () => {
    this.props.navigation.navigate("Register");
  };

  openPolicy = () => {};

  openTerms = () => {};

  onEmailChange = value => {
    this.setState({ email: value });
  };

  onPasswordChange = value => {
    this.setState({ password: value });
  };

  getErrorMessage(error = this.state.errorMessage || "") {
    //const errorMsg = error.toLowerCase();
    const defaulErrorMsg = "Something went wrong";

    switch (error) {
      case "cannot reach network":
        return "Please check your network connection and try again";
      case "invalid email/password":
        return "Incorrect email or password";
      case "Account does not exist. Please click the link below to register.":
        return "Account does not exist";
      case "internal Server Error":
        return defaulErrorMsg;
      default:
        return error;
    }
  }

  handleSubmit = async () => {
    const { email, password } = this.state;
    const { dispatch } = this.props;
    const isValidEmail = validator.isEmail(email.trim());
    const isValidPassword = validator.isLength(password, { min: 4 });

    if (this.props.loading) return;

    if (!isValidEmail || !isValidPassword) {
      this.setState({
        hasInvalidEmail: !isValidEmail,
        hasInvalidPassword: !isValidPassword
      });
    } else {
      this.setState({ hasInvalidEmail: false, hasInvalidPassword: false });
      dispatch(authActions.login(email.trim(), password));
    }
  };

  render() {
    const { hasInvalidEmail, hasInvalidPassword } = this.state;
    const errorMessage = this.getErrorMessage(this.props.loginError);

    return (
      <ImageBackground style={styles.container}>
        <KeyboardAwareScrollView scrollEnabled={false}>
          <SafeAreaView
            forceInset={{ top: "always" }}
            style={{ alignItems: "center" }}
          >
            <Title />
            <View style={styles.form}>
              <Input
                iconSource={Icons.mail}
                placeholder="E-mail"
                onChangeText={this.onEmailChange}
                textContentType="emailAddress"
              />
              {hasInvalidEmail ? (
                <Text style={styles.inputError}>
                  Please enter a valid email
                </Text>
              ) : null}
              <Input
                style={{ marginTop: 25 }}
                iconSource={Icons.lock}
                placeholder="Password"
                secureTextEntry
                onChangeText={this.onPasswordChange}
                textContentType="password"
              />
              {hasInvalidPassword ? (
                <Text style={styles.inputError}>Please enter a password</Text>
              ) : null}
              <Text testID="response" style={styles.inputError}>
                {errorMessage || ""}
              </Text>
              <Button
                title="Sign In"
                style={styles.button}
                textStyle={styles.buttonTitle}
                onPress={this.handleSubmit}
              />
            </View>

            {/* <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.line} />
            </View> */}

            <Button
              onPress={this.gotoRegister}
              title="Create Account"
              style={styles.regButton}
              textStyle={styles.regBtnTitle}
            />

            {/* <TouchableOpacity onPress={this.handleForgotPassword}>
              <Text style={styles.fpassword}>Forgot Password?</Text>
            </TouchableOpacity> */}

            <View style={styles.policyRow}>
              <Text style={styles.info}>
                Forgot{" "}
                <Text style={styles.linkColor} onPress={this.openTerms}>
                  Username{" "}
                </Text>
                or
                <Text style={styles.linkColor} onPress={this.openPolicy}>
                  {" "}
                  Password
                </Text>
              </Text>
              <Text style={[styles.info, { marginTop: 10 }]}>
                By signing in you agree to our{" "}
                <Text style={styles.linkColor} onPress={this.openTerms}>
                  Terms & Privacy
                </Text>
                .
              </Text>
            </View>
          </SafeAreaView>
        </KeyboardAwareScrollView>
        {this.props.loading && (
          <View style={styles.overlay}>
            <ActivityIndicator />
          </View>
        )}
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  loginError: state.auth.loginError,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(LoginScreen);
