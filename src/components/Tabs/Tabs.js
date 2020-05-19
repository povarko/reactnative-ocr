import React, { PureComponent } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@AppComponents";
import { Colors } from "@AppTheme";
import PropTypes from "prop-types";
import styles from "./styles";

export default class Tabs extends PureComponent {
  static propTypes = {
    initialActiveTab: PropTypes.number,
    tabs: PropTypes.array.isRequired
  };

  state = { active: this.props.initialActiveTab || 0 };

  _handleTabPress = index => {
    this.setState({ active: index });
  };

  _getButtonStyle(title) {
    const { tabs, activeTabStyle } = this.props;
    const { active } = this.state;
    const current = tabs[active];
    let borderStyle;

    if (tabs.length > 2) {
      if (active == 0) {
        borderStyle = styles.leftBorder;
      } else if (active == tabs.length - 1) {
        borderStyle = styles.rightBorder;
      }
    }

    if (current.title == title) {
      return {
        button: [styles.tab, { backgroundColor: "#FFF" }, activeTabStyle],
        text: [styles.tabText, { color: Colors.tundora }]
      };
    }
    return {
      button: [styles.tab, borderStyle, { backgroundColor: "#000" }],
      text: [styles.tabText, { color: Colors.malachite }]
    };
  }

  render() {
    const { active } = this.state;
    const { tabs } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          {tabs.map((tab, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={1}
              style={this._getButtonStyle(tab.title).button}
              onPress={() => this._handleTabPress(i)}
            >
              <Text style={this._getButtonStyle(tab.title).text}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {tabs.map((tab, i) => (
          <View key={i}>{active == i ? tab.render(active) : null}</View>
        ))}
      </View>
    );
  }
}
