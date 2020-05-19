import React from "react";
import {
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, SideMenu, Input, Button } from "@AppComponents";
import styles from "./styles";
import { Images, Icons, Colors } from "@AppTheme";
import ImagePicker from "react-native-image-crop-picker";
import { Avatar } from "react-native-elements";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import reactotron from "reactotron-react-native";

class IssueSetupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: null
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: false,
      mediaType: "photo",
      includeBase64: true
    })
      .then(image => {
        reactotron.log(image.sourceURL);
        this.setState({ imageSource: image });
      })
      .catch(err => {
        reactotron.log(err);
      });
  };

  getAvatar = () => {
    const { imageSource } = this.state;
    if (imageSource) {
      return { uri: `data:${imageSource.mime};base64,${imageSource.data}` };
    } else {
      return Images.user;
    }
  };

  goTeamSetup = type => {
    this.props.navigation.navigate("IssueSetupTeam", { type: type });
  };

  renderTeam() {
    return (
      <View style={{ backgroundColor: "#000", flex: 1 }}>
        <ScrollView style={styles.content}>
          <View style={styles.avatarContainer}>
            <View style={styles.teamAvatar}>
              <Image source={Images.team4} style={styles.teamIcon} />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.proceedText}>SOCCER</Text>
            <Text style={styles.teamText}>BARCELONA FC</Text>
            <View style={styles.namesContainer}>
              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => this.goTeamSetup("attributes")}
              >
                <Text style={{ marginLeft: 20 }}>Manage Attributes</Text>
                <Image source={Icons.arrowRight} style={styles.iconsRight} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => this.goTeamSetup("players")}
              >
                <Text style={{ marginLeft: 20 }}>Players</Text>
                <Image source={Icons.arrowRight} style={styles.iconsRight} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => this.goTeamSetup("location")}
              >
                <Text style={{ marginLeft: 20 }}>Location</Text>
                <Image source={Icons.arrowRight} style={styles.iconsRight} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => this.goTeamSetup("website")}
              >
                <Text style={{ marginLeft: 20 }}>Official Website</Text>
                <Image source={Icons.arrowRight} style={styles.iconsRight} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderAthlete() {
    const { imageSource } = this.state;
    return (
      <View style={{ backgroundColor: "#000", flex: 1 }}>
        <ScrollView style={styles.content}>
          <View style={styles.avatarContainer}>
            {imageSource === null ? (
              <TouchableOpacity
                onPress={this.pickImage}
                style={styles.emptyavatar}
              >
                <Image source={Icons.userEdit} style={styles.avatarIcon} />
                <Text style={styles.addNameText}>ADD IMAGE</Text>
              </TouchableOpacity>
            ) : (
              <Avatar
                source={this.getAvatar()}
                rounded
                size="xlarge"
                onPress={this.pickImage}
                size={wp("50%")}
                containerStyle={styles.avatar}
              />
            )}
            {/* <Avatar
              source={this.getAvatar()}
              rounded
              size="xlarge"
              onPress={this.pickImage}
              size={wp("50%")}
              containerStyle={styles.avatar}
            />
            <Image source={Icons.userEdit} style={styles.avatarIcon} />
            <Text style={styles.addNameText}>ADD IMAGE</Text> */}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.proceedText}>SOCCER</Text>
            <Text style={styles.teamText}>BARCELONA FC</Text>

            <View style={styles.namesContainer}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Input
                  placeholder="Athlete Name"
                  placeholderTextColor="#C6C6C6"
                  labelStyle={styles.label}
                  inputStyle={styles.inputSmall}
                  style={styles.inputItem}
                  onChangeText={this.onFirstNameChange}
                />
                <Image source={Icons.userVerified} style={styles.icons} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Input
                    placeholder="Field Position"
                    placeholderTextColor="#C6C6C6"
                    labelStyle={styles.label}
                    inputStyle={styles.inputSmall1}
                    style={styles.inputItem2}
                  />
                  <Image source={Icons.userVerified} style={styles.icons} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Input
                    placeholder="Nr"
                    placeholderTextColor="#C6C6C6"
                    labelStyle={styles.label}
                    inputStyle={styles.inputSmall1}
                    style={styles.inputItem3}
                  />
                  <Image source={Icons.userVerified} style={styles.icons} />
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                width: wp("70%")
              }}
            >
              <FontAwesome5
                solid
                name="question-circle"
                style={{
                  fontSize: 16,
                  color: Colors.malachite,

                  marginRight: 10
                }}
              />
              <Text style={styles.helpSupportText}>Help/Support</Text>
            </TouchableOpacity>
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
            {type === "TEAM" ? this.renderTeam() : this.renderAthlete()}
            <View style={styles.processdView}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.proceedButtonView}
                onPress={() =>
                  this.props.navigation.navigate("AddBio", { type: type })
                }
              >
                <Text style={styles.proceedText}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default IssueSetupScreen;
