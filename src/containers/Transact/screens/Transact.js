import * as React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Header, Tabs } from "@AppComponents";
import History from "../components/History";
import AddUsd from "../components/AddUsd";
import DrawUsd from "../components/DrawUsd";
import styles from "./styles";

class TradeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header hideHeaderLeft hideHeaderRight title="Transact" />
        <View style={{ flex: 1, marginTop: 25 }}>
          <Tabs
            tabs={[
              { title: "ADD USD", render: () => <AddUsd /> },
              { title: "DRAW USD", render: () => <DrawUsd /> },
              { title: "HISTORY", render: () => <History /> }
            ]}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default TradeScreen;
