import React, { Component } from "react";
import {
  View,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Title, Button, ImageButton, Input, Text } from "@AppComponents";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Images, Colors, Icons } from "@AppTheme";
import { SafeAreaView } from "react-navigation";
import { CheckBox } from "react-native-elements";
import validator from "validator";
import { imageUploadAction } from "@AppRedux/actions";
import { connect } from "react-redux";
import styles from "./styles";
import ImagePicker from "react-native-image-crop-picker";

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Your Receipts",
      // headerTitleStyle: {
      //   fontWeight: 'normal',
      // },
      headerRight: (
        <TouchableOpacity
          activityOpacity={0.8}
          // style={styles.userBoard}
          onPress={() => navigation.push("ExportScreen")}
          style={{ paddingRight: 20 }}
        >
          <Image source={Icons.threedot} />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity
          activityOpacity={0.8}
          // style={styles.userBoard}
          onPress={() => navigation.push("ProfileScreen")}
          style={{ paddingLeft: 20 }}
        >
          <Image source={Icons.arrowleft} />
        </TouchableOpacity>
      )
    };
  };

  state = {
    imageSource: null,
    checked: false,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    validated: false
  };

  onChange = fieldName => {
    return value => {
      this.setState({ [fieldName]: value });
    };
  };

  onCheck = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  isValidForm = () => {
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      checked
    } = this.state;
    const isValidEmail = validator.isEmail(email);
    const isValidPassword =
      validator.isLength(password, { min: 6 }) && password === confirmPassword;

    if (firstName && lastName && isValidEmail && isValidPassword && checked) {
      return true;
    }
    return false;
  };

  handleSubmit = () => {
    const { loading, dispatch } = this.props;
    if (loading) return;
    if (this.isValidForm()) {
      const { email, password, firstName, lastName } = this.state;
    }
  };

  renderItems = ({ item, index }) => {
    const imageurl = "https://homepages.cae.wisc.edu/~ece533/images/boat.png";

    return (
      <TouchableOpacity
        activityOpacity={0.8}
        // style={styles.userBoard}
        onPress={() => {}}
      >
        {/* <View style={{backgroundColor:"#333", flex: 1, marginBottom: 80}}> */}
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <View style={styles.line} />
          <View style={[{ paddingTop: 15, paddingBottom: 15 }, styles.row]}>
            <Image
              source={{ uri: imageurl }}
              style={styles.roundimg}
              resizeMode={"cover"}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <View style={[styles.row, { justifyContent: "space-between" }]}>
                <Text style={{ color: "#000", fontSize: 16 }}>
                  Eureka Operations Pty Ltd
                </Text>
                <Text style={{ color: "#555" }}>$30.00</Text>
              </View>
              <Text style={{ color: "#555", marginTop: 1, marginBottom: 1 }}>
                Travel Dommestic
              </Text>
              <View style={styles.row}>
                <View
                  style={[{ color: Colors.forestGreen }, styles.statusIcon]}
                />
                <Text style={{ color: "#555", marginLeft: 10, fontSize: 12 }}>
                  16/05/2020
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* </View> */}
      </TouchableOpacity>
    );
  };

  pickImage = () => {
    // ImagePicker.openCamera({
    //   // width: 300,
    //   // height: 400,
    //   cropping: false,
    //   includeBase64: true,
    //   mediaType: "photo"
    // })
    //   .then(image => {
    //     alert(image.sourceURL);
    //     this.setState({ imageSource: image });
    //   })
    //   .catch(err => {
    //     alert("error");
    //   });

    const self = this;

    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: true,
      mediaType: "photo"
    })
      .then(image => {
        // this.setState({ imageSource: image });
        self.props.imageUploadAction(`data:${image.mime};base64,${image.data}`);
        self.props.navigation.push("UploadScreen");
      })
      .catch(err => {});
  };

  onAdd = () => {
    this.pickImage();
  };

  render() {
    const isValidForm = this.isValidForm();
    const { error } = this.props;

    const dummy = [1, 2, 3, 4, 5, 6, 7, 8];
    const isEmpty = true;

    return (
      <ImageBackground style={styles.container}>
        <SafeAreaView>
          <View style={{ display: "flex", height: "100%" }}>
            {isEmpty === true && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  alignItems: "center",
                  margin: 20,
                  backgroundColor: "#f3f3f3",
                  height: 160,
                  borderRadius: 20
                }}
                // style={styles.proceedButtonView}
                onPress={() => this.onAdd()}
              >
                {/* <Image source={Icons.addreceipt} style={{marginTop: 30}}/>                 */}
                <Text
                  style={{
                    color: "#00eaff",
                    width: "100%",
                    textAlign: "center",
                    fontSize: 26,
                    marginTop: 30
                  }}
                >
                  +
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    width: "100%",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginTop: 5,
                    marginBottom: 5,
                    textAlign: "center"
                  }}
                >
                  Add Receipt
                </Text>
                <Text
                  style={{
                    color: "#868686",
                    width: "100%",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  Upload a photo or PDF to get started
                </Text>
              </TouchableOpacity>
            )}
            {isEmpty === true && <View style={{ flex: 1 }} />}

            {isEmpty === false && (
              <View style={styles.overview}>
                <Text style={{ color: "#000", width: "100%" }}>
                  Total unpaid expenses for
                </Text>
                <Text
                  style={{
                    color: "#000000",
                    width: "100%",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginTop: 5,
                    marginBottom: 5
                  }}
                >
                  June 2020
                </Text>
                <Text
                  style={{
                    color: "#000",
                    width: "100%",
                    fontSize: 24,
                    fontWeight: "bold"
                  }}
                >
                  $1765.90
                </Text>
              </View>
            )}

            {isEmpty === false && (
              <View style={{ display: "flex", alignItems: "flex-end" }}>
                <ImageButton
                  onPress={this.handleSubmit}
                  title="FILTER"
                  style={styles.imageButton}
                  icon={Icons.filter}
                  iconAlign="right"
                  textStyle={{ color: "#a9a9a9" }}
                />
              </View>
            )}

            {isEmpty === false && (
              <FlatList
                data={dummy}
                renderItem={this.renderItems}
                keyExtractor={(item, index) => index.toString()}
              />
            )}

            <View
              style={{
                height: 50,
                backgroundColor: "#f9f9f9",
                alignItems: "center"
              }}
            >
              <View style={styles.line} />
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ flex: 1 }}
                // style={styles.proceedButtonView}
                onPress={() => this.onAdd()}
              >
                <Image source={Icons.addreceipt} style={{ marginTop: 10 }} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.registerError
});
export default connect(
  mapStateToProps,
  { imageUploadAction }
)(MainScreen);
