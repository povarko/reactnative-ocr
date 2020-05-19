import React from "react";
import {
  View,
  Image,
  ScrollView,
  processColor,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import { Colors, Icons, Images } from "@AppTheme";
import styles from "./styles";
import { TICKER_DATA } from "../../../../components/performaceView/dummy";
import lionelMessi from "@Assets/athletes/Lionel_Messi";
import BasicLineChart from "../../components/BasicLineChart";
import BasicLineChart1 from "../../components/BasicLineChart1";
import ModalDropdown from "react-native-modal-dropdown";

const TRADE_PICKER_DATA = [
  "LTD EDITION: 10",
  "GOLD STAKES: 20",
  "SILVER STAKES: 20",
  "BRONZE STAKES: 20"
];

const TRADE_COLOR = [Colors.malachite, "gold", "silver", "#CD7F32"];

const data2 = {
  dataSets: [
    {
      values: [
        2,
        15,
        14,
        13,
        15,
        11,
        14,
        12,
        7,
        10,
        9,
        10,
        9,
        10,
        5,
        4,
        6,
        4,
        12,
        4
      ],
      label: "A",
      config: {
        color: processColor("#F00"),
        circleRadius: 0
      }
    },
    {
      values: [
        10,
        12,
        12,
        15,
        14,
        5,
        9,
        10,
        5,
        4,
        6,
        4,
        7,
        8,
        8,
        7,
        6,
        12,
        15,
        10,
        12
      ],
      label: "B",
      config: {
        color: processColor("#0F0"),
        circleRadius: 0
      }
    }
  ]
};

class ExchangeBasicScreen extends React.Component {
  constructor(props) {
    super(props);

    let tmpData = TICKER_DATA[0];
    tmpData.data = lionelMessi;
    this.state = {
      detailData: tmpData,
      selectedIndex: 0,
      asset: null
    };
  }

  _handlePressRightMark() {}

  _handleSelectAsset = value => {
    this.setState({ asset: value });
  };

  _gettmp() {
    return (
      <View>
        <Text>text</Text>
      </View>
    );
  }
  _getTradePickerItems() {
    return TRADE_PICKER_DATA.map(item => ({
      label: item.name.toUpperCase(),
      value: item.name
    }));
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

  renderCandleChart() {
    return (
      <View style={{ height: 250 }}>
        <Text style={styles.subTitle}>CANDLE CHART</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.timetext}>07 JUNE 2019 THRU 07 AUG 19</Text>
          <View
            style={{
              width: 70,
              height: 24,
              borderRadius: 12,
              backgroundColor: Colors.malachite,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5
            }}
          >
            <Text style={[styles.confirmtext, { fontSize: 10 }]}>+27.25%</Text>
          </View>
        </View>
        {/* <BasicLineChart1 /> */}
        <BasicLineChart
          style={styles.graph}
          gradientColor="#00ACEE"
          graphData={data2}
        />
      </View>
    );
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
            paddingHorizontal: 20
          }}
        >
          <FontAwesome5
            solid
            name="coins"
            style={{ fontSize: 20, color: customColor }}
          />
          <Text
            style={{ color: customColor, marginLeft: 10, fontSize: 16 }}
          >{`${rowData}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  _dropdown_2_renderButtonText(rowData) {
    return `${rowData}`;
  }
  _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    if (rowID == TRADE_PICKER_DATA.length - 1) return;
    // let key = `spr_${rowID}`;
    return <View style={styles.dropdown_2_separator} />;
  }
  _dropdown_2_onSelect(idx, value) {
    this.setState({ selectedIndex: idx });
  }
  render() {
    const { detailData, asset, selectedIndex } = this.state;
    const customColor = TRADE_COLOR[selectedIndex];
    const customText = TRADE_PICKER_DATA[selectedIndex];
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 0.9 }}
          >
            <Image
              source={detailData.image}
              style={styles.photo}
              resizeMode={"cover"}
            />
            <View style={{ flex: 1, marginLeft: 4 }}>
              <Text style={styles.stakeValue}>{detailData.data.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.stake}>
                  Stakes:{" "}
                  <Text style={styles.stakeValue}>
                    {detailData.data.quantity}
                  </Text>
                </Text>

                <Text style={[styles.stake, { marginLeft: 15 }]}>
                  Value:{" "}
                  <Text style={styles.stakeValue}>
                    {detailData.data.currency}
                    {detailData.data.price}
                  </Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 0.1, alignItems: "flex-end" }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressRightMark()}
            >
              <Image source={Icons.rightMenu} style={styles.rightMenu} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: "#000", flex: 1, padding: 20 }}>
          <ScrollView style={{ flex: 1 }}>
            {this.renderCandleChart()}
            <View style={{ marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Text style={[styles.subTitle, { color: "#FFF" }]}>
                  LIOMES-DX
                </Text>
                <ModalDropdown
                  ref="dropdown_2"
                  style={styles.dropdown_2}
                  textStyle={styles.dropdown_2_text}
                  dropdownStyle={styles.dropdown_2_dropdown}
                  options={TRADE_PICKER_DATA}
                  defaultValue="select"
                  onSelect={(idx, value) =>
                    this._dropdown_2_onSelect(idx, value)
                  }
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
              </View>
              <View pointerEvents={"none"} style={styles.dropOverView}>
                <View
                  style={{
                    flexDirection: "row",
                    height: 30,
                    alignItems: "center",
                    paddingHorizontal: 10
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
                      marginLeft: 10,
                      fontSize: 16,
                      width: 130
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={[styles.subTitle, { color: "#FFF", fontSize: 42 }]}
                >
                  BUY
                </Text>
                <FontAwesome5
                  solid
                  name="chevron-down"
                  style={{
                    fontSize: 26,
                    color: Colors.malachite,
                    marginLeft: 30
                  }}
                />
              </View>
              <View>
                <Text
                  style={[styles.subTitle, { color: "#FFF", fontSize: 42 }]}
                >
                  AMOUNT
                </Text>
                <TouchableOpacity>
                  <Text
                    style={[styles.subTitle, { color: "#FFF", fontSize: 42 }]}
                  >
                    TOTAL
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 140,
                    height: 35,
                    borderRadius: 25,
                    backgroundColor: Colors.malachite,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Text style={styles.confirmtext}>CONFIRM</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: 1,
                    borderColor: Colors.malachite,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("ExchangeAdvanced")
                  }
                >
                  <Text style={styles.tradingtext}>ADVANCED TRADING</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

ExchangeBasicScreen.propTypes = {};
export default ExchangeBasicScreen;
