import React from "react";
import { View } from "react-native";
import {
  Header,
  PerformanceView,
  TrackView,
  Trends,
  Forums,
  Text,
  Amount
} from "@AppComponents";
import { PortfolioView, VirtualSharedCertificates } from "../components";
import styles from "./styles";
import { SafeAreaView } from "react-navigation";
import {
  ATHLETES,
  TEAMS,
  SPORTS
} from "../components/VirtualShareCertificates/dummy";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      certificatesActiveTab: 0
    };
  }

  _handlePressTab = index => {
    this.setState({ activeTab: index });
  };

  _handlePressPortfolioItem = index => {
    this.setState({
      activeTab: -1,
      certificatesActiveTab: index
    });
  };

  _handleChangeVirtualShareCertificatesTab = index => {
    this.setState({
      certificatesActiveTab: index
    });
  };

  _handlePressCertificateItem = item => {
    // Placeholder data
    item.change = 4;
    item.tickerPrice = 200;
    item.total = 986;

    this.props.navigation.navigate("VirtualShareCertificate", { data: item });
  };

  _getHeading() {
    const { certificatesActiveTab, activeTab } = this.state;
    let heading = { title: "PORTFOLIO", value: 170502.59 };

    if (activeTab == -1) {
      if (certificatesActiveTab == 0)
        return () => <CertificateHeading title="ATHLETE" value={54344.54} />;
      if (certificatesActiveTab == 1)
        return () => <CertificateHeading title="TEAM" value={947802.47} />;
      else if (certificatesActiveTab == 2)
        return () => <CertificateHeading title="SPORT" value={170802.47} />;
    }
    return heading;
  }

  render() {
    const { activeTab, certificatesActiveTab } = this.state;
    const heading = this._getHeading();

    return (
      <SafeAreaView style={styles.container}>
        <Header
          title={heading.title}
          TitleComponent={typeof heading === "function" && heading}
          amountProps={{ value: heading.value, unit: "$" }}
          hideHeaderLeft
          hideHeaderRight
        />
        <TopTabBar
          labels={["Portfolio", "Performance", "Track", "Trends", "Forums"]}
          activeTab={activeTab}
          onPressTab={this._handlePressTab}
        />
        <View style={styles.body}>
          {activeTab == -1 && (
            <VirtualSharedCertificates
              onChangeTab={this._handleChangeVirtualShareCertificatesTab}
              activeTabIndex={certificatesActiveTab}
              onPressItem={this._handlePressCertificateItem}
            />
          )}
          {activeTab == 0 && (
            <PortfolioView onPressItem={this._handlePressPortfolioItem} />
          )}
          {activeTab == 1 && <PerformanceView />}
          {activeTab == 2 && (
            <TrackView athletes={ATHLETES} teams={TEAMS} sports={SPORTS} />
          )}
          {activeTab == 3 && (
            <Trends
              topAthletes={ATHLETES}
              topSports={SPORTS}
              topTeams={TEAMS}
            />
          )}
          {activeTab == 4 && <Forums />}
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const CertificateHeading = ({ title, value }) => (
  <View style={{ alignItems: "center", marginTop: 10 }}>
    <Text style={styles.title}>
      {title} <Text style={{ fontWeight: "bold" }}>PORTFOLIO </Text>VALUE
    </Text>
    <Amount value={value} unit="$" style={styles.amount} />
  </View>
);
