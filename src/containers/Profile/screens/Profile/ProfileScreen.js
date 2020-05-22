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
import {
  SideMenu,
  Input,
  Button,
  PickLocation,
  HeaderBar
} from "@AppComponents";
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
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Profile",
      // headerTitleStyle: {
      //   fontWeight: 'normal',
      // },
      headerRight: (
        <TouchableOpacity
          activityOpacity={0.8}
          // style={styles.userBoard}
          onPress={() => navigation.goBack()}
          style={{ paddingRight: 20 }}
        >
          <Image source={Icons.goarrow} />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity
          activityOpacity={0.8}
          // style={styles.userBoard}
          onPress={() => {}}
          style={{ paddingLeft: 20 }}
        >
          <Text style={{ color: "#02d0e3", fontSize: 16 }}>Edit</Text>
        </TouchableOpacity>
      )
    };
  };

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
    const title = "Profile";
    const usernameTaken = this.usernameTaken();

    const { firstName, lastName, username, country, city } = this.state;
    const { error } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        {/* <HeaderBar
          // {...headerProps}
          onMenuPress={this.onOpen}
          menuIcon={this.state.isOpen ? Icons.arrowRight : Icons.menu}
        /> */}
        {/* <SideMenu title={title}> */}
        <ScrollView style={styles.content}>
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

          <View style={styles.inputContainer}>
            <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
              <View style={{ flex: 1, marginBottom: 10 }}>
                <Text
                  style={{
                    color: "#98989b",
                    marginBottom: 1,
                    marginTop: 20
                  }}
                >
                  First Name
                </Text>
                <Text style={{ color: "#000", fontSize: 16, marginTop: 5 }}>
                  Sam{firstName}
                </Text>
              </View>
              <View style={styles.line} />
              <View style={{ flex: 1, marginBottom: 10 }}>
                <Text
                  style={{
                    color: "#98989b",
                    marginBottom: 1,
                    marginTop: 10
                  }}
                >
                  Surname
                </Text>
                <Text style={{ color: "#000", fontSize: 14, marginTop: 5 }}>
                  Simith{lastName}
                </Text>
              </View>
              <View style={styles.line} />

              <View style={{ flex: 1, marginBottom: 10 }}>
                <Text
                  style={{
                    color: "#98989b",
                    marginBottom: 1,
                    marginTop: 10
                  }}
                >
                  Email
                </Text>
                <Text style={{ color: "#000", fontSize: 14, marginTop: 5 }}>
                  sam.smith@sample.com{lastName}
                </Text>
              </View>
              <View style={styles.line} />

              <View style={{ flex: 1, marginBottom: 0 }}>
                <Text
                  style={{
                    color: "#98989b",
                    marginBottom: 1,
                    marginTop: 10
                  }}
                >
                  Password
                </Text>
                <Input
                  style={{
                    border: 0,
                    paddingLeft: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginBottom: 0,
                    height: 30,
                    borderColor: "#f7f7f7"
                  }}
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={this.onPasswordChange}
                  textContentType="password"
                  value="ddddd"
                />
              </View>
              <View style={styles.line} />

              <View
                style={{
                  marginTop: 50,
                  marginBottom: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{ color: "#808080" }} onPress={this.openTerms}>
                  Privacy Policy | Terms & Conditions
                </Text>
              </View>

              <TouchableOpacity
                activityOpacity={0.8}
                // style={styles.userBoard}
                onPress={() => {}}
              >
                <View style={{ flex: 1, height: 40 }}>
                  <Text
                    style={{
                      color: "#000",
                      marginBottom: 1,
                      marginTop: 10
                    }}
                  >
                    Help & Support
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.line} />

              <TouchableOpacity
                activityOpacity={0.8}
                // style={styles.userBoard}
                onPress={() => {}}
              >
                <View style={{ flex: 1, marginTop: 10, height: 40 }}>
                  <Text
                    style={{
                      color: "#00eaff",
                      marginBottom: 1,
                      marginTop: 10
                    }}
                  >
                    Log Out
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.line} />
            </View>

            {error && <Text style={styles.error}>{error}</Text>}
            {/* <Button
                title="UPDATE"
                style={styles.button}
                textStyle={styles.buttonText}
                onPress={this.handleSubmit}
              /> */}
          </View>
        </ScrollView>
        {/* </SideMenu> */}
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
  // user: auth.user
  user: {
    user: {
      location: "Location",
      username: "john123",
      firstName: "John",
      lastName: "Mic",
      country: "US",
      city: "NewYork"
    }
  }
});

export default connect(mapStateToProps)(ProfileScreen);
