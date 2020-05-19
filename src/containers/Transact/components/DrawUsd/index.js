import React, { Component } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Image,
  Clipboard,
  TouchableOpacity
} from "react-native";
import { Text, Amount, Button } from "@AppComponents";
import Share from "react-native-share";
import { Icons } from "@AppTheme";
import CryptoList from "../CryptoList";
import Toast from "react-native-simple-toast";
import styles from "./styles";

export default class AddUsd extends Component {
  state = { selectedCrypto: "bitcoin" };

  _copyToClipBoard = async text => {
    await Clipboard.setString(text);
    Toast.showWithGravity(
      "Address Copied to Clipboard.",
      Toast.SHORT,
      Toast.CENTER
    );
  };

  _getTextFromClipboard = async () => {
    let text = await Clipboard.getString();
    return text;
  };

  _handleShare = message => {
    let shareOptions = {
      message,
      title: "Share via"
      //url,
      //subject // for email
    };
    Share.open(shareOptions).catch(err => {});
  };

  _setSelectedCrypto = crypto => {
    this.setState({ selectedCrypto: crypto });
  };

  _getSelectedCryptoIcon = () => {
    const { selectedCrypto } = this.state;
    switch (selectedCrypto) {
      case "litecoin":
        return Icons.litecoinAlt;
      case "bitcoin":
        return Icons.bitcoinAlt;
      case "turncoin":
        return Icons.turncoin;
      case "ethereum":
        return Icons.ethereumAlt;
      default:
        return null;
    }
  };

  render() {
    const address = "5afdte6353hdyet35ettee66ee3HG";

    return (
      <View style={styles.container}>
        <View style={styles.addCashContainer}>
          <Text style={styles.addCashText}>DRAW</Text>
          <View style={styles.searchContainer}>
            <Text style={styles.currency}>$</Text>
            <TextInput
              keyboardType="number-pad"
              onChangeText={this._handleAddCash}
              style={styles.search}
              defaultValue="20,000.00"
              underlineColorAndroid="transparent"
            />
          </View>
          <Text style={styles.addCashText}>CASH</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.4 }}>
            <CryptoList getSelected={this._setSelectedCrypto} />
          </View>

          <View style={{ flex: 0.6, paddingHorizontal: 12 }}>
            <ScrollView
              contentContainerStyle={styles.content}
              showsVerticalScrollIndicator={false}
            >
              <TextInputWithIcon
                imageStyle={{ width: 20, height: 20 }}
                source={this._getSelectedCryptoIcon()}
                defaultValue="7.87652324"
              />
              <View style={{ marginTop: 15 }}>
                <Text style={styles.driveCointTitle}>Current Total:</Text>
                <Text style={styles.driveCointTitle}>410 DX</Text>
              </View>
              <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>TO WALLET:</Text>
                <TouchableOpacity
                  onPress={() => this._copyToClipBoard(address)}
                >
                  <Image source={Icons.copy} style={styles.icon} />
                </TouchableOpacity>
              </View>
              <View style={{ alignSelf: "flex-start" }}>
                <Text style={styles.address}>{address}</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  justifyContent: "space-between",
                  flex: 1
                }}
              >
                <Image
                  source={Icons.qrCodeLarge}
                  resizeMode="contain"
                  style={styles.qrCode}
                />
                <View style={{ flex: 0.6 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={Icons.qrCode}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                    <Text style={styles.scanTitle}>SCAN QR CODE</Text>
                  </View>
                  <TouchableOpacity onPress={() => this._handleShare(address)}>
                    <View style={styles.shareContainer}>
                      <Image source={Icons.share} style={styles.icon} />
                      <Text style={styles.shareText}>SHARE</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                title="COMPLETE TRANSACTION"
                style={{ marginTop: 14, left: -9 }}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const TextInputWithIcon = ({ source, imageStyle, ...rest }) => (
  <View style={styles.searchContainer}>
    <Image
      resizeMode="contain"
      style={[{ width: 25, height: 25, tintColor: "#757575" }, imageStyle]}
      source={source}
    />
    <TextInput
      keyboardType="number-pad"
      underlineColorAndroid="transparent"
      style={[styles.search, { marginLeft: 2 }]}
      {...rest}
    />
  </View>
);
