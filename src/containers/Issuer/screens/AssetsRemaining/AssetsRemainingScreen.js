import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text } from "@AppComponents";
import { Colors, Images, Icons } from "@AppTheme";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import { Divider } from "react-native-elements";

class AssetsRemainingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  _renderRemaining() {
    return (
      <View style={styles.container1}>
        <Image
          style={styles.congrate}
          resizeMode={"contain"}
          source={Icons.error}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.txt1}>876 SALES</Text>
          <Text style={styles.txt2}>
            Remaining until you can release the next issuance
          </Text>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={styles.goText}>BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderRelease() {
    return (
      <View style={styles.container1}>
        <Image
          style={styles.congrate}
          resizeMode={"contain"}
          source={Icons.error}
        />
        <View style={{ alignItems: "center", width: "85%" }}>
          <Text style={styles.txt1}>STAKES SOLD OUT</Text>
          <Text style={styles.txt2}>
            Over 500k stakes sold out. You can release more stakes below.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.navigate("AssetsOfferLaunch")}
        >
          <Text style={styles.goText}>RELEASE</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderSoldout() {
    return (
      <View style={styles.container1}>
        <Image
          style={styles.congrate}
          resizeMode={"contain"}
          source={Icons.error}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.txt1}>STAKES SOLD OUT</Text>
          <Text style={styles.txt2}>Over 500k stakes sold out.</Text>
        </View>
        <View style={[styles.row, { marginTop: 20 }]}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.txtDays}>Days</Text>
            <Text style={styles.txtDaysVal}>72</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.txtDays}>Hours</Text>
            <Text style={styles.txtDaysVal}>12</Text>
          </View>
          <Divider style={styles.divider} />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.txtDays}>Min.</Text>
            <Text style={styles.txtDaysVal}>35</Text>
          </View>
        </View>
        <View
          style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome5
            solid
            name="question-circle"
            style={{
              fontSize: 16,
              color: Colors.malachite
            }}
          />
          <Text style={styles.txt2}>Time left in your waiting period.</Text>
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={styles.goText}>BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const title = "ASSETS";
    const subTitle = "TRADING";

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={styles.container}>
            <Image
              style={styles.background}
              resizeMode={"cover"}
              source={Images.background}
            />
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack} style={{ width: 30 }}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
              <Text style={styles.title}>{subTitle}</Text>
              <View style={{ width: 30 }} />
            </View>
            {/* {this._renderRemaining()} */}
            {this._renderRelease()}
            {/* {this._renderSoldout()} */}
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default AssetsRemainingScreen;
