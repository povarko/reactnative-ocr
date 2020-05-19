import React, { Component, Fragment } from "react";
import { Image, ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, SideMenu, Button } from "@AppComponents";
import { Images, Icons } from "@AppTheme";
import styles from "./styles";

export default class ProfileStatusScreen extends Component {
  state = {
    status: "pending" // pending | unableToVerify | invalidKYC
  };

  goBack = () => {
    this.props.navigation.goBack();
  };
  goRoot = () => {
    this.props.navigation.navigate("LockerHome");
  };

  renderPending() {
    return (
      <Fragment>
        <Image source={Icons.pending} resizeMode="contain" />
        <Text style={styles.pending}>PENDING</Text>
        <Text style={styles.subtitle}>KYC status pending!</Text>
        <Button
          title="BACK"
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={this.goRoot}
        />
      </Fragment>
    );
  }

  renderUnableToVerify() {
    return (
      <Fragment>
        <Image source={Icons.error} resizeMode="contain" />
        <Text style={styles.error}>ERROR</Text>
        <Text style={styles.subtitle}>Unable to verify!</Text>
        <Button
          title="RESUBMIT"
          style={styles.altButton}
          textStyle={styles.buttonText}
        />
        <Button
          title="BACK"
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={this.goBack}
        />
      </Fragment>
    );
  }

  renderInvalidKyc() {
    return (
      <Fragment>
        <Image source={Icons.pending} resizeMode="contain" />
        <View style={styles.textBlock}>
          <Text style={styles.error}>ERROR</Text>
          <Text style={styles.subtitle}>
            Sorry, we are unable to let you purchase assets on the SportXchange
            at this time.
          </Text>
          <Text style={[styles.subtitle, { marginTop: 25 }]}>
            Please contact Support.
          </Text>
          <Button
            title="BACK"
            style={[styles.button, { marginTop: 20 }]}
            textStyle={styles.buttonText}
            onPress={this.goBack}
          />
        </View>
      </Fragment>
    );
  }

  renderBody() {
    const { status } = this.state;
    if (status === "pending") return this.renderPending();
    if (status === "unableToVerify") return this.renderUnableToVerify();
    if (status === "invalidKYC") return this.renderInvalidKyc();
    return null;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu title="profile">
          <View style={styles.body}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
            </View>
            {this.renderBody()}
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
