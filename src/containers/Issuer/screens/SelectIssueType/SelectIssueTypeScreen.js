import React from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Images, Icons, Colors } from "@AppTheme";
import { SideMenu } from "@AppComponents";
import styles from "./styles";
import { colors } from "react-native-elements";

class SelectIssueTypeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  onSelect = index => {
    this.setState({
      selected: index
    });
    let type = index === 0 ? "ATHLETE" : "TEAM";
    this.props.navigation.navigate("IssueHome", { type: type });
  };

  render() {
    const title = "athlete";
    let { selected } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu title={title}>
          <ImageBackground
            resizeMode="cover"
            source={Images.backgroundSmall}
            style={styles.headerBackground}
          >
            {/* <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
            </View> */}
            <View style={styles.bodyContent}>
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 30,
                  fontFamily: "Rajdhani-Bold"
                }}
              >
                SELECT YOUR
              </Text>
              <Text
                style={{
                  color: Colors.malachite,
                  fontSize: 42,
                  fontFamily: "Rajdhani-Bold"
                }}
              >
                ISSUANCE TYPE
              </Text>
              <TouchableOpacity
                style={{ marginTop: 20 }}
                activeOpacity={0.5}
                onPress={() => this.onSelect(0)}
              >
                <View
                  style={
                    selected == 0
                      ? styles.chooseItemSelected
                      : styles.chooseItem
                  }
                >
                  <FontAwesome5
                    solid
                    name={"user"}
                    style={{
                      fontSize: 45,
                      marginLeft: 34,
                      color: selected == 0 ? "#FFF" : Colors.malachite
                    }}
                  />
                  <Text style={styles.chooseItemText}>ATHLETE</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.divideOR}>
                <View
                  style={{ height: 1, backgroundColor: "#8E8E8E", width: 96 }}
                />
                <Text
                  style={{
                    fontFamily: "Rajdhani-Bold",
                    fontSize: 18,
                    color: "#FFF",
                    padding: 10
                  }}
                >
                  OR
                </Text>
                <View
                  style={{ height: 1, backgroundColor: "#8E8E8E", width: 96 }}
                />
              </View>
              <TouchableOpacity
                style={{ marginTop: 0 }}
                activeOpacity={0.5}
                onPress={() => this.onSelect(1)}
              >
                <View
                  style={
                    selected == 1
                      ? styles.chooseItemSelected
                      : styles.chooseItem
                  }
                >
                  <FontAwesome5
                    solid
                    name={"users"}
                    style={{
                      fontSize: 45,
                      marginLeft: 23,
                      color: selected == 1 ? "#FFF" : Colors.malachite
                    }}
                  />
                  <Text style={styles.chooseItemText}>TEAM</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default SelectIssueTypeScreen;
