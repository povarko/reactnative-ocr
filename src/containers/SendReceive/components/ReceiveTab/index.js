import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Clipboard
} from "react-native";
import { Text, Button } from "@AppComponents";
import RNPickerSelect from "react-native-picker-select";
import { Icons } from "@AppTheme";
import Toast from "react-native-simple-toast";
import styles from "./styles";
import Share from "react-native-share";

export default class ReceiveTab extends Component {
  state = {
    wallet: null,
    showDialog: false
  };

  _toggleDialog = () => {
    this.setState(state => ({ showDialog: !state.showDialog }));
  };

  _handleSelectWallet = value => {
    this.setState({ wallet: value });
  };

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

  render() {
    const address = "637dgdh4546rt6f6g463h5659g9tyg9gyt";

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.label}>CHOOSE WALLET</Text>
          <RNPickerSelect
            disabled
            placeholder={{}}
            style={styles}
            value={this.state.wallet}
            items={wallets}
            useNativeAndroidPickerStyle={false}
            onValueChange={this._handleSelectWallet}
            Icon={() => (
              <Image
                style={{ width: 15, height: 15 }}
                source={Icons.chevronDown}
              />
            )}
          />
        </View>

        <View style={[styles.item, { marginTop: 50 }]}>
          <Text style={styles.wallet}>WALLET:</Text>
          <Text style={styles.address}>{address}</Text>
          <TouchableOpacity onPress={() => this._copyToClipBoard(address)}>
            <Image source={Icons.copy} style={styles.copyIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <Image source={Icons.qrCodeLarge} style={styles.qrCodeLarge} />
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={Icons.qrCode} style={styles.icon} />
              <Text style={styles.qrCodeLabel}>SCAN QR CODE</Text>
            </View>

            <TouchableOpacity onPress={() => this._handleShare(address)}>
              <View style={styles.shareContainer}>
                <Image source={Icons.share} style={styles.icon} />
                <Text style={styles.qrCodeLabel}>SHARE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Button title="NEXT" onPress={this._handleNext} style={styles.button} />
      </ScrollView>
    );
  }
}

const wallets = [{ value: "john black", label: "JOHN BLACK", color: "red" }];
