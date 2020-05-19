import React, { PureComponent } from "react";
import { View, TouchableOpacity, ScrollView, Image } from "react-native";
import { Text, Amount } from "@AppComponents";
import { Icons } from "@AppTheme";
import RNPickerSelect from "react-native-picker-select";
import PropTypes from "prop-types";
import styles from "./styles";

class Selection extends PureComponent {
  static propTypes = {
    assets: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    getActiveAsset: PropTypes.func.isRequired
  };

  state = {
    pickerValue: null,
    asset: this._getInitialAsset()
  };

  componentDidMount() {
    this.props.getActiveAsset(this._getInitialAsset());
  }

  _getInitialAsset() {
    const { assets, type } = this.props;
    if (type == "firstAsset") return assets[0];
    return assets[assets.length - 1];
  }

  _updateActiveAsset(asset) {
    const { type, getActiveAsset } = this.props;
    type === "firstAsset" && getActiveAsset(asset);
  }

  _handleSelectAsset = value => {
    const { assets, getActiveAsset } = this.props;
    const selected = assets.find(asset => {
      let symbol = asset.symbol || asset.tickerSymbol;
      return symbol == value;
    });
    this.setState({ pickerValue: value, asset: selected });
    getActiveAsset(selected);
  };

  _getPickerItems() {
    let { assets, type } = this.props;
    assets = assets.map(asset => ({
      value: asset.symbol || asset.tickerSymbol,
      label: asset.symbol || asset.tickerSymbol
    }));
    if (type === "secondAsset") assets = assets.reverse();
    return assets;
  }

  _getImageSource() {
    let { asset } = this.state;
    return asset.image;
  }

  _renderTitle() {
    const { type } = this.props;
    const { asset } = this.state;

    if (type === "firstAsset") {
      // Identifies a player from a team
      if (asset.stats && asset.stats.age) {
        return (
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { fontFamily: "Rajdhani-Medium" }]}>
              TRADE{" "}
            </Text>
            <Text style={styles.title}>ATHLETE</Text>
          </View>
        );
      }
      return (
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { fontFamily: "Rajdhani-Medium" }]}>
            TRADE{" "}
          </Text>
          <Text style={styles.title}>TEAM</Text>
        </View>
      );
    } else {
      if (asset.stats && asset.stats.age) {
        return (
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { fontFamily: "Rajdhani-Medium" }]}>
              FOR{" "}
            </Text>
            <Text style={styles.title}>ATHLETE</Text>
          </View>
        );
      }
      return (
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { fontFamily: "Rajdhani-Medium" }]}>
            FOR{" "}
          </Text>
          <Text style={styles.title}>TEAM</Text>
        </View>
      );
    }
  }

  render() {
    const { pickerValue, asset } = this.state;
    const { type } = this.props;

    return (
      <View
        style={[
          styles.content,
          { backgroundColor: type == "firstAsset" ? "#F4F4F4" : "#FFF" }
        ]}
      >
        <View style={{ marginBottom: 10 }}>{this._renderTitle()}</View>
        <RNPickerSelect
          placeholder={{}}
          style={styles}
          value={pickerValue}
          items={this._getPickerItems()}
          useNativeAndroidPickerStyle={false}
          onValueChange={this._handleSelectAsset}
          Icon={() => (
            <Image
              style={{ width: 15, height: 15 }}
              source={Icons.chevronDown}
            />
          )}
        />

        <View style={{ marginTop: 12, alignItems: "center" }}>
          <View style={styles.avatarContainer}>
            <Image
              source={asset.image}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.name}>{asset.name}</Text>
          <Text style={styles.symbol}>
            {asset.symbol || asset.tickerSymbol}
          </Text>
          <Amount style={styles.price} value={Number(asset.price)} unit="$" />
          <Text style={styles.status}>AVAILABLE</Text>
          <Text style={styles.total}>
            {asset.symbol || asset.tickerSymbol} 5,270.0017
          </Text>
        </View>
      </View>
    );
  }
}

export default class Trade extends PureComponent {
  static propTypes = {
    athletes: PropTypes.array.isRequired,
    teams: PropTypes.array.isRequired
  };

  state = {
    firstAsset: {},
    secondAsset: {}
  };

  _getFirstAsset = asset => {
    this.setState({ firstAsset: asset });
  };

  _getSecondAsset = asset => {
    this.setState({ secondAsset: asset });
  };

  _getAssets = () => {
    const { athletes, teams } = this.props;
    return [...athletes, ...teams];
  };

  render() {
    const { firstAsset, secondAsset } = this.state;
    const assets = this._getAssets();

    return (
      <>
        <View style={styles.imageHeader}>
          <View style={[styles.avatarContainer, { borderWidth: 0 }]}>
            <Image
              source={firstAsset.image}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.imageHeaderTitle}>FOR</Text>
          <View style={styles.avatarContainer}>
            <Image
              source={secondAsset.image}
              style={[styles.avatar, { width: 75, height: 75 }]}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView bounces={false}>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Selection
                type="firstAsset"
                assets={assets}
                getActiveAsset={this._getFirstAsset}
              />
              <Selection
                type="secondAsset"
                assets={assets}
                getActiveAsset={this._getSecondAsset}
              />
            </View>
            <View style={styles.footer}>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.lightButton}>
                  <Text style={styles.buttonTextDark}>
                    {firstAsset.symbol || firstAsset.tickerSymbol} to TRADE
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>TRADE</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.triangle} />
        </View>
      </>
    );
  }
}
