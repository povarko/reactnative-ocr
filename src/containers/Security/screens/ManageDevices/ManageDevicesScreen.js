import React, { Component, Fragment } from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Button, Text } from "@AppComponents";
import { Icons } from "@AppTheme";
import { Overlay } from "react-native-elements";
import { authActions } from "@AppRedux/actions";
import { connect } from "react-redux";
import styles from "./styles";
import reactotron from "reactotron-react-native";
import moment from "moment";
import publicIP from "react-native-public-ip";

export class ManageDevicesScreen extends Component {
  state = {
    showModal: false,
    revokeAll: false,
    revokeDeviceToken: null
  };

  componentDidMount() {
    publicIP().then(ip => reactotron.log(ip));
    this.props.navigation.addListener("didFocus", this.getDevices);
  }

  getDevices = () => {
    this.props.dispatch(authActions.getDevices());
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  startRevokeDevice = tokenId => {
    this.openModal();
    this.setState({ revokeDeviceToken: tokenId });
  };

  cancelRevokeDevice = () => {
    this.setState({ revokeDeviceToken: null }, this.closeModal);
  };

  revokeDevice = () => {
    const { revokeDeviceToken, revokeAll } = this.state;
    const { dispatch } = this.props;
    if (revokeAll) {
      dispatch(authActions.revokeAllTokens());
      this.setState({ revokeAll: false });
    } else if (revokeDeviceToken) {
      dispatch(authActions.revokeToken(revokeDeviceToken));
      this.setState({ revokeDeviceToken: null });
    }
    this.closeModal();
  };

  revokeAll = () => {
    this.setState({ revokeAll: true }, this.openModal);
  };

  renderMessage() {
    const { revokeAll } = this.state;
    if (revokeAll) {
      return (
        <Fragment>
          <Text style={styles.overlayTitle}>Warning</Text>
          <Text style={styles.overlayTextTop}>
            You are about to revoke all your devices.
          </Text>
          <Text style={styles.overlayTextBottom}>
            Are you sure you want to revoke access to all your devices
            completely?
          </Text>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Text style={styles.overlayTitle}>Warning</Text>
          <Text style={styles.overlayTextTop}>
            You are about to revoke the selected device!
          </Text>
          <Text style={styles.overlayTextBottom}>
            Are you sure you want to revoke access to this device completely?
          </Text>
        </Fragment>
      );
    }
  }

  renderDevices = () => {
    const { devices } = this.props;
    return devices.map((device, i) => (
      <DeviceTable
        key={i}
        ip={device.ipv6 || device.ipv4}
        location={`${device.city}, ${device.country}`}
        lastActiveDate={device.lastActive}
        tokenId={device.id}
        deleteDevice={() => this.startRevokeDevice(device.id)}
      />
    ));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu title="security">
          <ScrollView style={styles.content}>
            <Overlay
              isVisible={this.state.showModal}
              width={300}
              height={290}
              overlayStyle={styles.overlay}
            >
              <Fragment>
                <View style={styles.overlayContent}>
                  {this.renderMessage()}
                  <View style={styles.buttons}>
                    <Button
                      title="Cancel"
                      style={styles.inverseButton}
                      textStyle={styles.buttonText}
                      onPress={this.cancelRevokeDevice}
                    />
                    <Button
                      title="Revoke"
                      style={styles.button}
                      textStyle={styles.buttonText}
                      onPress={this.revokeDevice}
                    />
                  </View>
                </View>

                <View style={styles.top}>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <View style={styles.circle}>
                      <Image
                        resizeMode="contain"
                        source={Icons.warning}
                        style={styles.circleIcon}
                      />
                    </View>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end", top: 5 }}>
                    <TouchableOpacity onPress={this.closeModal}>
                      <Image source={Icons.cancel} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Fragment>
            </Overlay>

            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} resizeMode="contain" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Manage Devices</Text>
            </View>

            <TouchableOpacity onPress={this.revokeAll}>
              <View style={styles.revokeRow}>
                <Image
                  source={Icons.cancelCircle}
                  resizeMode="contain"
                  style={styles.revokeIcon}
                />
                <Text style={styles.revokeText}>Revoke all devices</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.infoContainer}>{this.renderDevices()}</View>
          </ScrollView>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

const DeviceTable = ({
  ip,
  location,
  lastActiveDate,
  tokenId,
  deleteDevice
}) => (
  <View style={styles.table}>
    <View style={styles.tableRow}>
      <View style={styles.row}>
        <Text style={[styles.tableTitle, { flex: 3 }]}>IP ADDRESS</Text>
        <Text style={styles.tableTitle}>LOCATION</Text>
      </View>

      <View style={styles.row2}>
        <Text style={[styles.tableText, { flex: 3 }]}>{ip}</Text>
        <Text style={styles.tableText}>{location}</Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.tableTitle, { flex: 3 }]}>LAST ACTIVE DATE</Text>
        <Text style={styles.tableTitle}>TOKEN ID</Text>
      </View>

      <View style={styles.row2}>
        <Text style={[styles.tableText, { flex: 3 }]}>
          {moment(lastActiveDate).calendar()}
        </Text>
        <Text style={styles.tableText} numberOfLines={1}>
          {tokenId}
        </Text>
      </View>
    </View>
    <View style={styles.tableIcons}>
      <TouchableOpacity onPress={deleteDevice} activeOpacity={0.8}>
        <Image
          source={Icons.cancelCircle}
          resizeMode="contain"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const mapStateToProps = state => ({ devices: state.auth.devices });

export default connect(mapStateToProps)(ManageDevicesScreen);
