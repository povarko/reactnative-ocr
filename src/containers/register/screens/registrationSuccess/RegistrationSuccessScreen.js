import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "@AppComponents";
import { Images, Icons } from "@AppTheme";
import styles from "./styles";

class RegistrationSuccessScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  goForward = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.95}
          style={styles.container}
          onPress={this.goForward}
        >
          <Image
            style={styles.background}
            resizeMode={"cover"}
            source={Images.background}
          />
          <View style={styles.container1}>
            <Image
              style={styles.logo}
              resizeMode={"contain"}
              source={Images.logoWithTitle}
            />
            <Image
              style={styles.congrate}
              resizeMode={"contain"}
              source={Icons.confirmed}
            />
            <View style={{ alignItems: "center" }}>
              <Text style={styles.txt1}>REGISTRATION</Text>
              <Text style={styles.txt2}>SUCCESSFUL</Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default RegistrationSuccessScreen;
