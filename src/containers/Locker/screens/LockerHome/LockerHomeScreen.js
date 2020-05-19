import React from "react";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import WeeklyChart from "../../components/WeeklyChart";
import { Text, SideMenu } from "@AppComponents";
import { Colors, Icons, Images } from "@AppTheme";
import styles from "./styles";

class LockerHomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "portfolio"
    };
  }

  _handlePressTab = tabName => {
    this.setState({ activeTab: tabName });
  };

  _startOnboarding = () => {
    // temporarily lauch onboarding here
    this.props.navigation.navigate("ChooseAthletes");
  };

  renderBalanceType() {
    return (
      <Text style={{ fontSize: 18, height: 20 }}>
        <Text style={{ fontFamily: "Rajdhani" }}>
          {this.state.activeTab === "scout" ? "DRIVECOIN" : "CURRENT"}
        </Text>{" "}
        BALANCE
      </Text>
    );
  }

  renderBalanceValue() {
    if (this.state.activeTab === "scout") {
      return (
        <Text style={styles.balanceLabel}>
          DXC <Text style={styles.balanceValue}>0</Text>
        </Text>
      );
    }
    return (
      <Text style={styles.balanceLabel}>
        DX <Text style={styles.balanceValue}>7,500</Text>
      </Text>
    );
  }

  renderPortfolioType() {
    return (
      <Text style={{ fontSize: 18, marginTop: 5 }}>
        <Text style={{ fontFamily: "Rajdhani" }}>
          {this.state.activeTab === "scout" ? "FANTASY" : "PORTFOLIO"}
        </Text>{" "}
        VALUE
      </Text>
    );
  }

  renderPortfolioValue() {
    if (this.state.activeTab === "scout") {
      return (
        <Text style={styles.balanceLabel}>
          USD <Text style={styles.balanceValue}>7,391.05</Text>
        </Text>
      );
    }
    return (
      <Text style={styles.balanceLabel}>
        $<Text style={styles.balanceValue}>107,098.05</Text>
      </Text>
    );
  }

  renderTabs() {
    const { activeTab } = this.state;

    const portfolioTabStyle =
      activeTab === "portfolio"
        ? styles.tabPortfolioActive
        : styles.tabPortfolioInactive;

    const scoutTabStyle =
      activeTab === "scout" ? styles.tabScoutActive : styles.tabScoutInactive;

    const portfolioTabTextStyle = {
      opacity: activeTab === "portfolio" ? 1 : 0.4
    };

    const scoutTabTextStyle = { opacity: activeTab === "scout" ? 1 : 0.4 };

    const portfolioContentStyle =
      activeTab === "portfolio"
        ? styles.tabPortfolioContent
        : styles.tabScoutContent;

    return (
      <View style={styles.tabView}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, portfolioTabStyle]}
            onPress={() => this._handlePressTab("portfolio")}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, portfolioTabTextStyle]}>
              PORTFOLIO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, scoutTabStyle]}
            onPress={() => this._handlePressTab("scout")}
            onLongPress={this._startOnboarding}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, scoutTabTextStyle]}>SCOUT</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.tabContent, portfolioContentStyle]}>
          <View style={{ flex: 1 }}>
            {this.renderBalanceType()}
            {this.renderBalanceValue()}
            {this.renderPortfolioType()}
            {this.renderPortfolioValue()}
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <WeeklyChart style={styles.graph} />
            <View style={styles.changeRow}>
              <Image source={Icons.priceUp} />
              <Text style={{ fontSize: 18, marginLeft: 8 }}>2.15%</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderStats = () => {
    const { activeTab } = this.state;

    const handlePressTeams = () => {
      activeTab === "scout"
        ? this.props.navigation.navigate("TrackedTeams")
        : this.props.navigation.navigate("MyTeams");
    };

    const handlePressAthletes = () => {
      activeTab === "scout"
        ? this.props.navigation.navigate("TrackedAthletes")
        : this.props.navigation.navigate("MyAthletes");
    };

    return (
      <View style={{ flexDirection: "row", marginTop: 10, paddingBottom: 10 }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={handlePressAthletes}
          >
            <View style={styles.imageBorder}>
              <Image source={Images.athletes} style={{ width: "100%" }} />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10
            }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 16, marginTop: 14 }}>
                {activeTab === "scout" ? "TRACKED" : "MY"}{" "}
                <Text style={{ fontFamily: "Rajdhani-Bold", fontSize: 16 }}>
                  {activeTab === "scout" ? "ATHLETES" : "ATHLETES"}
                </Text>
              </Text>
              <Text style={styles.athletesValue}>53</Text>
            </View>
            <View
              style={{
                width: 1,
                marginTop: 5,
                height: "100%",
                backgroundColor: Colors.tundora
              }}
            />
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 16, marginTop: 14 }}>
                <Text style={{ fontFamily: "Rajdhani-Bold" }}>ATHLETES</Text>{" "}
                VALUE
              </Text>
              <Text style={styles.athletesWorth}>
                {activeTab === "scout" ? "USD 4,640.48" : "$ 84,750.09"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const title = "locker";
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <ScrollView style={styles.bodyContent}>
            {this.renderTabs()}
            {this.renderStats()}
          </ScrollView>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

LockerHomeScreen.propTypes = {};

export default LockerHomeScreen;
