import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, Amount, PlayerChart, Header, Button } from "@AppComponents";
import { Colors } from "@AppTheme";
import {
  VirtualShareCertificateStory,
  VirtualShareCertificatePlan,
  VirtualShareCertificateNews,
  VirtualShareCertificateForum,
  VirtualShareCertificateStore
} from "../components";
import styles from "./styles";

class VirtualShareCertificateScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: -1
    };
  }

  _handlePressTab = index => {
    this.setState({ activeTab: index });
  };

  _handlePressBuy = () => {
    const { navigation } = this.props;
    const { data } = navigation.state.params;
    navigation.navigate("BuySellCertificate", {
      data,
      type: "buy"
    });
  };

  _handlePressSell = () => {
    const { navigation } = this.props;
    const { data } = navigation.state.params;
    navigation.navigate("BuySellCertificate", {
      data,
      type: "sell"
    });
  };

  _handleBackPress = () => {
    const { activeTab } = this.state;
    const { navigation } = this.props;
    if (activeTab == -1) {
      navigation.goBack();
    } else {
      this.setState({ activeTab: -1 });
    }
  };

  _openPlayerCertificate = () => {
    this.props.navigation.navigate("PlayerCertificate");
  };

  renderOverview = () => {
    const { navigation } = this.props;
    const { data } = navigation.state.params;

    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <Header
            simple
            title={data.sport}
            onBackPress={this._handleBackPress}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this._openPlayerCertificate}
          >
            <Image source={data.image} style={styles.avatar} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.symbol}>{data.symbol}</Text>
          <Amount
            unit={"$"}
            value={Number(data.price)}
            style={{ fontSize: 30 }}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={this._handlePressBuy}
              style={styles.button}
            >
              <Text style={styles.buttonText}>BUY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._handlePressSell}
              style={styles.sellButton}
            >
              <Text style={styles.buttonText}>SELL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsContainer}>
            <View
              style={{
                marginRight: 10,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={{ fontFamily: "Rajdhani-Bold", fontSize: 20 }}>
                {data.symbol.slice(0, data.symbol.length - 3)}
              </Text>
              <Text style={{ fontFamily: "Rajdhani-Medium", fontSize: 20 }}>
                -DX:
              </Text>
            </View>
            <Amount
              unit={"$"}
              value={data.tickerPrice}
              style={{ color: Colors.malachite, fontSize: 22 }}
              decimalStyle={{ color: Colors.malachite }}
              dotStyle={{ color: Colors.malachite }}
            />
            <Text style={styles.title}> | </Text>
            <Text style={{ fontSize: 22, fontFamily: "Rajdhani-Medium" }}>
              ${data.total}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <PlayerChart />
          </View>

          <View style={[styles.bottomTabs, { marginTop: 30 }]}>
            <TouchableOpacity
              style={styles.bottomTab}
              onPress={() => this._handlePressTab(0)}
            >
              <Text style={styles.tabText}>Story</Text>
            </TouchableOpacity>
            <View style={styles.tabSeparator} />
            <TouchableOpacity
              style={styles.bottomTab}
              onPress={() => this._handlePressTab(1)}
            >
              <Text style={styles.tabText}>Plan</Text>
            </TouchableOpacity>
            <View style={styles.tabSeparator} />
            <TouchableOpacity
              style={styles.bottomTab}
              onPress={() => this._handlePressTab(2)}
            >
              <Text style={styles.tabText}>News</Text>
            </TouchableOpacity>
            <View style={styles.tabSeparator} />
            <TouchableOpacity
              style={styles.bottomTab}
              onPress={() => this._handlePressTab(3)}
            >
              <Text style={styles.tabText}>Forum</Text>
            </TouchableOpacity>
            <View style={styles.tabSeparator} />
            <TouchableOpacity
              style={styles.bottomTab}
              onPress={() => this._handlePressTab(4)}
            >
              <Text style={styles.tabText}>Store</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  renderTopTabs = () => {
    const { activeTab } = this.state;

    return (
      <View style={styles.topTabs}>
        <View style={styles.topTab}>
          <TouchableOpacity
            style={styles.topTabInner}
            onPress={() => this._handlePressTab(0)}
          >
            <Text
              style={activeTab == 0 ? styles.tabTextActive : styles.tabText}
            >
              Story
            </Text>
          </TouchableOpacity>
          {activeTab == 0 && <View style={styles.topTabActiveTriangle} />}
        </View>
        <View style={styles.tabSeparator} />
        <View style={styles.topTab}>
          <TouchableOpacity
            style={styles.topTabInner}
            onPress={() => this._handlePressTab(1)}
          >
            <Text
              style={activeTab == 1 ? styles.tabTextActive : styles.tabText}
            >
              Plan
            </Text>
          </TouchableOpacity>
          {activeTab == 1 && <View style={styles.topTabActiveTriangle} />}
        </View>
        <View style={styles.tabSeparator} />
        <View style={styles.topTab}>
          <TouchableOpacity
            style={styles.topTabInner}
            onPress={() => this._handlePressTab(2)}
          >
            <Text
              style={activeTab == 2 ? styles.tabTextActive : styles.tabText}
            >
              News
            </Text>
          </TouchableOpacity>
          {activeTab == 2 && <View style={styles.topTabActiveTriangle} />}
        </View>
        <View style={styles.tabSeparator} />
        <View style={styles.topTab}>
          <TouchableOpacity
            style={styles.topTabInner}
            onPress={() => this._handlePressTab(3)}
          >
            <Text
              style={activeTab == 3 ? styles.tabTextActive : styles.tabText}
            >
              Forum
            </Text>
          </TouchableOpacity>
          {activeTab == 3 && <View style={styles.topTabActiveTriangle} />}
        </View>
        <View style={styles.tabSeparator} />
        <View style={styles.topTab}>
          <TouchableOpacity
            style={styles.topTabInner}
            onPress={() => this._handlePressTab(4)}
          >
            <Text
              style={activeTab == 4 ? styles.tabTextActive : styles.tabText}
            >
              Store
            </Text>
          </TouchableOpacity>
          {activeTab == 4 && <View style={styles.topTabActiveTriangle} />}
        </View>
      </View>
    );
  };

  renderDetail = () => {
    const { navigation } = this.props;
    const { data } = navigation.state.params;
    const { activeTab } = this.state;

    return (
      <View style={styles.container} forceInset={{ bottom: "never" }}>
        <Header
          simple
          style={{ top: 25 }}
          title={data.sport}
          onBackPress={this._handleBackPress}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.detailName}>{data.name}</Text>
          <Text style={styles.detailSymbol}>{data.symbol}</Text>
          <Amount
            unit={"$"}
            value={Number(data.price)}
            style={styles.detailPrice}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 16
            }}
          >
            <Button
              title="Buy"
              style={{
                backgroundColor: Colors.malachite,
                width: 96,
                marginRight: 10
              }}
              titleStyle={{ fontFamily: "Rajdhani-Bold" }}
              onPress={() =>
                navigation.navigate("BuySellCertificate", { data, type: "buy" })
              }
            />
            <Button
              title="Sell"
              style={{ backgroundColor: Colors.blazeOrange, width: 96 }}
              titleStyle={{ fontFamily: "Rajdhani-Bold" }}
              onPress={() =>
                navigation.navigate("BuySellCertificate", {
                  data,
                  type: "sell"
                })
              }
            />
          </View>
        </View>
        {this.renderTopTabs()}
        <View style={styles.body}>
          {activeTab == 0 && <VirtualShareCertificateStory data={data} />}
          {activeTab == 1 && <VirtualShareCertificatePlan data={data} />}
          {activeTab == 2 && <VirtualShareCertificateNews data={data} />}
          {activeTab == 3 && <VirtualShareCertificateForum data={data} />}
          {activeTab == 4 && <VirtualShareCertificateStore data={data} />}
        </View>
        {activeTab != 4 && (
          <TouchableOpacity
            onPress={() => Linking.openURL(data.banner.url)}
            activeOpacity={0.9}
          >
            <Image
              source={{ uri: data.banner.image }}
              style={styles.bottomAd}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  render() {
    const { activeTab } = this.state;
    return activeTab < 0 ? this.renderOverview() : this.renderDetail();
  }
}

export default VirtualShareCertificateScreen;
