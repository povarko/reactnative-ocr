import React from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform
} from "react-native";
import { SafeAreaView } from "react-navigation";
import Permissions from "react-native-permissions";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, SideMenu, Input, Button } from "@AppComponents";
import styles from "./styles";
import { Images, Icons, Colors } from "@AppTheme";
import ImagePicker from "react-native-image-crop-picker";
import { Avatar } from "react-native-elements";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import reactotron from "reactotron-react-native";

class VerificationScreen extends React.Component {
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

  pickCamera = () => {
    ImagePicker.openCamera({
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
      // return { uri: imageSource.sourceURL };
    } else {
      return Images.user;
    }
  };

  renderBody() {
    const { imageSource } = this.state;
    return (
      <View style={styles.bodyContent}>
        <ScrollView style={styles.content}>
          <View style={styles.header2}>
            <Text style={styles.textTitle1}>
              STEP 1:{" "}
              <Text style={[styles.textTitle1, { color: "#FFF" }]}>
                UPLOAD ID/PASSPORT
              </Text>
            </Text>

            <TouchableOpacity
              style={styles.cameraIcon}
              onPress={this.pickCamera}
            >
              <FontAwesome5
                solid
                name={"camera"}
                style={{
                  fontSize: 16,
                  color: Colors.malachite
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.avatarContainer}>
            {imageSource === null ? (
              <View style={styles.emptyavatar}>
                <TouchableOpacity onPress={this.pickImage}>
                  <FontAwesome5
                    regular
                    name={"plus-square"}
                    style={{
                      fontSize: 32,
                      color: Colors.malachite
                    }}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <Avatar
                source={this.getAvatar()}
                size="xlarge"
                onPress={this.pickImage}
                size={wp("80%")}
                containerStyle={styles.avatar}
              />
            )}
          </View>
          <View style={styles.processdView}>
            {imageSource === null ? (
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.proceedButtonView}
              >
                <Text style={styles.proceedText}>NEXT</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.proceedButtonView,
                  { backgroundColor: Colors.malachite }
                ]}
                onPress={() =>
                  this.props.navigation.navigate("VerificationSelfie", {
                    data: imageSource
                  })
                }
              >
                <Text style={styles.proceedText}>NEXT</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }

  render() {
    const type = this.props.navigation.getParam("type", () => {});
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu title="verification">
          <ImageBackground
            resizeMode="cover"
            source={Images.backgroundSmall}
            style={styles.headerBackground}
          >
            <View style={styles.header}>
              <Text style={styles.textTitle}>
                KYC:{" "}
                <Text style={[styles.textTitle, { color: "#FFF" }]}>
                  VERIFICATION
                </Text>
              </Text>
            </View>
            <View style={styles.subTitleContent}>
              <Text style={styles.textTitle2}>
                VERIFY YOUR IDENTITY TO CLAIM YOUR ASSETS
              </Text>
              <View style={styles.divider} />
            </View>
            {this.renderBody()}
          </ImageBackground>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default VerificationScreen;
