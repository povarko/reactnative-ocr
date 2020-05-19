import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text, SideMenu, Input, Button } from "@AppComponents";
import styles from "./styles";
import { Images, Icons, Colors } from "@AppTheme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class IssueSetupTeam1Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player_selectedTab: "REVIEW"
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  _handleSelectPlayerTab = value => {
    this.setState({
      player_selectedTab: value
    });
  };

  renderWebsite() {
    return (
      <View style={styles.bodyContent}>
        <ScrollView style={styles.content}>
          <View style={styles.avatarContainer}>
            <View style={styles.teamAvatar}>
              <Image source={Images.team4} style={styles.teamIcon} />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.proceedText}>SOCCER</Text>
            <Text style={styles.teamText}>BARCELONA FC</Text>
          </View>
          <View style={styles.bioContent}>
            <View style={{ marginTop: 10 }}>
              <Input
                placeholder="Url link..."
                placeholderTextColor="#FFF"
                labelStyle={styles.label}
                inputStyle={styles.inputSmall}
                style={styles.inputItem2}
                onChangeText={this.onLastNameChange}
              />
            </View>
            <View style={styles.inputItem3}>
              <View style={{ flexDirection: "row" }}>
                <Image source={Images.team4} style={styles.teamImage} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.previewText}>LINK PREVIEW</Text>
                  <Text
                    style={{
                      width: wp("45%"),
                      fontSize: 12,
                      fontFamily: "Rajdhani"
                    }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  render() {
    const title = "";
    const type = this.props.navigation.getParam("type", () => {});

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={{ flex: 1 }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
              <Text style={styles.textTitle}>ISSUER SETUP</Text>
              <View style={{ width: 20 }} />
            </View>
            <View style={styles.header2}>
              <Text style={styles.profileCompletion}>PROFILE COMPLETION</Text>
              <View style={{ alignItems: "center" }}>
                <View style={styles.profileCompletionBackground}>
                  <View style={styles.profileCompletionProgress} />
                </View>
              </View>
              <Text
                style={[
                  styles.profileCompletion,
                  { fontSize: 12, marginLeft: wp("15%") }
                ]}
              >
                20%
              </Text>
            </View>
            {this.renderWebsite()}
            <View style={styles.processdView}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.proceedButtonView}
                onPress={() =>
                  this.props.navigation.navigate("IssueSetupTeam2")
                }
              >
                <Text style={styles.proceedText}>DONE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default IssueSetupTeam1Screen;
