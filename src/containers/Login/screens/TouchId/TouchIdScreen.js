import React, { Component, Fragment } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "@AppComponents";
import TouchID from "react-native-touch-id";
import { Icons } from "@AppTheme";
import { authActions } from "@AppRedux/actions";
import { connect } from "react-redux";
import styles from "./styles";
import reactotron from "reactotron-react-native";

class TouchIdScreen extends Component {
  state = {
    touchIdError: null
  };

  openTouchId = async () => {
    try {
      const { dispatch, navigation } = this.props;
      const opts = {
        title: "Authentication Required", // Android
        imageColor: "#e00606", // Android
        imageErrorColor: "#ff0000", // Android
        sensorDescription: "Touch sensor", // Android
        sensorErrorDescription: "Failed", // Android
        cancelText: "Cancel", // Android
        fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
        unifiedErrors: false, // use unified error messages (default false)
        passcodeFallback: false // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
      };
      await TouchID.authenticate("Verify ID", opts);
      dispatch(authActions.setTouchId());
      navigation.navigate("MainTab");
    } catch (err) {
      reactotron.log(err);
      this.setState({ touchIdError: err });
    }
  };

  showMessages() {
    const { touchIdError } = this.state;
    if (touchIdError) {
      return (
        <Fragment>
          <TouchableOpacity onPress={this.openTouchId} activeOpacity={0.8}>
            <Image
              source={Icons.thumb}
              style={{ width: 100, height: 100, tintColor: "red" }}
            />
          </TouchableOpacity>
          <Text style={[styles.title, { marginTop: 35 }]}>
            Could not read fingerprint!
          </Text>
          <TouchableOpacity activeOpacity={0.8} onPress={this.openTouchId}>
            <Text style={styles.retry}>Retry now!</Text>
          </TouchableOpacity>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <TouchableOpacity onPress={this.openTouchId} activeOpacity={0.8}>
            <Image source={Icons.thumb} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
          <Text style={[styles.title, { marginTop: 35 }]}>
            Confirm fingerprint
          </Text>
          <Text style={styles.title}>To continue.</Text>
          <Text style={styles.subtitle}>Touch sensor now.</Text>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTitle}>Verify ID</Text>
        </View>
        <View style={{ alignItems: "center", flex: 3 }}>
          {this.showMessages()}
        </View>
      </SafeAreaView>
    );
  }
}

export default connect()(TouchIdScreen);
