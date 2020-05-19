import React, { Component } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Button, SideMenu, Text } from "@AppComponents";
import { Images, Icons } from "@AppTheme";
import { SafeAreaView, NavigationActions } from "react-navigation";
import { Avatar } from "react-native-elements";
import styles from "./styles";

class BidFailureScreen extends Component {
  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu>
          <ImageBackground source={Images.background} style={styles.background}>
            <ScrollView contentContainerStyle={styles.content}>
              <View style={styles.header}>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity onPress={this.goBack}>
                    <Image source={Icons.arrowLeftWhite} />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>Football</Text>
                </View>
                <View style={{ flex: 1 }} />
              </View>
              <View style={{ marginTop: 12, alignItems: "center" }}>
                <Avatar rounded source={Images.lionelMessi} size={120} />
                <Text style={styles.name}>Lionel Messi</Text>
                <Text style={styles.club}>Barcelona fc</Text>
              </View>
              <View style={styles.infoContainer}>
                <Image
                  source={Icons.bidFail}
                  resizeMode="contain"
                  style={styles.icon}
                />
                <Text style={[styles.infoTitle, { marginTop: 36 }]}>
                  Sorry Your Bid Of
                </Text>
                <Text style={styles.bid}>$1000.00</Text>
                <Text style={styles.infoTitle}>For 833 Stakes</Text>
                <Text style={styles.subtitle}>
                  wasn’t enough to get any stakes.
                </Text>

                <Button
                  title="Buy"
                  style={styles.button}
                  textStyle={styles.buttonText}
                  onPress={() => this.props.navigation.navigate("ISOPlaceBid")}
                />
              </View>
            </ScrollView>
          </ImageBackground>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default BidFailureScreen;
