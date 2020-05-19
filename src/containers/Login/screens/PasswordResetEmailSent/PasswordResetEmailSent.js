import React, { Component } from "react";
import { ImageBackground, Image, View } from "react-native";
import { Title, Text, Button } from "@AppComponents";
import { Images, Icons } from "@AppTheme";
import { SafeAreaView } from "react-navigation";
import styles from "./styles";

export default class EmailSentSuccess extends Component {
  render() {
    return (
      <ImageBackground source={Images.background} style={styles.container}>
        <SafeAreaView
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Title />
          <View style={styles.iconContainer}>
            <Image
              source={Icons.sent}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <Text style={styles.message}>
            Email has been sent. Please check your inbox & confirm reset.
          </Text>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
