import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LineChartIssue from "../../components/LineChartIssue";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text } from "@AppComponents";
import { Images, Icons, Colors } from "@AppTheme";
import styles from "./styles";

const data1 = [
  10,
  12,
  12,
  15,
  14,
  13,
  15,
  11,
  14,
  12,
  7,
  10,
  9,
  10,
  9,
  10,
  5,
  4,
  6,
  4,
  12,
  15,
  10,
  12
];
const data2 = [
  10,
  12,
  12,
  15,
  14,
  ,
  9,
  10,
  5,
  4,
  6,
  4,
  7,
  8,
  8,
  7,
  6,
  12,
  15,
  10,
  12
];
const data3 = [
  10,
  12,
  12,
  15,
  14,
  13,
  15,
  11,
  14,
  12,
  7,
  10,
  9,
  10,
  8,
  7,
  6,
  12,
  15,
  10,
  12
];

class IssueAnalyticsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "ISSUANCE", //TRADING, STORE
      tradingTab: "Platium" //Gold, Silver, Bronze
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  _handlePressTab = tabName => {
    this.setState({ activeTab: tabName });
  };

  _handlePressTradingTab = tradingName => {
    this.setState({ tradingTab: tradingName });
  };

  renderIssuance() {
    return (
      <View>
        <View style={styles.issuanceDatapoint}>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#FF7141"
            }}
          />
          <Text
            style={{
              color: "#FF7141",
              margin: 5,
              fontSize: 12,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            Datapoint1
          </Text>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#00ACEE"
            }}
          />
          <Text
            style={{
              color: "#00ACEE",
              margin: 5,
              fontSize: 12,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            Datapoint2
          </Text>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#FFBE00"
            }}
          />
          <Text
            style={{
              color: "#FFBE00",
              margin: 5,
              fontSize: 12,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            Datapoint3
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20
          }}
        >
          <Text
            style={{
              color: "#FF7141",
              fontSize: 26,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            $
          </Text>
          <Text
            style={{
              color: "#FF7141",
              fontSize: 35,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            5,670.05
          </Text>
        </View>
        <LineChartIssue
          style={styles.graph}
          gradientColor="#FF7141"
          graphData={data1}
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -30,
            marginBottom: 10
          }}
        >
          <FontAwesome5
            solid
            name="arrow-circle-up"
            style={{
              fontSize: 18,
              color: Colors.malachite
            }}
          />
          <Text
            style={{
              color: "#FF7141",
              fontSize: 17,
              fontFamily: "Rajdhani-Bold",
              marginLeft: 10
            }}
          >
            + $9.45 (0.18)
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            backgroundColor: "#0D0D0D"
          }}
        >
          <Text
            style={{
              color: Colors.malachite,
              fontSize: 20,
              fontFamily: "Rajdhani-SemiBold",
              fontWeight: "normal"
            }}
          >
            View1
          </Text>
          <Text
            style={{
              color: "#FFF",
              fontSize: 20,
              fontFamily: "Rajdhani-SemiBold",
              fontWeight: "normal",
              marginLeft: 20
            }}
          >
            View2
          </Text>
        </View>
        <View
          style={{
            height: 1,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#464646"
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            backgroundColor: "#0D0D0D"
          }}
        >
          <Text
            style={{ color: "#FFF", fontSize: 20, fontFamily: "Rajdhani-Bold" }}
          >
            TOTAL EARNED
          </Text>
          <Text
            style={{
              color: Colors.malachite,
              fontSize: 20,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            $ 21,750.57
          </Text>
        </View>
        <View
          style={{
            height: 1,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#0D0D0D"
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20
          }}
        >
          <Text
            style={{ color: "#FFF", fontSize: 20, fontFamily: "Rajdhani-Bold" }}
          >
            STAKES ISSUED
          </Text>
          <Text
            style={{
              color: Colors.malachite,
              fontSize: 20,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            10 000
          </Text>
        </View>
      </View>
    );
  }

  renderTrading() {
    const { tradingTab } = this.state;

    const platiumStyle =
      tradingTab === "Platium"
        ? styles.tradingActiveTabLeft
        : styles.tradingInactiveTab;
    const goldStyle =
      tradingTab === "Gold"
        ? styles.tradingActiveTab
        : styles.tradingInactiveTab;
    const silverStyle =
      tradingTab === "Silver"
        ? styles.tradingActiveTab
        : styles.tradingInactiveTab;
    const bronzeStyle =
      tradingTab === "Bronze"
        ? styles.tradingActiveTabRight
        : styles.tradingInactiveTab;
    return (
      <View>
        <View style={styles.tradingDatapoint}>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#00ACEE"
            }}
          />
          <Text
            style={{
              color: "#00ACEE",
              margin: 5,
              fontSize: 12,
              fontFamily: "Rajdhani-Medium"
            }}
          >
            Stake issuance
          </Text>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#FFBE00"
            }}
          />
          <Text
            style={{
              color: "#FFBE00",
              margin: 5,
              fontSize: 12,
              fontFamily: "Rajdhani-Medium"
            }}
          >
            Secondary Market
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center"
            // marginTop: 10
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 16,
              fontFamily: "Rajdhani"
            }}
          >
            Total{" "}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              color: "#FFBE00",
              fontSize: 26,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            $
          </Text>
          <Text
            style={{
              color: "#FFBE00",
              fontSize: 35,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            5,670.05
          </Text>
        </View>
        <LineChartIssue
          style={styles.graph}
          gradientColor="#FFBE00"
          graphData={data2}
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -30,
            marginBottom: 10
          }}
        >
          <FontAwesome5
            solid
            name="arrow-circle-up"
            style={{
              fontSize: 18,
              color: Colors.malachite
            }}
          />
          <Text
            style={{
              color: "#FFBE00",
              fontSize: 17,
              fontFamily: "Rajdhani-Bold",
              marginLeft: 10
            }}
          >
            + $9.45 (0.18)
          </Text>
        </View>
        <View style={{ flexDirection: "row", height: 46, marginTop: 30 }}>
          <TouchableOpacity
            style={[platiumStyle, styles.tradingTab]}
            onPress={() => this._handlePressTradingTab("Platium")}
            activeOpacity={0.8}
          >
            <FontAwesome5
              solid
              name="coins"
              style={{ fontSize: 18, color: "#8E8E8E" }}
            />
            <Text
              style={{
                color: "#FFF",
                fontSize: 14,
                fontFamily: "Rajdhani-SemiBold",
                fontWeight: "normal",
                marginLeft: 5
              }}
            >
              Platinum
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[goldStyle, styles.tradingTab]}
            onPress={() => this._handlePressTradingTab("Gold")}
            activeOpacity={0.8}
          >
            <FontAwesome5
              solid
              name="coins"
              style={{ fontSize: 18, color: "#E7CC7D" }}
            />
            <Text
              style={{
                color: "#FFF",
                fontSize: 14,
                fontFamily: "Rajdhani-SemiBold",
                fontWeight: "normal",
                marginLeft: 5
              }}
            >
              Gold
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[silverStyle, styles.tradingTab]}
            onPress={() => this._handlePressTradingTab("Silver")}
            activeOpacity={0.8}
          >
            <FontAwesome5
              solid
              name="coins"
              style={{ fontSize: 18, color: "#C6C6C6" }}
            />
            <Text
              style={{
                color: "#FFF",
                fontSize: 14,
                fontFamily: "Rajdhani-SemiBold",
                fontWeight: "normal",
                marginLeft: 5
              }}
            >
              Silver
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[bronzeStyle, styles.tradingTab]}
            onPress={() => this._handlePressTradingTab("Bronze")}
            activeOpacity={0.8}
          >
            <FontAwesome5
              solid
              name="coins"
              style={{ fontSize: 18, color: "#9A6103" }}
            />
            <Text
              style={{
                color: "#FFF",
                fontSize: 14,
                fontFamily: "Rajdhani-SemiBold",
                fontWeight: "normal",
                marginLeft: 5
              }}
            >
              Bronze
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20
          }}
        >
          <Text
            style={{ color: "#FFF", fontSize: 20, fontFamily: "Rajdhani-Bold" }}
          >
            TOTAL EARNED
          </Text>
          <Text
            style={{
              color: Colors.malachite,
              fontSize: 20,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            $ 21,750.57
          </Text>
        </View>
        <View
          style={{
            height: 1,
            marginHorizontal: 20,
            backgroundColor: "#464646"
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20
          }}
        >
          <Text
            style={{ color: "#FFF", fontSize: 20, fontFamily: "Rajdhani-Bold" }}
          >
            STAKES ISSUED
          </Text>
          <Text
            style={{
              color: Colors.malachite,
              fontSize: 20,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            10 000
          </Text>
        </View>
      </View>
    );
  }

  renderStore() {
    return (
      <View>
        <View style={styles.issuanceDatapoint}>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#FF7141"
            }}
          />
          <Text
            style={{
              color: "#FF7141",
              margin: 5,
              fontSize: 12,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            Datapoint1
          </Text>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#00ACEE"
            }}
          />
          <Text
            style={{
              color: "#00ACEE",
              margin: 5,
              fontSize: 12,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            Datapoint2
          </Text>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#FFBE00"
            }}
          />
          <Text
            style={{
              color: "#FFBE00",
              margin: 5,
              fontSize: 12,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            Datapoint3
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20
          }}
        >
          <Text
            style={{
              color: "#FF7141",
              fontSize: 26,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            $
          </Text>
          <Text
            style={{
              color: "#FF7141",
              fontSize: 35,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            5,670.05
          </Text>
        </View>
        <LineChartIssue
          style={styles.graph}
          gradientColor="#FF7141"
          graphData={data3}
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -30,
            marginBottom: 10
          }}
        >
          <FontAwesome5
            solid
            name="arrow-circle-up"
            style={{
              fontSize: 18,
              color: Colors.malachite
            }}
          />
          <Text
            style={{
              color: "#FF7141",
              fontSize: 17,
              fontFamily: "Rajdhani-Bold",
              marginLeft: 10
            }}
          >
            + $9.45 (0.18)
          </Text>
        </View>
        <View style={{ flexDirection: "row", padding: 20 }}>
          <Text
            style={{
              color: Colors.malachite,
              fontSize: 20,
              fontFamily: "Rajdhani-SemiBold",
              fontWeight: "normal"
            }}
          >
            View1
          </Text>
          <Text
            style={{
              color: "#FFF",
              fontSize: 20,
              fontFamily: "Rajdhani-SemiBold",
              fontWeight: "normal",
              marginLeft: 20
            }}
          >
            View2
          </Text>
        </View>
        <View
          style={{
            height: 1,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#464646"
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20
          }}
        >
          <Text
            style={{ color: "#FFF", fontSize: 20, fontFamily: "Rajdhani-Bold" }}
          >
            TOTAL EARNED
          </Text>
          <Text
            style={{
              color: Colors.malachite,
              fontSize: 20,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            $ 21,750.57
          </Text>
        </View>
        <View
          style={{
            height: 1,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#464646"
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20
          }}
        >
          <Text
            style={{ color: "#FFF", fontSize: 20, fontFamily: "Rajdhani-Bold" }}
          >
            STAKES ISSUED
          </Text>
          <Text
            style={{
              color: Colors.malachite,
              fontSize: 20,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            10 000
          </Text>
        </View>
      </View>
    );
  }

  renderTabs() {
    const { activeTab } = this.state;

    const issuanceTabStyle =
      activeTab === "ISSUANCE" ? styles.tabActive : styles.tabInactive;
    const tradingTabStyle =
      activeTab === "TRADING" ? styles.tabActive : styles.tabInactive;
    const storeTabStyle =
      activeTab === "STORE" ? styles.tabActive : styles.tabInactive;

    const issuanceTextStyle = { opacity: activeTab === "ISSUANCE" ? 1 : 0.4 };
    const tradingTextStyle = { opacity: activeTab === "TRADING" ? 1 : 0.4 };
    const storeTextStyle = { opacity: activeTab === "STORE" ? 1 : 0.4 };

    return (
      <View style={styles.tabView}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, issuanceTabStyle]}
            onPress={() => this._handlePressTab("ISSUANCE")}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, issuanceTextStyle]}>ISSUANCE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, tradingTabStyle]}
            onPress={() => this._handlePressTab("TRADING")}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, tradingTextStyle]}>TRADING</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, storeTabStyle]}
            onPress={() => this._handlePressTab("STORE")}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, storeTextStyle]}>STORE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabContent}>
          {activeTab === "ISSUANCE"
            ? this.renderIssuance()
            : activeTab === "TRADING"
            ? this.renderTrading()
            : this.renderStore()}
        </View>
      </View>
    );
  }

  render() {
    const title = "ISSUER ANALYTICS";

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }}>
          <ImageBackground
            resizeMode="cover"
            source={Images.backgroundSmall}
            style={styles.headerBackground}
          >
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.bodyContent}>
              {this.renderTabs()}
            </ScrollView>
          </ImageBackground>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
export default IssueAnalyticsScreen;
