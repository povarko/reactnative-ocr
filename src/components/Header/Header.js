import React, { Component } from "react";
import { View, TouchableOpacity, Image, TextInput } from "react-native";
import { Images, Icons } from "@AppTheme";
import styles from "./styles";
import { Amount, Text } from "@AppComponents";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    simple: PropTypes.bool,
    style: PropTypes.object,
    amountProps: PropTypes.object,
    hideHeaderLeft: PropTypes.bool,
    hideHeaderRight: PropTypes.bool,
    onBackPress: PropTypes.func,
    navigation: PropTypes.object.isRequired
  };

  static defaultProps = {
    title: "PORTFOLIO",
    simple: false,
    hideHeaderLeft: false,
    hideHeaderRight: false
  };

  renderTitle() {
    const {
      TitleComponent,
      title,
      amountProps,
      simple,
      hideAmount
    } = this.props;

    if (TitleComponent) return <TitleComponent />;
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {!simple && amountProps && <Text style={styles.title}>: </Text>}
        {!simple && amountProps && (
          <Amount
            style={styles.amount}
            decimalStyle={styles.amountDecimal}
            {...amountProps}
          />
        )}
      </View>
    );
  }

  _handleBackPress = () => {
    const { navigation, onBackPress } = this.props;
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  render() {
    const { hideHeaderLeft, hideHeaderRight, simple, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        {!hideHeaderLeft && (
          <TouchableOpacity
            style={{ position: "absolute", left: 24, top: 24 }}
            onPress={this._handleBackPress}
          >
            <Image source={Icons.back} />
          </TouchableOpacity>
        )}
        {!hideHeaderRight && (
          <TouchableOpacity>
            <Image
              style={styles.menuIcon}
              source={Icons.menu}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
        <Image
          source={Images.logo}
          style={styles.logo}
          resizeMode={"contain"}
        />
        {this.renderTitle()}
        {!simple && (
          <View style={styles.searchBar}>
            <Image
              source={Icons.search}
              resizeMode="contain"
              style={{ width: 14, height: 14 }}
            />
            <TextInput
              style={styles.searchInput}
              textAlignVertical="center"
              placeholder="Search"
              underlineColorAndroid="transparent"
              placeholderTextColor="rgba(255,255,255,0.5)"
            />
          </View>
        )}
      </View>
    );
  }
}

export default withNavigation(Header);
