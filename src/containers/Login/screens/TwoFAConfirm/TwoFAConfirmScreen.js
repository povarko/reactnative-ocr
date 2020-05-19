import React, { Component } from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Title, Button, Text } from "@AppComponents";
import { Images, Icons } from "@AppTheme";
import { Colors } from "@AppTheme";
import { SafeAreaView } from "react-navigation";
import CodeInput from "react-native-confirmation-code-input";
import styles from "./styles";

export default class LoginScreen extends Component {
  state = {
    validationError: false
  };

  handleComplete = isValid => {
    this.setState({ validationError: !isValid });
    //this.props.naigation.navigate("Locker")
  };

  getBorderColor = () => {
    if (this.state.validationError) {
      return Colors.error;
    }
    return "#FFF";
  };

  resendCode = () => {};

  render() {
    const { validationError } = this.state;
    const borderColor = this.getBorderColor();

    return (
      <ImageBackground source={Images.background} style={styles.container}>
        <SafeAreaView
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Title />
          <Image
            source={Icons.confirm}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={styles.title1}>Two factor</Text>
          <Text style={styles.title2}>Authentication</Text>
          <Text style={styles.title3}>Please Enter Code</Text>

          <CodeInput
            ref="codeInputRef2"
            secureTextEntry
            compareWithCode="555555"
            activeColor={borderColor}
            inactiveColor={borderColor}
            autoFocus={false}
            ignoreCase={true}
            inputPosition="center"
            size={40}
            codeLength={6}
            onFulfill={this.handleComplete}
            containerStyle={{ marginTop: 22, flex: null }}
            codeInputStyle={{ borderWidth: 1.5, borderRadius: 6 }}
          />
          {validationError && (
            <Text style={styles.inputError}>
              Incorrect 2-Factor Authentication Code
            </Text>
          )}
          <Button
            title="Login"
            style={styles.button}
            textStyle={styles.buttonTitle}
            onPress={this.handleSubmit}
          />

          <View style={styles.row}>
            <View style={styles.infoRow}>
              <Image source={Icons.question} resizeMode="contain" />
              <TouchableOpacity onPress={this.resendCode}>
                <Text style={styles.resend}>Resend Code</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoRow}>
              <Image source={Icons.question} resizeMode="contain" />
              <TouchableOpacity onPress={this.resendCode}>
                <Text style={styles.resend}>Help/Support</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
