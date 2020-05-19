import React from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, Button } from "@AppComponents";
import { Colors, Icons } from "@AppTheme";
import styles from "./styles";

export default class ExchangeTradeNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBuy: true,
      isLimit: true
    };
  }
  _handlePressTab = isLimit => {
    this.setState({ isLimit: isLimit });
  };
  _handlePressBuySell = isBuy => {
    this.setState({ isBuy: isBuy });
    if (this.state.isLimit) {
      this.props.onPressedOrder();
    } else {
    }
  };
  _renderTab() {
    const { isLimit } = this.state;
    return (
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, !isLimit && styles.tabActive]}
          onPress={() => this._handlePressTab(false)}
          activeOpacity={0.8}
        >
          <Text
            style={[styles.tabHeaderTitle, isLimit && { color: "#FFFFFF60" }]}
          >
            MARKET ORDER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, isLimit && styles.tabActive]}
          onPress={() => this._handlePressTab(true)}
          activeOpacity={0.8}
        >
          <Text
            style={[styles.tabHeaderTitle, !isLimit && { color: "#FFFFFF60" }]}
          >
            LIMIT ORDER
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  _renderLimitOrderContents() {
    const { isBuy } = this.state;
    const { detailData } = this.props;
    return (
      <View style={styles.contents}>
        <View style={styles.orderType}>
          <TouchableOpacity
            style={styles.orderTypeView}
            onPress={() => this._handlePressBuySell(true)}
            activeOpacity={0.8}
          >
            <FontAwesome5
              regular
              name="donate"
              style={[
                { fontSize: 36, color: Colors.gray },
                isBuy && { color: Colors.malachite }
              ]}
            />
            <Text
              style={[
                styles.textBold,
                { color: Colors.gray, marginTop: 10 },
                isBuy && { color: "#FFF" }
              ]}
            >
              BUY
            </Text>
          </TouchableOpacity>
          <View style={styles.divideVertical} />
          <TouchableOpacity
            style={styles.orderTypeView}
            onPress={() => this._handlePressBuySell(false)}
            activeOpacity={0.8}
          >
            <FontAwesome5
              regular
              name="coins"
              style={[
                { fontSize: 36, color: Colors.gray },
                !isBuy && { color: Colors.malachite }
              ]}
            />
            <Text
              style={[
                styles.textBold,
                { color: Colors.gray, marginTop: 10 },
                !isBuy && { color: "#FFF" }
              ]}
            >
              SELL
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.textRegular}>
            Your {detailData.symbol}:{" "}
            <Text style={styles.textValueBold}>{detailData.quantity}</Text>
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.textRegular}>
              Market Price:{" "}
              <Text style={styles.textValueBold}>
                {detailData.currency}
                {detailData.price}/{detailData.symbol}
              </Text>
            </Text>
          </View>
        </View>
        <Button
          style={styles.button}
          textStyle={styles.buttonLabel}
          title="TRADE"
          onPress={this.props.onPressed}
        />
        <View style={{ marginTop: 20 }}>
          <Text style={styles.textRegular}>Pending Orders</Text>
        </View>
        <View style={styles.divideHorizontal} />
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.tabHeaderTitle}>Limit Sell</Text>
          <Text style={styles.textValueBold}>Queued</Text>
        </View>
        <View
          style={{
            marginTop: 5,
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.textRegular14}>Submitted on Dec 2, 2019</Text>
          <Text style={styles.textRegular14}>1 Stake at $9.00</Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <ScrollView style={styles.scrollViewStyle}>
        {this._renderTab()}
        {this._renderLimitOrderContents()}
      </ScrollView>
    );
  }
}
