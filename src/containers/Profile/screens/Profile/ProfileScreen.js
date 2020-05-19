import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator,
  Text
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Input, Button, PickLocation } from "@AppComponents";
import { Images, Icons, Colors } from "@AppTheme";
import ImagePicker from "react-native-image-crop-picker";
import { Avatar } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { NavigationActions } from "react-navigation";
import reactotron from "reactotron-react-native";
import styles from "./styles";
import { authActions } from "@AppRedux/actions";
import { connect } from "react-redux";

export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      imageSource: null,
      location: props.user.user.city + " ," + props.user.user.country,
      username: props.user.user.username,
      firstName: props.user.user.firstname,
      lastName: props.user.user.lastname,
      country: props.user.user.country,
      city: props.user.user.city
    };
    console.log(this.state);
  }

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
    this.getUsersProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user != this.props.user) {
      this.setState({
        username: nextProps.user.user.username,
        firstName: nextProps.user.user.firstname,
        lastName: nextProps.user.user.lastname,
        country: nextProps.user.user.country,
        city: nextProps.user.user.city
      });
    }
  }

  getUsersProfile = async () => {
    const { loading, dispatch } = this.props;
    if (loading) return;
    dispatch(authActions.getUserProfile());
  };

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  onUsernameChange = value => {
    this.setState({ username: value });
  };

  onFirstNameChange = value => {
    this.setState({ firstName: value });
  };

  onLastNameChange = value => {
    this.setState({ lastName: value });
  };

  handleSubmit = () => {
    const { loading, dispatch } = this.props;
    if (loading) return;
    const { username, firstName, lastName, country, city } = this.state;
    dispatch(
      authActions.updateProfile({
        username: username,
        firstname: firstName,
        lastname: lastName,
        country: country,
        city: city
      })
    );
  };

  usernameTaken = () => {
    // use as error check before api integration
    const { username } = this.state;
    return username && username.length < 7;
  };

  pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: true,
      mediaType: "photo"
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
      // return { uri: imageSource.sourceURL };
      return { uri: `data:${imageSource.mime};base64,${imageSource.data}` };
    } else {
      return Images.user;
    }
  };

  getLocation = location => {
    let datas = location.split(",");
    let country = datas.pop().trim();
    let city = datas.join(",").trim();

    this.setState({ location, city, country });
  };

  getLocationText() {
    const { location } = this.state;
    const locText = typeof location == "string" ? location : "";
    if (locText.length > 20) {
      return locText.slice(0, 19) + "...";
    }
    return locText;
  }

  render() {
    const title = "profile";
    const usernameTaken = this.usernameTaken();

    const { firstName, lastName, username, country, city } = this.state;
    const { error } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu title={title}>
          <ScrollView style={styles.content}>
            <ImageBackground
              resizeMode="cover"
              source={Images.backgroundSmall}
              style={styles.headerBackground}
            >
              <View style={styles.header}>
                <View style={{ width: 30 }} />
                <Text style={styles.title}>{title}</Text>
                <Image source={Icons.alarm} style={styles.icons} />
              </View>
              <View style={styles.avatarContainer}>
                <Avatar
                  source={this.getAvatar()}
                  rounded
                  size="large"
                  onPress={this.pickImage}
                  size={hp("35%") - 120}
                  containerStyle={styles.avatar}
                />
                <Image source={Icons.userEdit} style={styles.avatarIcon} />
              </View>
            </ImageBackground>

            <View style={styles.inputContainer}>
              <View style={styles.usernameContainer}>
                <TextInput
                  style={[styles.inputLarge, { flex: 0.9 }]}
                  placeholder="Username"
                  value={username}
                  placeholderTextColor="#FFF"
                  onChangeText={this.onUsernameChange}
                />
                <View style={{ flex: 0.1, alignItems: "flex-end" }}>
                  {!usernameTaken ? (
                    <Image
                      source={Icons.userVerified}
                      style={[styles.icons, { tintColor: Colors.malachite }]}
                    />
                  ) : (
                    <Image
                      source={Icons.cancelCircle}
                      style={[styles.icons, { tintColor: "red" }]}
                    />
                  )}
                </View>
              </View>
              {usernameTaken ? (
                <Text style={styles.error}>
                  This Username has already been taken.
                </Text>
              ) : null}

              <View style={styles.namesContainer}>
                <View style={{ marginRight: 8 }}>
                  <Input
                    placeholder="Ben"
                    value={firstName}
                    label="First Name"
                    placeholderTextColor="#FFF"
                    labelStyle={styles.label}
                    inputStyle={styles.inputSmall}
                    style={styles.inputItem}
                    onChangeText={this.onFirstNameChange}
                  />
                </View>
                <View style={{ marginLeft: 8 }}>
                  <Input
                    placeholder="Dover"
                    value={lastName}
                    label="Last Name"
                    placeholderTextColor="#FFF"
                    labelStyle={styles.label}
                    inputStyle={styles.inputSmall}
                    style={styles.inputItem}
                    onChangeText={this.onLastNameChange}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.locationLabel}>Location</Text>
                <View style={styles.location}>
                  <Image
                    source={Icons.location}
                    resizeMode="contain"
                    style={{ width: 18, height: 18 }}
                  />
                  <Text
                    style={styles.locationTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {this.getLocationText() || city + ", " + country}
                  </Text>
                  <TouchableOpacity onPress={() => this.locRef.toggle()}>
                    <Text style={styles.locationChange}>(Change)</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {error && <Text style={styles.error}>{error}</Text>}
              <Button
                title="UPDATE"
                style={styles.button}
                textStyle={styles.buttonText}
                onPress={this.handleSubmit}
              />
            </View>
          </ScrollView>
        </SideMenu>
        <PickLocation
          ref={ref => (this.locRef = ref)}
          getLocation={this.getLocation}
        />
        {this.props.loading && (
          <View style={styles.overlay}>
            <ActivityIndicator />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.updateProfileError,
  user: auth.user
});

export default connect(mapStateToProps)(ProfileScreen);
