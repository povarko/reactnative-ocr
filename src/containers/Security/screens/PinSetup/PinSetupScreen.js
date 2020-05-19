import React, { Component } from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text, Button } from "@AppComponents";
import PINCode from "@haskkor/react-native-pincode";
import { Icons, Colors } from "@AppTheme";
import { authActions } from "@AppRedux/actions";
import { connect } from "react-redux";
import styles from "./styles";

class PinSetupScreen extends Component {
  state = {
    allowSave: false,
    pinCode: null
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  handleFinish = pinCode => {
    this.setState({ allowSave: true, pinCode });
  };

  handleSave = () => {
    const { navigation, dispatch } = this.props;
    dispatch(authActions.setPin(this.state.pinCode));
    navigation.navigate("SecurityHome");
  };

  render() {
    const { allowSave } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu title="security">
          <ScrollView
            style={styles.content}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} resizeMode="contain" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Create new pin</Text>
            </View>
            <PINCode
              status="choose"
              passwordLength={6}
              colorCircleButtons="#000"
              stylePinCodeButtonNumber="#FFFfff"
              stylePinCodeButtonCircle={styles.pinButton}
              stylePinCodeTextButtonCircle={styles.pinButtonText}
              stylePinCodeTextTitle={styles.title}
              stylePinCodeColorTitle="#FFFFFF"
              titleChoose="Enter new passcode"
              titleConfirm="Confirm new passcode"
              titleConfirmFailed="Passcode Not Matching"
              subtitleComponent={() => <View />}
              buttonDeleteText="CLEAR"
              customBackSpaceIcon={null}
              finishProcess={this.handleFinish}
              stylePinCodeHiddenPasswordSizeEmpty={10}
              stylePinCodeCircle={styles.pincodeCircle}
              colorPasswordEmpty="#000"
              colorPassword={Colors.malachite}
              stylePinCodeDeleteButtonSize={1}
              stylePinCodeDeleteButtonText={styles.clear}
            />
            <Button
              title="Save"
              style={[styles.inactiveButton, allowSave && styles.button]}
              textStyle={styles.buttonText}
              onPress={this.handleSave}
            />
          </ScrollView>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default connect()(PinSetupScreen);
