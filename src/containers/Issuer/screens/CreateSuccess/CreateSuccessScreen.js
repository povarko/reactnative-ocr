import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text } from "@AppComponents";
import { Colors, Images, Icons } from "@AppTheme";
import styles from "./styles";

class CreateSuccessScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack = () => {
    this.props.navigation.navigate("IssueManage");
    // this.props.navigation.goBack();
  };

  render() {
    const title = "";
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={styles.container}>
            <Image
              style={styles.background}
              resizeMode={"cover"}
              source={Images.background}
            />
            <TouchableOpacity
              onPress={this.goBack}
              style={{ marginTop: 20, marginLeft: 20, width: 30 }}
            >
              <Image source={Icons.arrowLeftWhite} />
            </TouchableOpacity>
            <View style={styles.container1}>
              <Image
                style={styles.congrate}
                resizeMode={"contain"}
                source={Icons.confirmed}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.txt1}>POST WAS</Text>
                <Text style={styles.txt2}>SUCCESSFUL!</Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 140,
                  height: 36,
                  borderRadius: 18,
                  borderColor: Colors.malachite,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20
                }}
                onPress={() => this.props.navigation.navigate("CreatePost")}
              >
                <Text style={styles.goText}>ADD MORE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 140,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: Colors.malachite,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20
                }}
                onPress={() => this.props.navigation.navigate("IssueManage")}
              >
                <Text style={styles.goText}>HOME</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default CreateSuccessScreen;
