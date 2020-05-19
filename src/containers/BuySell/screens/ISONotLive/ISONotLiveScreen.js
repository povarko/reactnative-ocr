import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { SideMenu, Text } from "@AppComponents";
import { Colors, Images, Icons } from "@AppTheme";
import styles from "./styles";
import { Divider } from "react-native-elements";

class ISONotLiveScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = "";
    const ISOStartExist = true;

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={styles.container}>
            <Image
              style={styles.background}
              resizeMode={"cover"}
              source={Images.background}
            />
            <View style={styles.container1}>
              <Image
                style={styles.logoIcon}
                resizeMode={"contain"}
                source={Images.logoWithTitle}
              />
              <View style={styles.globeView}>
                <FontAwesome5
                  solid
                  name="globe"
                  style={{ fontSize: 37, color: "#FFF" }}
                />
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.txt2}>ISO NOT LIVE YET!</Text>
                <Text style={styles.txt1}>
                  {ISOStartExist ? "Please check back in" : "Check back later!"}
                </Text>
                {ISOStartExist && (
                  <View
                    style={{
                      marginTop: 20,
                      height: 72,
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text style={styles.txtDays}>Days</Text>
                      <Text style={styles.txtDaysVal}>72</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text style={styles.txtDays}>Hours</Text>
                      <Text style={styles.txtDaysVal}>12</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text style={styles.txtDays}>Min.</Text>
                      <Text style={styles.txtDaysVal}>35</Text>
                    </View>
                  </View>
                )}
              </View>
              <TouchableOpacity
                style={{
                  width: 140,
                  height: 35,
                  borderRadius: 25,
                  backgroundColor: Colors.malachite,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20
                }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Text style={styles.goText}>BACK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default ISONotLiveScreen;
