import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LineChartIssue from "../../components/LineChartIssue";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text } from "@AppComponents";
import { Images, Icons, Colors } from "@AppTheme";
import styles from "./styles";

const data1 = [
  2,
  15,
  14,
  13,
  15,
  11,
  14,
  12,
  7,
  10,
  9,
  10,
  9,
  10,
  5,
  4,
  6,
  4,
  12,
  4
];

const data2 = [
  10,
  12,
  12,
  15,
  14,
  5,
  9,
  10,
  5,
  4,
  6,
  4,
  7,
  8,
  8,
  7,
  6,
  12,
  15,
  10,
  12
];

class IssueAssetsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  renderAssets() {
    return (
      <View
        style={{
          backgroundColor: "#0D0D0D",
          borderColor: Colors.malachite,
          borderWidth: 0.5,
          borderTopWidth: 5,
          marginBottom: 100
        }}
      >
        <View style={styles.issuanceDatapoint}>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#00ACEE"
            }}
          />
          <Text
            style={{
              color: "#00ACEE",
              margin: 5,
              fontSize: 12,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            Datapoint1
          </Text>
        </View>
        <LineChartIssue
          style={styles.graph}
          gradientColor="#00ACEE"
          graphData={data1}
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -30,
            marginBottom: 10
          }}
        >
          <FontAwesome5
            solid
            name="arrow-circle-up"
            style={{
              fontSize: 18,
              color: Colors.malachite
            }}
          />
          <Text
            style={{
              color: "#00ACEE",
              fontSize: 17,
              fontFamily: "Rajdhani-Bold",
              marginLeft: 10
            }}
          >
            + $9.45 (0.18)
          </Text>
        </View>
        <View style={styles.issuanceDatapoint2}>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#FF7141"
            }}
          />
          <Text
            style={{
              color: "#FF7141",
              margin: 5,
              fontSize: 12,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            Datapoint2
          </Text>
        </View>
        <LineChartIssue
          style={styles.graph}
          gradientColor="#FF7141"
          graphData={data2}
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -30,
            marginBottom: 10
          }}
        >
          <FontAwesome5
            solid
            name="arrow-circle-up"
            style={{
              fontSize: 18,
              color: Colors.malachite
            }}
          />
          <Text
            style={{
              color: "#FF7141",
              fontSize: 17,
              fontFamily: "Rajdhani-Bold",
              marginLeft: 10
            }}
          >
            + $9.45 (0.18)
          </Text>
        </View>
        <View style={{ flexDirection: "row", padding: 20 }}>
          <Text
            style={{
              color: Colors.malachite,
              fontSize: 20,
              fontFamily: "Rajdhani-SemiBold",
              fontWeight: "normal"
            }}
          >
            View 1
          </Text>
          <Text
            style={{
              color: "#FFF",
              fontSize: 20,
              fontFamily: "Rajdhani-SemiBold",
              fontWeight: "normal",
              marginLeft: 20
            }}
          >
            View 2
          </Text>
        </View>
        <View
          style={{
            height: 1,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#464646"
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20
          }}
        >
          <Text
            style={{ color: "#FFF", fontSize: 20, fontFamily: "Rajdhani-Bold" }}
          >
            TOTAL ISSUED
          </Text>
          <Text
            style={{
              color: Colors.malachite,
              fontSize: 20,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            10 000 000
          </Text>
        </View>
        <View
          style={{
            height: 1,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#464646"
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20
          }}
        >
          <Text
            style={{ color: "#FFF", fontSize: 20, fontFamily: "Rajdhani-Bold" }}
          >
            TOTAL EARNED
          </Text>
          <Text
            style={{
              color: Colors.malachite,
              fontSize: 20,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            $ 210,750.57
          </Text>
        </View>
      </View>
    );
  }

  render() {
    const title = "ISSUER ASSETS";

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }}>
          <ImageBackground
            resizeMode="cover"
            source={Images.backgroundSmall}
            style={styles.headerBackground}
          >
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.bodyContent}>
              {this.renderAssets()}
            </ScrollView>
          </ImageBackground>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
export default IssueAssetsScreen;
