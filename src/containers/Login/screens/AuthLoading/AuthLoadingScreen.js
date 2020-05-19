import React, { Component } from "react";
import { ImageBackground, StyleSheet, ActivityIndicator } from "react-native";
import { Images } from "@AppTheme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { connect } from "react-redux";
import { axiosConfig } from "@AppConfig";

class AuthLoadingScreen extends Component {
  componentDidMount() {
    this.authloading();
    this.props.navigation.addListener("didFocus", this.authloading);
  }

  authloading = () => {
    const { auth, navigation } = this.props;
    if (auth.user) {
      if (auth.usePin) {
        navigation.navigate("EnterPin");
      } else if (auth.useTouchId) {
        navigation.navigate("TouchId");
      } else {
        axiosConfig({ authToken: auth.user.accessToken });
        navigation.navigate("MainTab");
      }
    } else {
      // navigation.navigate("MainTab");
      // navigation.navigate("MainScreen");
      navigation.navigate("EditScreen");
      // this.props.navigation.navigate("Login");
    }
  };

  render() {
    return (
      <ImageBackground source={Images.background} style={styles.container}>
        <ActivityIndicator />
      </ImageBackground>
    );
  }
}

const mapsStateToProps = state => ({ auth: state.auth });

export default connect(mapsStateToProps)(AuthLoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    width: wp("100%")
  }
});
