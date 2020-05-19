import React from "react";
import {
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { HeaderBar, Text } from "@AppComponents";
import { Colors, Images, Icons } from "@AppTheme";
import TeamItem from "../../components/TeamItem";
import styles from "./styles";

class BuildingFeedScreen extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      // this.props.navigation.navigate("Auth");
      this.props.navigation.navigate("LockerHome");
    }, 2500);
  }

  render() {
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
        <Image
          style={styles.congrate}
          resizeMode={"contain"}
          source={Icons.confirmed}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.txt1}>BUILDING YOUR</Text>
          <Text style={styles.txt2}>PORTFOLIO</Text>
        </View>
      </View>
    );
  }
}

export default BuildingFeedScreen;
