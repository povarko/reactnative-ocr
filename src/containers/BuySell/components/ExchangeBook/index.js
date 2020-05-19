import React from "react";
import {
  View,
  Image,
  ScrollView,
  FlatList,
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

const dummyData = [
  { total: 0.0987568, amount: 0.03429875, price: 78.89 },
  { total: 0.0987568, amount: 0.03429875, price: 78.89 },
  { total: 0.0987568, amount: 0.03429875, price: 78.89 },
  { total: 0.0987568, amount: 0.03429875, price: 78.89 },
  { total: 0.0987568, amount: 0.03429875, price: 78.89 },
  { total: 0.0987568, amount: 0.03429875, price: 78.89 },
  { total: 0.0987568, amount: 0.03429875, price: 78.89 },
  { total: 0.0987568, amount: 0.03429875, price: 78.89 },
  { total: 0.0987568, amount: 0.03429875, price: 78.89 }
];

export default class ExchangeBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: null,
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

  _handleSelectAsset = value => {
    this.setState({ asset: value });
  };
  _getTradePickerItems() {
    return TRADE_PICKER_DATA.map(item => ({
      label: item.toUpperCase(),
      value: item
    }));
  }
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.tagItemView}>
          <Text style={[styles.tagViewText, { width: "35%" }]}>
            {item.total}
          </Text>
          <Text style={[styles.tagViewText, { width: "40%" }]}>
            {item.amount}
          </Text>
          <Text
            style={[
              styles.tagViewText,
              { width: "25%", color: Colors.malachite }
            ]}
          >
            ${item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { asset, selectedIndex } = this.state;
    const customColor = TRADE_COLOR[selectedIndex];
    const customText = TRADE_PICKER_DATA1[selectedIndex];
    return (
      <View
        style={{
          backgroundColor: "#000",
          marginTop: 20,
          paddingHorizontal: 15,
          height: "92%"
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
        <View style={{ flex: 1, marginBottom: 0 }}>
          <View style={styles.tagView}>
            <Text style={[styles.tagViewText, { width: "35%" }]}>
              TOTAL: <Text style={{ fontFamily: "Rajdhani-Bold" }}>DX</Text>
            </Text>
            <Text style={[styles.tagViewText, { width: "40%" }]}>AMOUNT</Text>
            <Text style={[styles.tagViewText, { width: "25%" }]}>PRICE</Text>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              data={dummyData}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          </View>
          <View style={styles.tagView}>
            <Text
              style={[
                styles.tagViewText,
                { width: "35%", fontFamily: "Rajdhani-Bold" }
              ]}
            >
              DX <Text style={styles.tagViewText}>SPREAD</Text>
            </Text>
            <Text style={[styles.tagViewText, { width: "40%" }]} />
            <Text
              style={[
                styles.tagViewText,
                { width: "25%", fontFamily: "Rajdhani-Bold" }
              ]}
            >
              0.01
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              data={dummyData}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          </View>
          <View style={styles.tagView}>
            <Text
              style={[
                styles.tagViewText,
                { width: "35%", fontFamily: "Rajdhani-Bold" }
              ]}
            >
              AGGREGATION
            </Text>
            <Text style={[styles.tagViewText, { width: "40%" }]} />
            <Text
              style={[
                styles.tagViewText,
                { width: "25%", fontFamily: "Rajdhani-Bold" }
              ]}
            >
              0.01
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
