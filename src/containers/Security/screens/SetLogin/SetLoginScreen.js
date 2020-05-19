import React, { Component } from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text, Button } from "@AppComponents";
import { Icons } from "@AppTheme";
import { connect } from "react-redux";
import styles from "./styles";

class SetLoginSreen extends Component {
  state = {
    activeTab: null
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  onPressIn = tab => {
    this.setState({ activeTab: tab });
  };

  onPressOut = () => {
    const { activeTab } = this.state;
    const { navigation } = this.props;

    this.setState({ activeTab: null }, () => {
      if (activeTab == "pin") {
        navigation.navigate("PinSetup");
      } else if (activeTab == "touchId") {
        navigation.navigate("TouchIdSetup");
      }
    });
  };

  render() {
    const { auth } = this.props;
    const { activeTab } = this.state;
    const touchIdStyles = [
      styles.item,
      activeTab == "touchId" || (auth.useTouchId && styles.activeItem)
    ];
    const pinStyles = [
      styles.item,
      activeTab == "pin" || (auth.usePin && styles.activeItem)
    ];

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu title="Security">
          <ScrollView style={styles.content}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} resizeMode="contain" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Login Method</Text>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPressIn={() => this.onPressIn("touchId")}
                onPressOut={this.onPressOut}
              >
                <View style={touchIdStyles}>
                  <Image source={Icons.thumb} style={styles.icon} />
                  <Text style={styles.title}>TOUCH ID</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPressIn={() => this.onPressIn("pin")}
                onPressOut={this.onPressOut}
              >
                <View style={pinStyles}>
                  <Image source={Icons.key} style={styles.icon} />
                  <Text style={styles.title}>PIN</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(SetLoginSreen);
