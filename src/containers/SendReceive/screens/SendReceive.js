import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Header, Tabs } from "@AppComponents";
import SendTab from "../components/SendTab";
import ReceiveTab from "../components/ReceiveTab";
import QRCodeScanner from "react-native-qrcode-scanner";
import styles from "./styles";
import { ATHLETES } from "../../Home/components/VirtualShareCertificates/dummy";

class SendReceiveScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openQRScanner: false,
      scannerData: null
    };
  }

  _toggleQRScanner = () => {
    this.setState(state => ({ openQRScanner: !state.openQRScanner }));
  };

  handleScannerRead = e => {
    this.setState({ scannerData: e.data }, () => {
      this._toggleQRScanner();
    });
  };

  render() {
    const { openQRScanner, scannerData } = this.state;

    if (openQRScanner) {
      // todo: QR scanner should not unmount Tabs component
      return (
        <QRCodeScanner
          showMarker
          onRead={this.handleScannerRead}
          topContent={
            <TouchableOpacity onPress={this._toggleQRScanner}>
              <Text style={styles.centerText}>Cancel</Text>
            </TouchableOpacity>
          }
        />
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <Header hideHeaderLeft hideHeaderRight title="Send/Receive" />
        <View style={{ flex: 1, marginTop: 25 }}>
          <Tabs
            tabs={[
              {
                title: "Send",
                render: () => (
                  <SendTab
                    data={ATHLETES}
                    sendTo={scannerData}
                    toggleScanner={this._toggleQRScanner}
                  />
                )
              },
              { title: "Receive", render: () => <ReceiveTab /> }
            ]}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default SendReceiveScreen;
