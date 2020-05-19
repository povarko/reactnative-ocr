import React, { Component } from "react";
import { ImageBackground, Image, View } from "react-native";
import { Title, Text } from "@AppComponents";
import { Images, Icons, Colors } from "@AppTheme";
import { SafeAreaView } from "react-navigation";
import { authActions } from "@AppRedux/actions";
import styles from "./styles";
import { connect } from "react-redux";

class EmailSentSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailConfirmationToken: props.navigation.getParam("emailConfirmToken")
      // email: registerEmail
    };
  }

  componentWillMount() {
    console.log(this.state);
    this.handleConfimEmail();
  }

  handleResend = () => {
    const { dispatch, navigation } = this.props;
    if (this.props.loading) return;
    dispatch(authActions.resendEmailConfirmation(navigation.getParam("email")));
  };

  handleConfimEmail = () => {
    const { dispatch, navigation, user } = this.props;
    let emailConfirmToken = this.state.emailConfirmationToken;
    if (emailConfirmToken === "" || emailConfirmToken === undefined) return;
    // if (this.props.loading) return;
    dispatch(authActions.confirmEmailRequest(emailConfirmToken));
  };

  render() {
    const email = this.props.navigation.getParam("email");
    return (
      <ImageBackground source={Images.background} style={styles.container}>
        <SafeAreaView
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "40%"
          }}
        >
          <Title />
          <View style={styles.iconContainer}>
            <Image
              source={Icons.sent}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <View style={{ paddingHorizontal: 40, marginTop: 12 }}>
            <Text style={styles.message}>Email has been sent</Text>
            <Text style={styles.message}>
              to <Text style={styles.email}>{email}</Text>
            </Text>
            <Text style={styles.message}>to complete your registration.</Text>
          </View>

          <View style={styles.bottom}>
            <Text style={styles.bottomText}>
              if your Email Address above is incorrect
            </Text>
            <Text
              onPress={this.handleResend}
              style={[styles.bottomText, { color: Colors.malachite }]}
            >
              Click here to reset
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user
  // registerEmail: state.auth.registerEmail
});

export default connect(mapStateToProps)(EmailSentSuccess);
