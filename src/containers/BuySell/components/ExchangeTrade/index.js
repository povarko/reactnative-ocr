import React from "react";
import {
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import { Colors, Icons } from "@AppTheme";
import styles from "./styles";
import ModalDropdown from "react-native-modal-dropdown";

const TRADE_PICKER_DATA1 = [
  "LTD EDITION: 10",
  "GOLD STAKES: 20",
  "SILVER STAKES: 20",
  "BRONZE STAKES: 20"
];
const TRADE_COLOR = [Colors.malachite, "gold", "silver", "#CD7F32"];
const TRADE_PICKER_DATA = [
  "Limit Buy",
  "Limit Sell",
  "Market Buy",
  "Market Sell"
];

export default class ExchangeTrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBuy: true,
      isLimit: true,
      asset1: null,
      asset: null,
      limitPrice: "",
      amount: "",
      total: "",
      selectedIndex: 0
    };
  }

  _dropdown_2_renderRow(rowData, rowID, highlighted) {
    const customColor = TRADE_COLOR[rowID % 4];
    return (
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            height: 30,
            alignItems: "center",
            width: "80%",
            paddingHorizontal: 25
          }}
        >
          <FontAwesome5
            solid
            name="coins"
            style={{ fontSize: 20, color: customColor }}
          />
          <Text
            style={{ color: customColor, marginLeft: 20, fontSize: 16 }}
          >{`${rowData}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  _dropdown_2_renderButtonText(rowData) {
    return `${rowData}`;
  }
  _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    if (rowID == TRADE_PICKER_DATA1.length - 1) return;
    // let key = `spr_${rowID}`;
    return <View style={styles.dropdown_2_separator} />;
  }
  _dropdown_2_onSelect(idx, value) {
    this.setState({ selectedIndex: idx });
  }

  _handleSelectAsset1 = value => {
    this.setState({ asset1: value });
  };
  _handleSelectAsset = value => {
    let _isBuy = value.toLocaleLowerCase().includes("buy");
    let _isLimit = value.toLocaleLowerCase().includes("limit");
    this.setState({ asset: value, isBuy: _isBuy, isLimit: _isLimit });
  };
  _getTradePickerItems1() {
    return TRADE_PICKER_DATA1.map(item => ({
      label: item.toUpperCase(),
      value: item
    }));
  }
  _getTradePickerItems() {
    return TRADE_PICKER_DATA.map(item => ({
      label: item.toUpperCase(),
      value: item
    }));
  }
  _handleLimitPrice = value => {
    this.setState({ limitPrice: value });
  };
  _handleAmount = value => {
    this.setState({ amount: value });
  };
  _handleTotal = value => {
    this.setState({ total: value });
  };
  render() {
    const {
      asset,
      asset1,
      limitPrice,
      amount,
      total,
      isBuy,
      isLimit,
      selectedIndex
    } = this.state;
    const customColor = TRADE_COLOR[selectedIndex];
    const customText = TRADE_PICKER_DATA1[selectedIndex];
    return (
      <ScrollView
        style={{
          backgroundColor: "#000",
          marginTop: 20,
          paddingHorizontal: 15,
          height: "100%"
        }}
      >
        <ModalDropdown
          ref="dropdown_2"
          style={styles.dropdown_2}
          textStyle={styles.dropdown_2_text}
          dropdownStyle={styles.dropdown_2_dropdown}
          options={TRADE_PICKER_DATA1}
          defaultValue="select"
          onSelect={(idx, value) => this._dropdown_2_onSelect(idx, value)}
          renderButtonText={rowData =>
            this._dropdown_2_renderButtonText(rowData)
          }
          renderRow={this._dropdown_2_renderRow.bind(this)}
          renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
            this._dropdown_2_renderSeparator(
              sectionID,
              rowID,
              adjacentRowHighlighted
            )
          }
        />
        <View pointerEvents={"none"} style={styles.dropOverView}>
          <View
            style={{
              flexDirection: "row",
              height: 30,
              alignItems: "center",
              paddingHorizontal: 20
            }}
          >
            <FontAwesome5
              solid
              name="coins"
              style={{ fontSize: 20, color: customColor }}
            />
            <Text
              style={{
                color: customColor,
                marginLeft: 20,
                fontSize: 16,
                width: "80%"
              }}
            >
              {customText}
            </Text>
            <FontAwesome5
              solid
              name="chevron-down"
              style={{
                fontSize: 16,
                color: Colors.malachite,
                marginLeft: 10
              }}
            />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.pickerItem}>
            <RNPickerSelect
              placeholder={{}}
              style={styles}
              value={asset}
              items={this._getTradePickerItems()}
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
          <View style={{ flexDirection: "row", marginLeft: 20 }}>
            <FontAwesome5
              solid
              name="coins"
              style={{ fontSize: 18, color: Colors.malachite }}
            />
            <Text style={[styles.tradeOptionText, { marginLeft: 10 }]}>
              {isBuy ? "$79.15 DX" : "57 STAKES"}
            </Text>
          </View>
        </View>
        {isLimit && (
          <View style={styles.inputViews}>
            <TextInput
              value={limitPrice}
              onChangeText={this._handleLimitPrice}
              style={styles.input1}
              placeholder="LIMIT PRICE"
              placeholderTextColor="#FFF"
              keyboardType="numeric"
            />
            <View
              style={{ height: 40, width: 1, backgroundColor: "#C6C6C6" }}
            />
            <View style={styles.stakeView}>
              <Text style={styles.stakesText}>STAKES</Text>
            </View>
          </View>
        )}
        <View style={styles.inputViews}>
          <TextInput
            value={amount}
            onChangeText={this._handleAmount}
            style={styles.input1}
            placeholder="AMOUNT"
            placeholderTextColor="#FFF"
            keyboardType="numeric"
          />
          <View style={{ height: 40, width: 1, backgroundColor: "#C6C6C6" }} />
          <View style={styles.stakeView}>
            <Text style={styles.stakesText}>STAKES</Text>
          </View>
        </View>

        <View style={styles.inputViews}>
          <TextInput
            editable={false}
            value={total}
            onChangeText={this._handleTotal}
            style={styles.input1}
            keyboardType="numeric"
            placeholderTextColor="#FFF"
            placeholder={isLimit ? "TOTAL" : "ESTIMATED TOTAL"}
          />
          <View style={{ height: 40, width: 1, backgroundColor: "#C6C6C6" }} />
          <View style={styles.stakeView}>
            <Text style={styles.stakesText}>STAKES</Text>
          </View>
        </View>
        <View style={{ marginTop: 20, marginLeft: 15 }}>
          <Text style={styles.exchangeFeeText}>
            Exchange Fee
            <Text style={styles.exchangeFeeText1}> 2%</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.roundButton}
          activeOpacity={0.8}
          onPress={this.props.onPressed}
        >
          <Text style={styles.roundButtonText}>CONFIRM</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
