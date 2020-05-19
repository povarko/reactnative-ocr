import React, { Component } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { Text, Button } from "@AppComponents";
import { SafeAreaView } from "react-navigation";
import { Input } from "react-native-elements";
import { Images, Icons } from "@AppTheme";
import styles from "./styles";

export default class PasswordResetScreen extends Component {
  render() {
    return (
      <ImageBackground source={Images.background} style={styles.container}>
        <SafeAreaView />
      </ImageBackground>
    );
  }
}
