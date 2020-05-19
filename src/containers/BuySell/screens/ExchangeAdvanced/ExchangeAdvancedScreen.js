import React from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "@AppComponents";
import { Icons, Colors } from "@AppTheme";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView, NavigationActions } from "react-navigation";
import ExchangeTradeNew from "../../components/ExchangeTradeNew";
import ExchangeChart from "../../components/ExchangeChart";
import ExchangeBook from "../../components/ExchangeBook";
import ExchangeOrders from "../../components/ExchangeOrders";
import styles from "./styles";
import reactotron from "reactotron-react-native";
import { connect } from "react-redux";

class ExchangeAdvancedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: null,
      selectTab: 0
    };
  }
  componentWillMount() {
    const athleteData = this.props.navigation.getParam("athleteData");
    reactotron.log("mount", athleteData);
    this.setState({
      detailData: athleteData
    });
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  buyAction = () => {
    this.props.navigation.navigate("PaymentMethod", { type: true });
  };
  _handlPressOrder() {
    const { auth } = this.props;
    reactotron.log(auth);
    if (!auth.limitOrderDontShow) {
      this.props.navigation.navigate("LimitOrderTutorial", {
        athleteData: this.state.detailData
      });
    } else {
    }
  }
  _handlePressTradeConfirm() {
    let ISOStarted = true;
    ISOStarted
      ? this.props.navigation.navigate("ISOAuction")
      : this.props.navigation.navigate("ISONotLive");
  }

  _handlePressRightMark() {}

  _handlePressTab = index => {
    this.setState({ selectTab: index });
  };

  renderBook() {
    return (
      <View style={{ backgroundColor: "#000" }}>
        <Text>BOOK</Text>
      </View>
    );
  }
  renderChart() {
    return (
      <View style={{ backgroundColor: "#000" }}>
        <Text>CHART</Text>
      </View>
    );
  }
  renderOrders() {
    return (
      <View style={{ backgroundColor: "#000" }}>
        <Text>ORDERS</Text>
      </View>
    );
  }

  render() {
    const { detailData, selectTab } = this.state;
    reactotron.log(detailData);
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.header]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 0.9 }}
          >
            <TouchableOpacity onPress={this.goBack}>
              <Image source={Icons.arrowLeftWhite} />
            </TouchableOpacity>
            <Image
              source={detailData.image}
              style={styles.photo}
              resizeMode={"cover"}
            />
            <View style={{ flex: 1, marginLeft: 4 }}>
              <Text style={styles.stake}>{detailData.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.stakeValue}>
                  {detailData.symbol + ": "}
                  <Text style={styles.stake}>{detailData.quantity + " "}</Text>
                  <Text style={styles.stake}>
                    {detailData.currency}
                    {detailData.price}
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
        <ScrollView
          style={{ backgroundColor: "#000", flex: 1, paddingBottom: "50%" }}
        >
          <View style={{ marginTop: 10, marginLeft: 20 }}>
            <Text style={styles.title}>
              Hi {this.props.user.user.firstname}, your total balance
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 40,
              alignItems: "center",
              marginTop: 10,
              paddingHorizontal: 20
            }}
          >
            <Image source={Icons.iconDX} style={styles.icons} />
            <Text style={styles.title1}>1528.00</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.buyAction()}
            >
              <FontAwesome5
                regular
                name="plus-square"
                style={{
                  fontSize: 24,
                  color: Colors.malachite
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.tabViews}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressTab(0)}
            >
              <Text style={styles.tabText}>TRADE</Text>
              <View
                style={
                  selectTab === 0
                    ? styles.selectedTabBottom
                    : styles.unselectedTabBottom
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressTab(1)}
            >
              <Text style={styles.tabText}>BOOK</Text>
              <View
                style={
                  selectTab === 1
                    ? styles.selectedTabBottom
                    : styles.unselectedTabBottom
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressTab(2)}
            >
              <Text style={styles.tabText}>CHART</Text>
              <View
                style={
                  selectTab === 2
                    ? styles.selectedTabBottom
                    : styles.unselectedTabBottom
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressTab(3)}
            >
              <Text style={styles.tabText}>ORDERS</Text>
              <View
                style={
                  selectTab === 3
                    ? styles.selectedTabBottom
                    : styles.unselectedTabBottom
                }
              />
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 0 }}>
            {selectTab === 0 ? (
              <ExchangeTradeNew
                detailData={detailData}
                onPressedOrder={() => this._handlPressOrder()}
                onPressed={() => this._handlePressTradeConfirm()}
              />
            ) : selectTab === 1 ? (
              <ExchangeBook />
            ) : selectTab === 2 ? (
              <ExchangeChart />
            ) : (
              <ExchangeOrders />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  auth: auth
});

export default connect(mapStateToProps)(ExchangeAdvancedScreen);
