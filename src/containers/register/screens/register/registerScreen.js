import React, { Component } from "react";
import {
  View,
  ImageBackground,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { Title, Button, Input, Text } from "@AppComponents";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Images, Colors } from "@AppTheme";
import { SafeAreaView } from "react-navigation";
import { CheckBox } from "react-native-elements";
import validator from "validator";
import { authActions } from "@AppRedux/actions";
import { connect } from "react-redux";
import styles from "./styles";

class RegisterScreen extends Component {
  state = {
    checked: false,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    validated: false
  };

  onChange = fieldName => {
    return value => {
      this.setState({ [fieldName]: value });
    };
  };

  onCheck = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  isValidForm = () => {
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      checked
    } = this.state;
    const isValidEmail = validator.isEmail(email);
    const isValidPassword =
      validator.isLength(password, { min: 6 }) && password === confirmPassword;

    if (firstName && lastName && isValidEmail && isValidPassword && checked) {
      return true;
    }
    return false;
  };

  handleSubmit = () => {
    const { loading, dispatch } = this.props;
    if (loading) return;
    if (this.isValidForm()) {
      const { email, password, firstName, lastName } = this.state;
      dispatch(
        authActions.register({
          email,
          password,
          firstname: firstName,
          lastname: lastName
        })
      );
    }
  };

  render() {
    const isValidForm = this.isValidForm();
    const { error } = this.props;
    return (
      <ImageBackground style={styles.container}>
        <KeyboardAwareScrollView>
          <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
              <Title />
              <View style={styles.form}>
                <View style={styles.row}>
                  <Input
                    placeholder="First Name"
                    onChangeText={this.onChange("firstName")}
                    style={{ width: 136 }}
                  />
                  <Input
                    placeholder="Last Name"
                    onChangeText={this.onChange("lastName")}
                    style={{ width: 136 }}
                  />
                </View>
                <Input
                  placeholder="Enter e-mail"
                  onChangeText={this.onChange("email")}
                  style={{ width: 290, marginTop: 25 }}
                />
                <Input
                  secureTextEntry
                  placeholder="Create Password"
                  onChangeText={this.onChange("password")}
                  style={{ width: 290, marginTop: 25 }}
                />
                <Input
                  secureTextEntry
                  placeholder="Confirm Password"
                  onChangeText={this.onChange("confirmPassword")}
                  style={{ width: 290, marginTop: 25 }}
                />
                {error && <Text style={styles.error}>{error}</Text>}
                <View style={styles.termsRow}>
                  <CheckBox
                    size={20}
                    checked={this.state.checked}
                    checkedColor={Colors.btnTitleColor}
                    uncheckedColor={Colors.gray}
                    containerStyle={{ backgroundColor: "transparent" }}
                    onPress={this.onCheck}
                  />
                  <Text style={styles.terms}>
                    Accept{" "}
                    <Text style={[styles.terms, styles.colorText]}>
                      Terms & Conditions
                    </Text>
                  </Text>
                </View>
                <Button
                  onPress={this.handleSubmit}
                  title="Create Account"
                  style={[isValidForm ? styles.validButton : styles.button]}
                  textStyle={styles.buttonText}
                  />
              </View>
            </ScrollView>
            {this.props.loading && (
              <View style={styles.overlay}>
                <ActivityIndicator />
              </View>
            )}
          </SafeAreaView>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.registerError
});
export default connect(mapStateToProps)(RegisterScreen);
