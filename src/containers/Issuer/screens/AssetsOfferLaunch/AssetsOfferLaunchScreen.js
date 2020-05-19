import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text, PickLaunch } from "@AppComponents";
import { Colors, Images, Icons } from "@AppTheme";
import styles from "./styles";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

class AssetsOfferLaunchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setTimes: "SET DATE"
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  getSelected = selected => {
    this.setState({ setTimes: selected });
  };
  render() {
    const title = "ASSETS";
    const subTitle = "ISO LAUNCHING";
    const { setTimes } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack} style={{ width: 30 }}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
              <Text style={styles.title}>{subTitle}</Text>
              <View style={{ width: 30 }} />
            </View>
            <View style={styles.container1}>
              {/* <ScrollView style={{padding: 20}}> */}
              <View style={{ marginTop: 20 }}>
                <Text style={styles.txt1}>
                  YOUR FIRST <Text style={styles.txt2}>10 000</Text> STAKES WILL
                  BE SOLD IN A BLIND AUCTION.
                </Text>
              </View>
              <TouchableOpacity style={styles.launchButton}>
                <Text style={styles.launchText}>LAUNCH NOW!</Text>
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 30,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Divider style={styles.divider} />
                <Text style={[styles.launchText, { fontSize: 33 }]}>OR</Text>
                <Divider style={styles.divider} />
              </View>
              <TouchableOpacity
                style={styles.setDateView}
                onPress={() => this.filterRef.toggle()}
              >
                <Text style={styles.setDateText}>{setTimes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.scheduleLaunchButton}>
                <Text style={styles.scheduleLaunchText}>SCHEDULE LAUNCH</Text>
              </TouchableOpacity>
              {/* </ScrollView> */}
            </View>
          </View>
        </SideMenu>
        <PickLaunch
          ref={ref => (this.filterRef = ref)}
          getSelected={this.getSelected}
        />
      </SafeAreaView>
    );
  }
}

export default AssetsOfferLaunchScreen;
