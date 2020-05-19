import React, { Component } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-navigation";
import PINCode from "@haskkor/react-native-pincode";
import { Colors } from "@AppTheme";
import styles from "./styles";

export default class PinSetupScreen extends Component {
  handleFinish = () => {
    this.props.navigation.navigate("MainTab");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PINCode
          status="enter"
          touchIDDisabled
          passwordLength={6}
          colorCircleButtons="#000"
          stylePinCodeButtonNumber="#FFFfff"
          stylePinCodeButtonCircle={styles.pinButton}
          stylePinCodeTextButtonCircle={styles.pinButtonText}
          stylePinCodeTextTitle={styles.title}
          stylePinCodeColorTitle="#FFFFFF"
          titleChoose="Enter passcode"
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
      </SafeAreaView>
    );
  }
}
