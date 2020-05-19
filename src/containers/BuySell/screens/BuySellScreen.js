import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import { SideMenu } from "@AppComponents";
import { SafeAreaView } from "react-navigation";
import { Icons, Colors } from "@AppTheme";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import { ATHLETES } from "../../Home/components/VirtualShareCertificates/dummy";
import { connect } from "react-redux";
import reactotron from "reactotron-react-native";

class BuySellScreen extends React.Component {
  constructor(props) {
    super(props);
    let _type = props.navigation.getParam("type") === "SELL" ? "SELL" : "BUY";
    this.state = {
      searchText: "",
      activeItemIndex: 0,
      athletes: ATHLETES,
      tabState: _type
    };
  }

  buyAction = () => {
    this.props.navigation.navigate("PaymentMethod", { type: true });
  };

  static getDerivedStateFromProps(props, state) {
    const newAthlete = props.navigation.getParam("data");
    // alert(props.navigation.getParam("type"))
    // let _type = props.navigation.getParam("type") === "SELL" ? "SELL" : "BUY";
    // state.tabState = _type

    if (newAthlete) {
      let athletes = state.athletes.filter(ath => ath.name !== newAthlete.name);
      athletes.unshift(newAthlete);
      return { athletes };
    }
    return null;
  }

  _setContentTab() {
    // Receive tabs data from previous screen.
    // We may want to set active tab or pass athlete data.
    const tabType = this.props.navigation.getParam("type");
    return !tabType || tabType === "buy" ? 0 : 1;
  }

  _handlePressContentTab = index => {
    this.setState({ activeContentTab: index });
  };

  changeTab = () => {
    const tabState = this.state.tabState;
    tabState === "BUY"
      ? this.setState({ tabState: "SELL" })
      : this.setState({ tabState: "BUY" });
  };

  _handleItemPress = index => {
    this.setState({ activeItemIndex: index });
    this.props.navigation.navigate("ExchangeAdvanced", {
      athleteData: this.state.athletes[index]
    });
  };
  renderItem = ({ item, index }) => {
    const onPress = () => this._handleItemPress(index);
    const { activeItemIndex } = this.state;

    item.tickerPrice = 88.9815; // Placeholder
    reactotron.log(item.image);

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View
          style={
            activeItemIndex === index
              ? styles.tabItemSelected
              : styles.tabItemNoSelected
          }
        >
          <Image source={item.image} style={styles.tabItemImage} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text
              style={
                activeItemIndex === index
                  ? styles.textNameSelect
                  : styles.textName
              }
            >
              {item.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.tabItemName,
                  activeItemIndex === index && { fontFamily: "Rajdhani-Bold" }
                ]}
              >
                {item.symbol}:{" "}
              </Text>
              <Text style={styles.tabItemPrice}>
                {parseInt(item.tickerPrice)}
              </Text>
              <Text style={styles.tabItemPrice}> ${item.price}</Text>
            </View>
          </View>
          <View style={{ width: 30 }}>
            {activeItemIndex === index ? (
              <Image source={Icons.success} style={styles.icons} />
            ) : (
              <View />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const title = "BUY & SELL";
    const { athletes } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={{ flex: 1, backgroundColor: "#000" }}>
            <View style={{ backgroundColor: "#000", padding: 10 }}>
              <View>
                <Text style={styles.title}>
                  Hi {this.props.user.user.firstname}, your total balance
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  height: 36,
                  alignItems: "center",
                  marginTop: 10
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
              <View style={styles.searchBox}>
                <TextInput
                  placeholder="Select Athlete below"
                  placeholderTextColor="#ddd"
                  style={styles.searchInput}
                  underlineColorAndroid={"transparent"}
                  value={this.state.searchText}
                  onChangeText={searchText => this.setState({ searchText })}
                />
                <FontAwesome5 solid name={"search"} style={styles.searchIcon} />
              </View>
              <FlatList
                data={athletes}
                onPressItem={() => {}}
                keyExtractor={item => item.name}
                renderItem={this.renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
              />
            </View>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(mapStateToProps)(BuySellScreen);
