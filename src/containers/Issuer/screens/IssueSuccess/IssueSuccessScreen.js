import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text } from "@AppComponents";
import { Colors, Images, Icons } from "@AppTheme";
import styles from "./styles";

class IssueSuccessScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = "";
    const type = this.props.navigation.getParam("type", () => {});
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
                style={styles.congrate}
                resizeMode={"contain"}
                source={Icons.confirmed}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.txt1}>CONGLATULATIONS</Text>
                <Text style={styles.txt2}>
                  {type === "TEAM"
                    ? "YOUR TEAM PROFILE IS NOW ACTIVE!"
                    : "YOUR PROFILE IS NOW ACTIVE!"}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 32,
                  borderRadius: 25,
                  backgroundColor: Colors.malachite,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20
                }}
                onPress={() => this.props.navigation.navigate("IssueManage")}
              >
                <Text style={styles.goText}>GO!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default IssueSuccessScreen;
