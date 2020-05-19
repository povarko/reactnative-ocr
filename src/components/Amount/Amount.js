import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { floor } from "lodash";
import { Text } from "../Text";
import styles from "./styles";

class AmountComponent extends Component {
  _getValue = () => {
    const fixNum = this.props.fixNum ? this.props.fixNum : 2;
    return this.props.value.toFixed(fixNum);
  };

  _getWholePart = () => {
    const { unit } = this.props;
    const value = this._getValue();
    const valueString = value.toString();
    const dotPos = valueString.indexOf(".");

    if (valueString == 0) return unit + 0;
    return (
      unit + valueString.slice(0, dotPos).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };

  _getDecimalePart = () => {
    const value = this._getValue();
    const valueString = value.toString();
    const dotPos = valueString.indexOf(".");
    if (dotPos < 0) return null;
    return valueString.slice(dotPos + 1);
  };

  render() {
    const { style = {}, decimalStyle = {}, dotStyle } = this.props;
    const wholeString = this._getWholePart();
    const decimalString = this._getDecimalePart();

    // Always have the fontSize for whole and decimal values.
    if (style.fontSize) decimalString.fontSize = style.fontSize;

    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.text, style]}>{wholeString}</Text>
        {decimalString && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.dot, style, dotStyle]}>.</Text>
            <Text style={[styles.decimal, style, decimalStyle]}>
              {decimalString}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

AmountComponent.propTypes = {
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  style: PropTypes.any,
  decimalStyle: PropTypes.any,
  dotStyle: PropTypes.any
};

export default AmountComponent;
