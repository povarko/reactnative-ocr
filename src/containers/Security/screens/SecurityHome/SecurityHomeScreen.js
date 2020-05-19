import React, { Component } from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text } from "@AppComponents";
import { Divider } from "react-native-elements";
import { Icons } from "@AppTheme";
import { NavigationActions } from "react-navigation";
import styles from "./styles";

export default class SecurityHomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  gotoTwoFactorSetPhone = () => {
    this.props.navigation.navigate("TwoFASetPhone");
  };

  gotoManageDevices = () => {
    this.props.navigation.navigate("ManageDevices");
  };

  gotoSetLogin = () => {
    this.props.navigation.navigate("SetLogin");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title: "security" }} title="security">
          <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Security Center</Text>
            </View>

            <Divider style={styles.topDivider} />

            <View style={styles.items}>
              <View style={[styles.itemRow, styles.line]}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={this.gotoManageDevices}
                >
                  <View style={styles.item}>
                    <Image
                      source={Icons.manage}
                      resizeMode="contain"
                      style={styles.itemIcon}
                    />
                    <Divider style={styles.divider} />
                    <Text style={styles.itemTitle}>Manage Devices</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={this.gotoTwoFactorSetPhone}
                >
                  <View style={styles.item}>
                    <Image
                      source={Icons.auth}
                      resizeMode="contain"
                      style={styles.itemIcon}
                    />
                    <Divider style={styles.divider} />
                    <Text style={styles.itemTitle}>2 Factor Auth.</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.itemRow}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={this.gotoSetLogin}
                >
                  <View style={styles.item}>
                    <Image
                      source={Icons.setlogin}
                      resizeMode="contain"
                      style={styles.itemIcon}
                    />
                    <Divider style={styles.divider} />
                    <Text style={styles.itemTitle}>Set Login</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
