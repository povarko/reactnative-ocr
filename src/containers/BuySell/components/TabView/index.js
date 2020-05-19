import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import { Text, Button } from "@AppComponents";
import { Colors } from "@AppTheme";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Amount } from "@AppComponents";
import PropTypes from "prop-types";
import styles from "./styles";

export default class TabContent extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    activeTab: PropTypes.number.isRequired
  };

  state = {
    activeItemIndex: 0,
    inputAmount: null
  };

  _handleItemPress = index => {
    this.setState({ activeItemIndex: index });
  };

  _handleInputChange = value => {
    if (!isNaN(value)) {
      this.setState({ inputAmount: value });
    }
  };

  _handleTrade = () => {
    this.props.tradeAction();
  };

  _handleBuy = () => {
    this.props.buyAction(true);
  };

  _handleSell = () => {
    this.props.buyAction(false);
  };

  _getTotal(price) {
    const { inputAmount } = this.state;
    if (inputAmount == null) return 0;
    return price * inputAmount;
  }

  _hasSellInputError() {
    const { data, activeTab } = this.props;
    const { activeItemIndex, inputAmount } = this.state;
    const activeData = data[activeItemIndex];

    if (activeTab !== 1) return false;
    return inputAmount > activeData.total;
  }

  renderItem = ({ item, index }) => {
    const onPress = () => this._handleItemPress(index);
    const { activeItemIndex } = this.state;

    item.tickerPrice = 88.9815; // Placeholder

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View
          style={[
            styles.tabItem,
            activeItemIndex !== index && { backgroundColor: "#000" }
          ]}
        >
          <Image source={item.image} style={styles.tabItemImage} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.tabItemName}>{item.symbol}: </Text>
            <Text style={styles.tabItemTitle}>
              {parseInt(item.tickerPrice)}
            </Text>
            <Text style={styles.tabItemPrice}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  renderActionButton = () => {
    const { activeTab } = this.props;
    const sellBgColor = this._hasSellInputError()
      ? Colors.darkBackgroundColor
      : "#ff6200";

    if (activeTab == 0) {
      return (
        <Button style={styles.button} title="BUY" onPress={this._handleBuy} />
      );
    }
    return (
      <Button
        title="SELL"
        onPress={this._handleSell}
        style={[styles.button, { backgroundColor: sellBgColor }]}
      />
    );
  };

  render() {
    let { data, activeTab } = this.props;
    // Placeholder data
    data = data.map(itm => ({
      ...itm,
      total: 88.9815,
      tickerPrice: 90
    }));

    const { activeItemIndex, inputAmount } = this.state;
    const activeData = data[activeItemIndex];
    const inputTextStyle = { color: "#FFF", padding: 0 };

    if (this._hasSellInputError()) {
      inputTextStyle.color = "red";
    }

    return (
      <View style={{ flexDirection: "row", backgroundColor: "#000", flex: 1 }}>
        <View>
          <FlatList
            data={data}
            onPressItem={() => {}}
            keyExtractor={item => item.name}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.readMoreView,
              activeTab == 1 && { backgroundColor: "#ff6200" }
            ]}
          >
            <FontAwesome5
              solid
              name="chevron-down"
              style={{
                fontSize: 16,
                color: "#FFF"
              }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{ backgroundColor: Colors.darkBackgroundColor, padding: 10 }}
          vertical={true}
          // contentContainerStyle={styles.activeItemContainer}
        >
          <View>
            <Text style={styles.activeItemTitle}>
              YOUR{" "}
              <Text style={styles.activeItemSymbol}>{activeData.symbol}:</Text>
            </Text>
            <Text style={styles.activeItemValue}>
              {parseInt(activeData.total)}
            </Text>
            {/**
            <Amount
              value={activeData.total}
              unit=""
              fixNum={4}
              style={styles.activeItemValue}
              decimalStyle={styles.amountDecimal}
            /> */}
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={[styles.activeItemTitle]}>TRADING PRICE:</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Amount
                value={65.22}
                fixNum={2}
                unit="$"
                style={styles.activeItemValue}
                decimalStyle={styles.amountDecimal}
              />
              <Text style={[styles.activeItemValue]}>
                /{activeData.symbol}:
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 4, marginTop: 20 }}>
            <Text style={[styles.activeItemTitle]}>
              AMOUNT OF {activeData.symbol}
            </Text>
            <TextInput
              placeholderTextColor="#FFF"
              placeholder="Enter amount"
              keyboardType="decimal-pad"
              onChangeText={this._handleInputChange}
              value={inputAmount}
              style={[styles.input, inputTextStyle]}
            />
          </View>
          <View style={{ marginVertical: 14, marginTop: 20 }}>
            <Text style={[styles.activeItemTitle]}>TOTAL DUE:</Text>
            <Amount
              value={this._getTotal(activeData.price)}
              unit="$"
              style={styles.amount}
              decimalStyle={styles.amount}
            />
          </View>
          {this.renderActionButton()}
          <Button
            style={[styles.button, { marginTop: 20, marginBottom: 30 }]}
            title="TRADE"
            onPress={this._handleTrade}
          />
        </ScrollView>
      </View>
    );
  }
}
