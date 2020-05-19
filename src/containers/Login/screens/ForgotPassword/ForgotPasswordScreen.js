import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { Title, Button } from "@AppComponents";
import { Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Images, Icons } from "@AppTheme";
import { SafeAreaView } from "react-navigation";
import { authActions } from "@AppRedux/actions";
import { connect } from "react-redux";
import validator from "validator";
import styles from "./styles";
import reactotron from "reactotron-react-native";

class ForgotPasswordScreen extends Component {
  state = {
    email: "",
    password: "",
    hasError: false,
    enteringValidEmail: false
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  onEmailChange = value => {
    const isValidEmail = validator.isEmail(value);
    this.setState({ email: value, enteringValidEmail: isValidEmail });
  };

  handleSubmit = () => {
    const { email } = this.state;
    const isValidEmail = validator.isEmail(email);

    this.setState({ hasError: false, disable: true });

    if (!isValidEmail) {
      this.setState({ hasError: !isValidEmail });
    } else {
      this.props.dispatch(authActions.sendResetPasswordLink(email));
    }
  };

  render() {
    const { enteringValidEmail, hasError } = this.state;
    const errorMessage = hasError
      ? "Please enter a valid email"
      : this.props.error;

    return (
      <ImageBackground source={Images.background} style={styles.container}>
        <KeyboardAwareScrollView>
          <SafeAreaView
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <TouchableOpacity style={styles.header} onPress={this.goBack}>
              <Image source={Icons.arrowLeftWhite} />
            </TouchableOpacity>
            <Title />
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.info}>
              Enter the email address you used to create your account and we’ll
              email you a reset password link
            </Text>

            <Input
              autoCapitalize="none"
              inputContainerStyle={styles.inputContainer}
              leftIcon={<Image source={Icons.mail} />}
              rightIcon={enteringValidEmail && <Image source={Icons.success} />}
              placeholder="E-MAIL"
              placeholderTextColor="#FFF"
              inputStyle={styles.input}
              onChangeText={this.onEmailChange}
              textContentType="emailAddress"
              errorStyle={{ textAlign: "center" }}
              errorMessage={errorMessage}
            />

            <Button
              title="PROCEED"
              disabled={this.props.loading}
              style={[styles.button, enteringValidEmail && styles.activeButton]}
              textStyle={styles.buttonTitle}
              onPress={this.handleSubmit}
            />
          </SafeAreaView>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.resetPasswordLinkError
});

export default connect(mapStateToProps)(ForgotPasswordScreen);
