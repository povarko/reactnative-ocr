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
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text } from "@AppComponents";
import { Images, Icons, Colors } from "@AppTheme";
import styles from "./styles";

class ISOAuctionScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  goToBid = () => {
    this.props.navigation.navigate("ISOPlaceBid");
  };

  render() {
    const title = "";
    const subTitle = "FOOTBALL";
    const userName = "LIONEL MESSI";
    const teamName = "Barcelona fc";
    const userAvatar = require("@Assets/images/lionel-messi.png");
    const isAuction = true; //false : market

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
              <Text style={styles.title}>{subTitle}</Text>
              <Text />
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.avatarContainer}>
                <Image source={userAvatar} style={styles.avatar} />
              </View>
              <View>
                <Text style={styles.nameTitle}>{userName}</Text>
                <Text style={styles.teamTitle}>{teamName}</Text>
              </View>
              <View
                style={{
                  height: 45,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {isAuction && (
                  <View
                    style={{
                      alignItems: "flex-end",
                      marginRight: 10,
                      justifyContent: "center"
                    }}
                  >
                    <Text style={styles.priceTitle1}>LAST</Text>
                    <Text style={styles.priceTitle1}>PRICE</Text>
                  </View>
                )}
                <Text style={styles.priceTitle}>$79.15</Text>
              </View>
              <View style={styles.subContentView}>
                <Text style={styles.currentPathTitle}>CURRENT PHASE:</Text>
                {isAuction ? (
                  <View>
                    <Text style={styles.auctionTitle}>AUCTION</Text>
                    <Text style={[styles.priceTitle1, { marginTop: 10 }]}>
                      3 DAYS REMAINING
                    </Text>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.auctionTitle}>SECONDARY</Text>
                    <Text style={styles.auctionTitle}>MARKET</Text>
                  </View>
                )}
                {!isAuction && (
                  <TouchableOpacity
                    style={styles.roundButton}
                    activeOpacity={0.8}
                    onPress={this.goToBid}
                  >
                    <Text style={styles.roundButtonText}>BUY</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={styles.roundButton}
                  activeOpacity={0.8}
                  onPress={this.goToBid}
                >
                  <Text style={styles.roundButtonText}>BID</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
export default ISOAuctionScreen;
