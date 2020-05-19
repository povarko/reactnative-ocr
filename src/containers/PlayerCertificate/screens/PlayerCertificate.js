import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { Icons, Images } from "@AppTheme";
import styles from "./styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class PlayerCertificateScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginBottom: 30 }}>
          <TouchableOpacity
            style={{ position: "absolute", left: 24, top: 24 }}
            onPress={() => navigation.goBack()}
          >
            <Image source={Icons.back} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={Icons.menu}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <Image
            source={Images.logo}
            style={styles.logo}
            resizeMode={"contain"}
          />
          <Text style={styles.title}>FOOTBALL</Text>
        </View>

        <Image
          resizeMode="contain"
          style={{ width: wp("100%"), height: hp("50%"), flex: 1 }}
          source={Images.playerCertificate}
        />
      </SafeAreaView>
    );
  }
}
