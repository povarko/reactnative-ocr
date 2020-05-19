import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Header } from "@AppComponents";
import Trade from "../components/Trade";
import {
  ATHLETES,
  TEAMS
} from "../../Home/components/VirtualShareCertificates/dummy";
import styles from "./styles";

class TradeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header hideHeaderLeft hideHeaderRight title="Trade" />
        <View style={{ flex: 1, marginTop: 10 }}>
          <Trade athletes={ATHLETES} teams={TEAMS} />
        </View>
      </SafeAreaView>
    );
  }
}

export default TradeScreen;
