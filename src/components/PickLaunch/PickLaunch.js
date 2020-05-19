import React, { Component, Fragment } from "react";
import { View, Image, TouchableOpacity, FlatList } from "react-native";
import { Overlay, colors } from "react-native-elements";
import { Text, Button } from "@AppComponents";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Icons, Colors } from "@AppTheme";
import styles from "./styles";
import RNPickerSelect from "react-native-picker-select";

const MONTH_DATA = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
];

export default class PickLaunch extends Component {
  state = {
    isVisible: false,
    year: "2019",
    month: "JAN",
    day: "1",
    hour: "0h"
  };

  toggle = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  onClose = () => {
    const { year, month, day, hour } = this.state;
    let selectedTime = year + "/ " + month + "/ " + day + "/ " + hour;
    this.props.getSelected(selectedTime);
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  _getPickerYears() {
    var years = [];

    for (var i = 19; i <= 30; i++) {
      years.push(i);
    }
    return years.map(item => ({
      label: "20" + item + "",
      value: "20" + item + ""
    }));
  }
  _getPickerMonth() {
    return MONTH_DATA.map(item => ({
      label: item + "",
      value: item + ""
    }));
  }
  _getPickerDay() {
    var days = [];
    for (var i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days.map(item => ({
      label: item + "",
      value: item + ""
    }));
  }
  _getPickerHour() {
    var hours = [];
    for (var i = 0; i < 24; i++) {
      hours.push(i);
    }
    return hours.map(item => ({
      label: item + "h",
      value: item + "h"
    }));
  }

  _handleSelectYear = value => {
    this.setState({ year: value + "" });
  };
  _handleSelectMonth = value => {
    this.setState({ month: value });
  };
  _handleSelectDay = value => {
    this.setState({ day: value + "" });
  };
  _handleSelectHour = value => {
    this.setState({ hour: value + "" });
  };

  render() {
    const { year, month, day, hour } = this.state;
    return (
      <Overlay overlayStyle={styles.container} isVisible={this.state.isVisible}>
        <Fragment>
          <View
            style={{
              backgroundColor: "transparent",
              width: "100%",
              height: 30
            }}
          >
            <View style={{ alignItems: "flex-end", marginRight: 5 }}>
              <TouchableOpacity onPress={() => this.toggle()}>
                <Image source={Icons.cancel} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content}>
            <Image source={Icons.launchIcon} style={styles.circleIcon} />
            <Text style={styles.titleLabel}>SET LAUNCH</Text>
            <Text style={styles.descriptionLabel}>
              All times are given in Johannesburg time.
            </Text>
            <View style={styles.row}>
              <View style={styles.pickerItem}>
                <RNPickerSelect
                  placeholder={{}}
                  style={styles}
                  value={year}
                  items={this._getPickerYears()}
                  useNativeAndroidPickerStyle={false}
                  onValueChange={this._handleSelectYear}
                  Icon={() => (
                    <FontAwesome5
                      solid
                      name="chevron-down"
                      style={{
                        fontSize: 16,
                        color: Colors.malachite,
                        marginTop: 10
                      }}
                    />
                  )}
                />
              </View>
              <View style={styles.pickerItem}>
                <RNPickerSelect
                  placeholder={{}}
                  style={styles}
                  value={month}
                  items={this._getPickerMonth()}
                  useNativeAndroidPickerStyle={false}
                  onValueChange={this._handleSelectMonth}
                  Icon={() => (
                    <FontAwesome5
                      solid
                      name="chevron-down"
                      style={{
                        fontSize: 16,
                        color: Colors.malachite,
                        marginTop: 10
                      }}
                    />
                  )}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.pickerItem}>
                <RNPickerSelect
                  placeholder={{}}
                  style={styles}
                  value={day}
                  items={this._getPickerDay()}
                  useNativeAndroidPickerStyle={false}
                  onValueChange={this._handleSelectDay}
                  Icon={() => (
                    <FontAwesome5
                      solid
                      name="chevron-down"
                      style={{
                        fontSize: 16,
                        color: Colors.malachite,
                        marginTop: 10
                      }}
                    />
                  )}
                />
              </View>
              <View style={styles.pickerItem}>
                <RNPickerSelect
                  placeholder={{}}
                  style={styles}
                  value={hour}
                  items={this._getPickerHour()}
                  useNativeAndroidPickerStyle={false}
                  onValueChange={this._handleSelectHour}
                  Icon={() => (
                    <FontAwesome5
                      solid
                      name="chevron-down"
                      style={{
                        fontSize: 16,
                        color: Colors.malachite,
                        marginTop: 10
                      }}
                    />
                  )}
                />
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <Button
                onPress={this.onClose}
                title="OK"
                style={styles.button}
                textStyle={styles.buttonText}
              />
            </View>
          </View>
        </Fragment>
      </Overlay>
    );
  }
}
