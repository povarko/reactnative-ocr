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
import RNPickerSelect from "react-native-picker-select";
import ImagePicker from "react-native-image-crop-picker";
import { Avatar } from "react-native-elements";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import reactotron from "reactotron-react-native";

const TRADE_PICKER_DATA = [
  "International",
  "Asia Pacific",
  "European",
  "Americas",
  "Africa"
];

class IssueAddSearchScreen extends React.Component {
  constructor(props) {
    super(props);
    const mode = props.navigation.getParam("mode");
    const title = props.navigation.getParam("title");
    this.state = {
      imageSource: null,
      asset: null,
      mode: mode,
      title: title
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  _handleSelectAsset = value => {
    this.setState({ asset: value });
  };
  _getTradePickerItems() {
    return TRADE_PICKER_DATA.map(item => ({
      label: item.toUpperCase(),
      value: item
    }));
  }
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

  inputValueChange = val => {};

  goTeamSetup = type => {
    this.props.navigation.navigate("IssueSetupTeam", { type: type });
  };

  goForward = mode => {
    const type = this.props.navigation.getParam("type");
    mode === "sport"
      ? this.props.navigation.navigate("TeamSelectIssue")
      : type === "TEAM"
      ? this.props.navigation.navigate("IssueSetupTeam1", { type: type })
      : this.props.navigation.navigate("IssueSetup", { type: type });
  };

  renderTeam() {
    const { imageSource, asset } = this.state;
    const insertTitle = this.props.navigation.getParam("title");
    return (
      <View style={styles.bodyContent}>
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
                size={120}
                containerStyle={styles.avatar}
              />
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.proceedText}>{insertTitle}</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
              }}
            >
              <Input
                placeholder="Team Name"
                placeholderTextColor="#C6C6C6"
                labelStyle={styles.label}
                inputStyle={styles.inputSmall}
                style={styles.inputItem}
                onValueChange={this.inputValueChange}
              />
              <FontAwesome5
                solid
                name="users"
                style={{
                  fontSize: 20,
                  color: Colors.malachite,
                  left: -30,
                  marginTop: -15
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
              }}
            >
              <Input
                placeholder="Attributes"
                placeholderTextColor="#C6C6C6"
                labelStyle={styles.label}
                inputStyle={styles.inputSmall}
                style={styles.inputItem}
                onValueChange={this.inputValueChange}
              />
              <FontAwesome5
                solid
                name="angle-down"
                style={{
                  fontSize: 20,
                  color: Colors.malachite,
                  left: -30,
                  marginTop: -15
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
              }}
            >
              <Input
                placeholder="Players"
                placeholderTextColor="#C6C6C6"
                labelStyle={styles.label}
                inputStyle={styles.inputSmall}
                style={styles.inputItem}
                onValueChange={this.inputValueChange}
              />
              <FontAwesome5
                solid
                name="angle-down"
                style={{
                  fontSize: 20,
                  color: Colors.malachite,
                  left: -30,
                  marginTop: -15
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
              }}
            >
              <Input
                placeholder="Location"
                placeholderTextColor="#C6C6C6"
                labelStyle={styles.label}
                inputStyle={styles.inputSmall}
                style={styles.inputItem}
                onValueChange={this.inputValueChange}
              />
              <FontAwesome5
                solid
                name="angle-down"
                style={{
                  fontSize: 20,
                  color: Colors.malachite,
                  left: -30,
                  marginTop: -15
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
              }}
            >
              <Input
                placeholder="Official Website"
                placeholderTextColor="#C6C6C6"
                labelStyle={styles.label}
                inputStyle={styles.inputSmall}
                style={styles.inputItem}
                onValueChange={this.inputValueChange}
              />
              <FontAwesome5
                solid
                name="angle-down"
                style={{
                  fontSize: 20,
                  color: Colors.malachite,
                  left: -30,
                  marginTop: -15
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderSport() {
    const { imageSource, asset } = this.state;
    const insertTitle = this.props.navigation.getParam("title");
    return (
      <View style={styles.bodyContent}>
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
                size={120}
                containerStyle={styles.avatar}
              />
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.proceedText}>{insertTitle}</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10
              }}
            >
              <Input
                placeholder="Sport Name"
                placeholderTextColor="#C6C6C6"
                labelStyle={styles.label}
                inputStyle={styles.inputSmall}
                style={styles.inputItem}
                onValueChange={this.inputValueChange}
              />
              <FontAwesome5
                solid
                name="volleyball-ball"
                style={{
                  fontSize: 24,
                  color: Colors.malachite,
                  left: -30,
                  marginTop: -15
                }}
              />
            </View>

            <View style={styles.rowView}>
              <View style={styles.pickerItem}>
                <RNPickerSelect
                  placeholder={{}}
                  style={styles}
                  value={asset}
                  items={this._getTradePickerItems()}
                  useNativeAndroidPickerStyle={false}
                  onValueChange={this._handleSelectAsset}
                  Icon={() => (
                    <FontAwesome5
                      solid
                      name="chevron-down"
                      style={{
                        fontSize: 24,
                        color: Colors.malachite
                      }}
                    />
                  )}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  render() {
    const mode = this.props.navigation.getParam("mode");
    let title = mode === "sport" ? "CHOOSE YOUR SPORTS" : "CHOOSE YOUR TEAM";
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={styles.container1}>
            <TouchableOpacity
              onPress={this.goBack}
              style={{ marginTop: 20, marginLeft: 20, width: 30 }}
            >
              <Image source={Icons.arrowLeftWhite} />
            </TouchableOpacity>
            {mode === "team" ? this.renderTeam() : this.renderSport()}

            <TouchableOpacity
              style={{
                flexDirection: "row",
                padding: 20,
                marginLeft: "10%"
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
            <View style={styles.processdView}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.proceedButtonView}
                onPress={() => this.goForward(mode)}
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

export default IssueAddSearchScreen;
