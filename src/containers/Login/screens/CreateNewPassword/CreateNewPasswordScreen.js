import React, { Component } from "react";
import { ImageBackground, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Title, Button } from "@AppComponents";
import { Input } from "react-native-elements";
import { Images } from "@AppTheme";
import { SafeAreaView } from "react-navigation";
import validator from "validator";
import styles from "./styles";
import { authActions } from "@AppRedux/actions";
import { connect } from "react-redux";

class CreateNewPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      passwordConfirm: null,
      passwordMatched: false,
      resetLink: props.navigation.getParam("resetLink")
      // email: registerEmail
    };
  }

  onPasswordChange = value => {
    this.setState({ password: value });
  };

  onPasswordConfirmChange = value => {
    this.setState(state => ({
      passwordConfirm: value,
      passwordMatched: value === state.password
    }));
  };

  getMessage = () => {
    const { passwordMatched, passwordConfirm } = this.state;
    if (passwordMatched) {
      return "PASSWORDS MATCHED";
    }
    if (passwordConfirm && !passwordMatched) {
      return "PASSWORDS DO NOT MATCH";
    }
    return null;
  };

  handleSubmit = () => {
    const { dispatch, navigation } = this.props;
    // if (this.props.loading) return;
    dispatch(
      authActions.sendNewPassword(
        this.state.passwordConfirm,
        this.state.resetLink
      )
    );
  };

  render() {
    const { passwordMatched, password } = this.state;
    const errorMessage = this.props.newPasswordError;

    return (
      <ImageBackground source={Images.background} style={styles.container}>
        <KeyboardAwareScrollView>
          <SafeAreaView style={styles.content}>
            <Title />
            <Text style={styles.title}>Password Reset</Text>
            <Input
              secureTextEntry
              label={password ? "New Password" : null}
              labelStyle={styles.label}
              autoCapitalize="none"
              placeholder={!password ? "NEW PASSWORD" : null}
              placeholderTextColor="#FFF"
              containerStyle={{ marginTop: 30 }}
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.input}
              onChangeText={this.onPasswordChange}
            />

            <Input
              secureTextEntry
              label={password ? "Confirm Password" : null}
              labelStyle={styles.label}
              autoCapitalize="none"
              placeholder={!password ? "CONFIRM PASSWORD" : null}
              placeholderTextColor="#FFF"
              containerStyle={{ marginTop: 38 }}
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.input}
              errorMessage={this.getMessage()}
              errorStyle={[styles.error, passwordMatched && styles.success]}
              onChangeText={this.onPasswordConfirmChange}
            />

            <Text testID="response" style={styles.inputError}>
              {errorMessage || ""}
            </Text>

            <Button
              title="CHANGE PASSWORD"
              style={[styles.button, passwordMatched && styles.activeButton]}
              textStyle={styles.buttonText}
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
  newPasswordError: state.auth.newPasswordError
});

export default connect(mapStateToProps)(CreateNewPasswordScreen);
