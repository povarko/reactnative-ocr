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

class BidSuccessScreen extends Component {
  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu>
          <ImageBackground style={styles.background} source={Images.background}>
            <ScrollView>
              <View style={{ paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={this.goBack}>
                  <Image source={Icons.arrowLeftWhite} />
                </TouchableOpacity>
              </View>
              <View style={styles.content}>
                <View style={styles.infoRow}>
                  <Avatar rounded size={85} source={Images.lionelMessi} />
                  <View style={{ marginLeft: 20 }}>
                    <Text style={styles.name}>Football</Text>
                    <Text style={styles.name}>lionel messi</Text>
                    <Text style={styles.clubName}>BARCELONA fc</Text>
                  </View>
                </View>
                <View style={styles.pricesRow}>
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={styles.priceTitle}>ISO CLOSING PRICE</Text>
                    <Text style={styles.price}>$85,00</Text>
                  </View>
                  <View style={styles.verticalLine} />
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={styles.priceTitle}>CURRENT PRICE</Text>
                    <Text style={styles.price}>$90,00</Text>
                  </View>
                </View>

                <View style={styles.stakesContainer}>
                  <Image
                    resizeMode="contain"
                    source={Icons.trophy}
                    style={styles.trophy}
                  />
                  <View style={{ marginTop: -9 }}>
                    <Text style={styles.stakeTitle}>You Bought</Text>
                    <Text style={styles.stakes}>29 Stakes</Text>
                    <Text style={[styles.stakeValue, { color: "#FFF" }]}>
                      For <Text style={styles.stakeValue}>$1000.00</Text>
                    </Text>
                  </View>

                  <View>
                    <ShowStake
                      icon={Icons.coinGreen}
                      sn={"01"}
                      title="Ltd Edition Stakes"
                    />
                    <ShowStake
                      icon={Icons.coinGold}
                      sn={"01"}
                      title="Gold Stakes"
                    />
                    <ShowStake
                      icon={Icons.coinSilver}
                      sn={"01"}
                      title="Silver Stakes"
                    />
                    <ShowStake
                      icon={Icons.coinBronze}
                      sn={"01"}
                      title="Bronze Stakes"
                    />
                  </View>

                  <Button
                    title="Buy More"
                    style={styles.button}
                    textStyle={styles.buttonText}
                    onPress={() =>
                      this.props.navigation.navigate("ISOPlaceBid")
                    }
                  />
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

const ShowStake = ({ icon, sn, title }) => (
  <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}>
    <Image source={icon} resizeMode="contain" />
    <Text style={styles.serial}>
      {sn}
      <Text style={styles.edition}> - {title}</Text>
    </Text>
  </View>
);

export default BidSuccessScreen;
