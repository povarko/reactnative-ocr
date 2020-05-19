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
import reactotron from "reactotron-react-native";
import ModalDropdown from "react-native-modal-dropdown";

const TRADE_PICKER_DATA1 = [
  "LTD EDITION: 10",
  "GOLD STAKES: 20",
  "SILVER STAKES: 20",
  "BRONZE STAKES: 20"
];
const TRADE_COLOR = [Colors.malachite, "gold", "silver", "#CD7F32"];

const TRADE_PICKER_DATA = [
  { name: "LTD EDITION: 10", color: Colors.malachite },
  { name: "GOLD STAKES: 20", color: "gold" },
  { name: "SILVER STAKES: 20", color: "silver" },
  { name: "BRONZE STAKES: 20", color: "#cd7f32" }
];

const dummyData = [
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "SELL",
    amount: 3,
    price: 79.89,
    total: 7899.89,
    status: "CANCELLED"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "LMT BUY",
    amount: 6,
    price: 79.89,
    total: 7899.89,
    status: "FILLED"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "SELL",
    amount: 3,
    price: 79.89,
    total: 7899.89,
    status: "CANCELLED"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "LMT BUY",
    amount: 6,
    price: 79.89,
    total: 7899.89,
    status: "FILLED"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "LMT BUY",
    amount: 6,
    price: 79.89,
    total: 7899.89,
    status: "FILLED"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "SELL",
    amount: 3,
    price: 79.89,
    total: 7899.89,
    status: "CANCELLED"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "LMT BUY",
    amount: 6,
    price: 79.89,
    total: 7899.89,
    status: "FILLED"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "SELL",
    amount: 3,
    price: 79.89,
    total: 7899.89,
    status: "CANCELLED"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "LMT BUY",
    amount: 6,
    price: 79.89,
    total: 7899.89,
    status: "FILLED"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  },
  {
    time: "2019-11-26 2:45:21",
    type: "BUY",
    amount: 23,
    price: 79.89,
    total: 7899.89,
    status: "OPEN"
  }
];

export default class ExchangeOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: null,
      activeTab: "All",
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

  handleSelectTab = tab => {
    this.setState({ activeTab: tab });
  };

  _getTradePickerItems() {
    return TRADE_PICKER_DATA.map(item => ({
      label: item.name.toUpperCase(),
      value: item.name
    }));
  }

  filterData() {
    const { activeTab } = this.state;
    if (activeTab.toLowerCase() === "all") {
      return dummyData;
    } else {
      return dummyData.filter(
        val => val.status.toLowerCase() == activeTab.toLowerCase()
      );
    }
  }

  updatePickerStyles() {
    const { asset } = this.state;
    if (asset == "GOLD STAKES: 20") {
      return {
        ...styles,
        inputIOS: { ...styles.inputIOS, color: "gold" },
        inputAndroid: { ...styles.inputAndroid, color: "gold" }
      };
    }
    if (asset == "SILVER STAKES: 20") {
      return {
        ...styles,
        inputIOS: { ...styles.inputIOS, color: "silver" },
        inputAndroid: { ...styles.inputAndroid, color: "silver" }
      };
    }
    if (asset == "BRONZE STAKES: 20") {
      return {
        ...styles,
        inputIOS: { ...styles.inputIOS, color: "#cd7f32" },
        inputAndroid: { ...styles.inputAndroid, color: "#cd7f32" }
      };
    }
    return styles;
  }

  renderAssetIcon() {
    const asset = this.state.asset;
    const activeAsset = TRADE_PICKER_DATA.find(val => val.name === asset);
    return (
      <FontAwesome5
        solid
        name="coins"
        style={{
          fontSize: 18,
          color: activeAsset ? activeAsset.color : Colors.malachite
        }}
      />
    );
  }

  renderItem = ({ item, index }) => {
    const statusColor =
      item.status === "OPEN"
        ? { color: "#FFF" }
        : item.status === "CANCELLED"
        ? { color: "#FF6200" }
        : { color: Colors.malachite };

    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.tagItemView}>
          <Text style={[styles.tagViewText, { width: "25%" }]}>
            {item.time}
          </Text>
          <Text style={[styles.tagViewText, { width: "13%" }]}>
            {item.type}
          </Text>
          <Text
            style={[
              styles.tagViewText,
              { width: "8%", color: Colors.malachite }
            ]}
          >
            {item.amount}
          </Text>
          <Text style={[styles.tagViewText, { width: "13%" }]}>
            ${item.price}
          </Text>
          <Text style={[styles.tagViewText, { width: "20%" }]}>
            ${item.total}
          </Text>
          <Text style={[styles.tagViewText, statusColor, { width: "20%" }]}>
            {item.status}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { asset, selectedIndex, activeTab } = this.state;
    const filteredData = this.filterData();
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
          <View style={styles.tagtopView}>
            <TouchableOpacity
              onPress={() => this.handleSelectTab("ALL")}
              style={[{ width: "15%" }, styles.tabView]}
            >
              <View
                style={[styles.tab, activeTab == "All" && styles.activeTab]}
              >
                <Text style={[styles.filter]}>ALL</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.handleSelectTab("Open")}
              style={[{ width: "20%" }, styles.tabView]}
            >
              <View
                style={[styles.tab, activeTab == "Open" && styles.activeTab]}
              >
                <Text style={[styles.filter]}>Open</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.handleSelectTab("Filled")}
              style={[{ width: "16%" }, styles.tabView]}
            >
              <View
                style={[styles.tab, activeTab == "Filled" && styles.activeTab]}
              >
                <Text style={[styles.filter]}>FILLED</Text>
              </View>
            </TouchableOpacity>

            <FontAwesome5
              regular
              name="chevron-down"
              style={{ fontSize: 12, color: "#FFF" }}
            />
          </View>
          <View style={styles.tagView}>
            <Text style={[styles.filter, { width: "22%" }]}>DATE/TIME</Text>
            <Text style={[styles.filter, { width: "15%" }]}>TYPE</Text>
            <FontAwesome5
              solid
              name="coins"
              style={{ fontSize: 12, color: Colors.malachite, width: "8%" }}
            />
            <Text style={[styles.filter, { width: "15%" }]}>PRICE</Text>
            <Text style={[styles.filter, { width: "20%" }]}>TOTAL</Text>
            <Text style={[styles.filter, { width: "20%" }]}>STATUS</Text>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              data={filteredData}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          </View>
        </View>
      </View>
    );
  }
}
