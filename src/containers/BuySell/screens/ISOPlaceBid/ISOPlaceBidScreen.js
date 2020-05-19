import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text } from "@AppComponents";
import { Images, Icons, Colors } from "@AppTheme";
import styles from "./styles";

class ISOPlaceBidScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bidPrice: "",
      buyPrice: "1 STAKE"
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  _handleMax = () => {
    let _buyStake = Math.floor(12000 / 79.15) + " STAKE";
    this.setState({ bidPrice: "12000.00", buyPrice: _buyStake });
  };
  _handleBidPrice = value => {
    let _tmp = Number(value.replace(" ", ""));
    if (!isNaN(_tmp)) {
      let _buyStake = Math.floor(_tmp / 79.15) + " STAKE";
      this.setState({ bidPrice: _tmp, buyPrice: _buyStake });
    }
  };
  _handleBuyPrice = value => {
    // this.setState({ buyPrice: value });
  };

  render() {
    const title = "";
    const subTitle = "FOOTBALL";
    const userName = "LIONEL MESSI";
    const teamName = "Barcelona fc";
    const userAvatar = require("@Assets/images/lionel-messi.png");
    const isLast = false; //false : market
    const { bidPrice, buyPrice } = this.state;
    const fontStyle = !isLast ? { color: Colors.malachite } : { color: "#FFF" };

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
            <ScrollView style={styles.content}>
              <View>
                <View style={styles.avatarContainer}>
                  <Image source={userAvatar} style={styles.avatar} />
                </View>
                <View>
                  <Text style={styles.nameTitle}>{userName}</Text>
                  <Text style={styles.teamTitle}>{teamName}</Text>
                </View>
                {isLast ? (
                  <View
                    style={{
                      height: 45,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
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
                    <Text style={styles.priceTitle}>$UNKNOWN</Text>
                  </View>
                ) : (
                  <View
                    style={{
                      height: 45,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <View
                      style={{
                        alignItems: "flex-end",
                        marginRight: 10,
                        justifyContent: "center"
                      }}
                    >
                      <Text style={styles.priceTitle1}>AVERAGE</Text>
                      <Text style={styles.priceTitle1}>PRICE</Text>
                    </View>
                    <Text style={styles.priceTitle}>$79.15</Text>
                  </View>
                )}
                <View style={styles.subContentView}>
                  <Text style={styles.currentPathTitle}>PLACE A BID FOR</Text>
                  <View style={styles.inputViews}>
                    <Text style={[styles.dollarTitle, fontStyle]}>$</Text>
                    <TextInput
                      value={bidPrice}
                      onChangeText={this._handleBidPrice}
                      style={[styles.input, fontStyle]}
                      placeholder=""
                      keyboardType="numeric"
                    />
                  </View>
                  <View
                    style={{
                      width: "90%",
                      marginTop: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text style={styles.fundTitle}>
                      Funds Available:{" "}
                      <Text style={styles.availableTitle}>$12 000.00</Text>
                    </Text>
                    <TouchableOpacity onPress={this._handleMax}>
                      <Text style={styles.maxTitle}>MAX</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={[styles.currentPathTitle, { marginTop: 10 }]}>
                    TO BUY
                  </Text>
                  <View style={styles.inputViews}>
                    {/* <Text style={styles.dollarTitle}>$</Text> */}
                    <TextInput
                      editable={false}
                      value={buyPrice}
                      onChangeText={this._handleBuyPrice}
                      style={[styles.input1, fontStyle]}
                      placeholder=""
                      keyboardType="numeric"
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.roundButton}
                    activeOpacity={0.8}
                    onPress={() =>
                      this.props.navigation.navigate("ISOUpdateBid")
                    }
                  >
                    <Text style={styles.roundButtonText}>PLACE BID</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
export default ISOPlaceBidScreen;
