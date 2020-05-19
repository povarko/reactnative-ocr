import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Animated, Easing } from "react-native";
import styles from "./styles";
import { Images, Icons } from "@AppTheme";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.runAnimation();

    setTimeout(() => {
      this.props.navigation.navigate("Auth");
    }, 800);
  }

  runAnimation() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear
    }).start(() => this.runAnimation());
  }

  render() {
    const rotateValue = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View style={styles.container}>
        <Image
          style={styles.background}
          resizeMode={"cover"}
          source={Images.background}
        />
        <Image
          style={styles.logo}
          resizeMode={"contain"}
          source={Images.logoWithTitle}
        />
        <Animated.Image
          style={[styles.spinner, { transform: [{ rotate: rotateValue }] }]}
          resizeMode={"contain"}
          source={Icons.spinner}
        />
      </View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};

export default SplashScreen;
