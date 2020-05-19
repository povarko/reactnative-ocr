import React from "react";
import {
  View,
  Image,
  ScrollView,
  processColor,
  TouchableOpacity
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import { Colors, Icons } from "@AppTheme";
import CandleStickChart from "../CandleChart";
import styles from "./styles";
import CandleChart from "../CandleChart";
import ModalDropdown from "react-native-modal-dropdown";

const TRADE_PICKER_DATA1 = [
  "LTD EDITION: 10",
  "GOLD STAKES: 20",
  "SILVER STAKES: 20",
  "BRONZE STAKES: 20"
];
const TRADE_COLOR = [Colors.malachite, "gold", "silver", "#CD7F32"];

const legend = {
  enabled: true,
  textSize: 14,
  form: "CIRCLE",
  wordWrapEnabled: true
};
const data = {
  dataSets: [
    {
      values: [
        { shadowH: 101.76, shadowL: 100.4, open: 100.78, close: 101.03 },
        { shadowH: 101.58, shadowL: 100.27, open: 101.31, close: 101.12 },
        { shadowH: 102.24, shadowL: 100.15, open: 101.41, close: 101.17 },
        { shadowH: 102.28, shadowL: 101.5, open: 102.24, close: 102.23 },
        { shadowH: 102.91, shadowL: 101.78, open: 101.91, close: 102.52 },
        { shadowH: 105.18, shadowL: 103.85, open: 103.96, close: 104.58 },
        { shadowH: 106.31, shadowL: 104.59, open: 104.61, close: 105.97 },
        { shadowH: 106.47, shadowL: 104.96, open: 105.52, close: 105.8 },
        { shadowH: 106.5, shadowL: 105.19, open: 106.34, close: 105.92 },
        { shadowH: 107.65, shadowL: 105.1401, open: 105.93, close: 105.91 },
        { shadowH: 107.29, shadowL: 105.21, open: 105.25, close: 106.72 },
        { shadowH: 107.07, shadowL: 105.9, open: 106.48, close: 106.13 },
        { shadowH: 106.25, shadowL: 104.89, open: 105.47, close: 105.67 },
        { shadowH: 106.19, shadowL: 105.06, open: 106, close: 105.19 },
        { shadowH: 107.79, shadowL: 104.88, open: 104.89, close: 107.7 }
      ],
      label: "AAPL",
      config: {
        highlightColor: processColor("darkgray"),

        shadowColor: processColor("black"),
        shadowWidth: 1,
        shadowColorSameAsCandle: true,
        increasingColor: processColor("#71BD6A"),
        increasingPaintStyle: "FILL",
        decreasingColor: processColor("#D14B5A"),
        neutralColor: processColor("#FFF")
      },
      xAxis: {
        axisLineColor: processColor("#FFF"),
        textColor: processColor("#FFF")
      },
      yAxis: {
        axisLineColor: processColor("#FFF"),
        textColor: processColor("#FFF")
      }
    }
  ]
};
const marker = {
  enabled: true,
  markerColor: processColor("white"),
  textColor: processColor("white")
};
const zoomXValue = 0;

export default class ExchangeChart extends React.Component {
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
  render() {
    const { asset, selectedIndex } = this.state;
    const customColor = TRADE_COLOR[selectedIndex];
    const customText = TRADE_PICKER_DATA1[selectedIndex];
    return (
      <ScrollView
        style={{
          backgroundColor: "#000",
          marginTop: 10,
          paddingHorizontal: 15,
          paddingBottom: 100
        }}
      >
        <View style={styles.content}>
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
          <View style={styles.candleChart}>
            <Text style={styles.graphTitle}>Candle Chart</Text>
            <View style={styles.candleGraphView}>
              <CandleChart
                data={data}
                marker={marker}
                zoomXValue={zoomXValue}
                legend={legend}
              />
            </View>
          </View>
          <View style={[styles.candleChart, { marginTop: -10 }]}>
            <Text style={styles.graphTitle}>Market Depth</Text>
            <View style={styles.candleGraphView}>
              <CandleChart
                data={data}
                marker={marker}
                zoomXValue={zoomXValue}
                legend={legend}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
