import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text, Button } from "@AppComponents";
import SelectInput from "react-native-select-input-ios";
import { Icons } from "@AppTheme";
import styles from "./styles";
import phoneCodes from "./phoneCodes.json";

export default class TwoFASetPhoneNumberScreen extends Component {
  state = {
    phoneCode: "+27",
    phoneNumber: "",
    options: [],
    errorMessage: null
  };

  componentDidMount() {
    this.getPhoneCodes();
  }

  getPhoneCodes = () => {
    const options = phoneCodes.map(value => ({
      value: value.dial_code,
      label: `${value.dial_code} ${value.code}`
    }));
    this.setState({ options });
  };

  setPhoneNimber = value => {
    this.setState({ phoneNumber: value });
  };

  onSelect = value => {
    this.setState({ phoneCode: value });
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  handleSubmit = () => {
    const { phoneCode, phoneNumber } = this.state;
    const fullPhoneNumber = `${phoneCode} ${phoneNumber}`;

    if (phoneNumber.length < 10) {
      this.setState({ errorMessage: "Phone number is incorrect." });
    } else {
      this.setState({ errorMessage: null });
      this.props.navigation.navigate("TwoFAEnterCode");
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu title="security">
          <ScrollView
            style={styles.content}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} resizeMode="contain" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Two-factor auth.</Text>
            </View>

            <View style={styles.infoBox}>
              <View style={styles.row}>
                <Image
                  source={Icons.message}
                  resizeMode="contain"
                  style={styles.infoIcon}
                />
                <Text style={styles.infoTitle}>
                  Let's setup your cell phone!
                </Text>
              </View>
              <Text style={styles.infoBody}>
                Enabling two-factor authentication with your cell phone greatly
                increases the security of your account and is required for all
                users on <Text style={styles.colorText}>SportXchange.</Text>
              </Text>
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.row}>
                <View style={styles.selectContainer}>
                  <View style={{ flex: 0.2 }}>
                    <Image
                      source={Icons.chevronDownTiny}
                      resizeMode="contain"
                    />
                  </View>
                  <SelectInput
                    mode="dropdown"
                    value={this.state.phoneCode}
                    options={this.state.options}
                    labelStyle={styles.selectLabel}
                    style={styles.select}
                    onValueChange={this.onSelect}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    textContentType="telephoneNumber"
                    style={styles.input}
                    onChangeText={this.setPhoneNimber}
                    placeholder="60 566 7898"
                    placeholderTextColor="#FFF"
                  />
                </View>
              </View>
              {this.state.errorMessage && (
                <Text style={styles.errorText}>{this.state.errorMessage}</Text>
              )}

              <Button
                title="SEND CODE"
                style={styles.button}
                textStyle={styles.buttonText}
                onPress={this.handleSubmit}
              />
            </View>
          </ScrollView>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
