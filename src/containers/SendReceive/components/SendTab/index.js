import React, { PureComponent } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import { Text, Amount, Button } from "@AppComponents";
import styles from "./styles";
import { Icons } from "@AppTheme";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import RNPickerSelect from "react-native-picker-select";
import PropTypes from "prop-types";

export default class SendTab extends PureComponent {
  static propTypes = {
    sendTo: PropTypes.string,
    data: PropTypes.array.isRequired,
    toggleScanner: PropTypes.func.isRequired
  };

  state = {
    asset: null,
    amount: null,
    sendTo: this.props.sendTo || ""
  };

  _handleSelectAsset = value => {
    this.setState({ asset: value });
  };

  _handleAmountChange = value => {
    if (!isNaN(value)) {
      this.setState({ amount: value.replace(".", "") });
    }
  };

  _handleSendToChange = value => {
    this.setState({ sendTo: value });
  };

  _getPickerItems() {
    const { data } = this.props;
    return data.map(item => ({
      label: item.symbol + "".toUpperCase(),
      value: item.name
    }));
  }

  _launchQrScanner = () => {
    this.props.toggleScanner();
  };

  _handleNext = () => {};

  render() {
    const { amount, sendTo, asset } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.label}>SEND TO</Text>
          <View style={styles.item}>
            <TextInput
              value={sendTo}
              onChangeText={this._handleSendToChange}
              style={styles.input}
              placeholder="ENTER EMAIL or WALLET ADDRESS"
            />
            <TouchableOpacity onPress={this._launchQrScanner}>
              <Image style={{ width: 36, height: 36 }} source={Icons.qrCode} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.label}>SELECT ASSET</Text>
          <View style={styles.item}>
            <View style={styles.item}>
              <RNPickerSelect
                placeholder={{}}
                style={styles}
                value={asset}
                items={this._getPickerItems()}
                useNativeAndroidPickerStyle={false}
                onValueChange={this._handleSelectAsset}
                Icon={() => (
                  <FontAwesome5
                    solid
                    name="chevron-down"
                    style={{
                      fontSize: 16,
                      color: "#8E8E8E"
                    }}
                  />
                )}
              />
            </View>
            <View>
              <Text style={[styles.label, { marginBottom: 0 }]}>
                AVAILABLE:
              </Text>
              <Amount
                unit="$"
                value={5270.017}
                style={styles.amount}
                decimalStyle={styles.amountDecimal}
              />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.label}>ENTER AMOUNT</Text>
          <TextInput
            keyboardType="number-pad"
            onChangeText={this._handleAmountChange}
            style={styles.input}
            placeholder="AMOUNT"
            value={amount}
          />
          <Button
            title="NEXT"
            onPress={this._handleNext}
            style={styles.button}
          />
        </View>
      </ScrollView>
    );
  }
}
