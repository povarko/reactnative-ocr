import React, { Component, Fragment } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Colors, Icons } from "@AppTheme";
import { SideMenu, Text, Button } from "@AppComponents";
import styles from "./styles";

export default class ManageHomeScreen extends Component {
  handlePayment = () => {
    this.props.navigation.navigate("PaymentMethod");
  };

  handleDeposit = () => {
    this.props.navigation.navigate("PaymentMethod", { type: "PAYMENT METHOD" });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title: "Manage Drivecoin" }}>
          <View style={styles.content}>
            <Button
              style={styles.button}
              textStyle={styles.buttonLabel}
              title="Deposit"
              onPress={this.handleDeposit}
            />
            <Button
              style={styles.button}
              textStyle={styles.buttonLabel}
              title="Withdrawal"
              onPress={this.handlePayment}
            />
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
