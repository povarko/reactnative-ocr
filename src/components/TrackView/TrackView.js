import React, { Component } from "react";
import { View, Image, FlatList, TouchableOpacity } from "react-native";
import { Text, Tabs, Button } from "@AppComponents";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import styles from "./styles";

class Athletes extends Component {
  static propTypes = {
    athletes: PropTypes.array.isRequired
  };

  _handlePressBuy = athlete => {
    const { navigation } = this.props;
    navigation.navigate("BuySellCertificate", {
      data: athlete,
      type: "buy"
    });
  };

  renderItem = ({ item, index }) => {
    const bgColor = index % 2 === 0 ? "#FFF" : "#EEEEEE";
    return (
      <TouchableOpacity activeOpacity={0.9}>
        <View style={[styles.item, { backgroundColor: bgColor }]}>
          <View style={{ flex: 0.2 }}>
            <Image source={item.image} style={styles.avatar} />
          </View>
          <View style={{ alignSelf: "flex-start", flex: 0.45 }}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.symbol}>{item.symbol}</Text>
          </View>
          <View style={{ flex: 0.35, alignItems: "flex-end" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.change}>+2.75%</Text>
            </View>
            <Button
              onPress={() => this._handlePressBuy(item)}
              title="BUY"
              textStyle={styles.buttonTitle}
              style={styles.button}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.athletes}
        keyExtractor={item => item.name}
        renderItem={this.renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    );
  }
}

class Teams extends Component {
  static propTypes = {
    teams: PropTypes.array.isRequired
  };

  renderItem = ({ item, index }) => {
    const bgColor = index % 2 === 0 ? "#FFF" : "#EEEEEE";
    return (
      <TouchableOpacity activeOpacity={0.9}>
        <View style={[styles.item, { backgroundColor: bgColor }]}>
          <View style={{ flex: 0.2 }}>
            <View
              style={[
                styles.avatarContainer,
                { backgroundColor: "transparent" }
              ]}
            >
              <Image
                source={item.image}
                style={styles.avatar}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{ flex: 0.45, alignSelf: "flex-start" }}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.symbol}>{item.tickerSymbol}</Text>
          </View>
          <View style={{ flex: 0.35 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.change}>+2.75%</Text>
            </View>
            <Button
              title="BUY"
              textStyle={styles.buttonTitle}
              style={styles.button}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.teams}
        keyExtractor={item => item.name}
        renderItem={this.renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    );
  }
}

class Sports extends Component {
  static propTypes = {
    sports: PropTypes.array.isRequired
  };

  renderItem = ({ item, index }) => {
    const bgColor = index % 2 === 0 ? "#FFF" : "#EEEEEE";
    return (
      <TouchableOpacity activeOpacity={0.9}>
        <View style={[styles.item, { backgroundColor: bgColor }]}>
          <View style={{ flex: 0.2 }}>
            <View style={styles.avatarContainer}>
              <Image
                source={item.image}
                style={styles.avatar}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{ flex: 0.45, alignSelf: "flex-start" }}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.symbol}>{item.tickerSymbol}</Text>
          </View>
          <View style={{ flex: 0.35 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.change}>+2.75%</Text>
            </View>
            <Button
              title="BUY"
              textStyle={styles.buttonTitle}
              style={styles.button}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.sports}
        keyExtractor={item => item.name}
        renderItem={this.renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    );
  }
}

class TrackView extends Component {
  static propTypes = {
    athletes: PropTypes.array.isRequired,
    teams: PropTypes.array.isRequired,
    sports: PropTypes.array.isRequired
  };

  render() {
    const { athletes, teams, sports, navigation } = this.props;

    return (
      <Tabs
        tabs={[
          {
            title: "ATHLETES",
            render: () => (
              <Athletes athletes={athletes} navigation={navigation} />
            )
          },
          {
            title: "TEAMS",
            render: () => <Teams teams={teams} navigation={navigation} />
          },
          {
            title: "Sports",
            render: () => <Sports sports={sports} navigation={navigation} />
          }
        ]}
      />
    );
  }
}

export default withNavigation(TrackView);
