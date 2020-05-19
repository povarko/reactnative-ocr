import React, { Component } from "react";
import { View, TouchableOpacity, Image, TextInput } from "react-native";
import { Images, Icons } from "@AppTheme";
import styles from "./styles";
import { Text } from "@AppComponents";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";

class HeaderBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    onMenuPress: PropTypes.func,
    navigation: PropTypes.object.isRequired
  };

  static defaultProps = {
    title: ""
  };

  render() {
    const { style, title, onMenuPress, menuIcon, navigation } = this.props;

    return (
      <View style={[styles.container, style]}>
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("LockerHome")}
          >
            <Image
              source={Images.logo}
              style={styles.logo}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.8, alignItems: "center", marginTop: 15 }}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={{ flex: 0.1, alignItems: "flex-end", marginTop: 10 }}>
          <TouchableOpacity onPress={onMenuPress}>
            <Image
              style={styles.menuIcon}
              source={menuIcon || Icons.menu}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(HeaderBar);
