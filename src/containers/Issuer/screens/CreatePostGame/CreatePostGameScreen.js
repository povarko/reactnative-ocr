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
import { Text, SideMenu, Input, AddLink } from "@AppComponents";
import styles from "./styles";
import { Images, Icons, Colors } from "@AppTheme";
import ImagePicker from "react-native-image-crop-picker";
import { Avatar } from "react-native-elements";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class CreatePostGameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: null,
      videoSource: null,
      linkSource: false,
      selectedMedia: 0
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  pickVideo = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: false,
      mediaType: "video",
      includeBase64: true
    })
      .then(video => {
        this.setState({ videoSource: video });
      })
      .catch(err => {});
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
        this.setState({ imageSource: image });
      })
      .catch(err => {});
  };

  addLink = () => {
    this.setState({ linkSource: true });
  };

  getLink = () => {
    this.filterRef.toggle();
  };

  getAvatar = () => {
    const { imageSource } = this.state;
    if (imageSource) {
      // return { uri: imageSource.sourceURL };
      return { uri: `data:${imageSource.mime};base64,${imageSource.data}` };
    } else {
      return ""; //Images.user;
    }
  };

  removeMedia = () => {
    if (this.state.selectedMedia === 0) {
      //video
      this.setState({ videoSource: null });
    } else if (this.state.selectedMedia === 1) {
      //photo
      this.setState({ imageSource: null });
    }
  };

  removeLink = () => {
    this.setState({ linkSource: false });
  };

  selecteMediaType = index => {
    if (index === 0) {
      //video
      if (this.state.videoSource === null) {
        this.pickVideo();
      }
    } else if (index === 1) {
      //photo
      if (this.state.imageSource === null) {
        this.pickImage();
      }
    } else if (index === 2) {
      //Link
      if (!this.state.linkSource) {
        this.getLink();
      }
    }
    this.setState({ selectedMedia: index });
  };

  render() {
    const title = "";
    const type = this.props.navigation.getParam("type", () => {});
    const { selectedMedia, imageSource, videoSource, linkSource } = this.state;
    let isShowImage =
      (selectedMedia === 0 && videoSource !== null) |
      (selectedMedia === 1 && imageSource !== null);
    let isLinkShow = selectedMedia === 2 && linkSource;
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={{ flex: 1 }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
            </View>
            <ScrollView style={{ backgroundColor: "#000" }}>
              <View style={styles.bodyContent}>
                <View style={styles.bioContent}>
                  <View style={{ marginTop: 10, alignItems: "center" }}>
                    <Text style={styles.subTitle}>CREATE GAME POST BELOW</Text>
                  </View>
                  <View style={{ marginTop: 20, marginLeft: 10 }}>
                    <Text style={[styles.subTitle, { fontSize: 14 }]}>
                      GAME ARTICLE
                    </Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Input
                      placeholder="Header here"
                      placeholderTextColor="#FFF"
                      labelStyle={styles.label}
                      inputStyle={styles.placeholderText}
                      style={styles.inputItem2}
                      onChangeText={this.onLastNameChange}
                    />
                  </View>
                  <View style={{ marginTop: 0 }}>
                    <TextInput
                      placeholder="Content copy here..."
                      placeholderTextColor="#FFF"
                      style={
                        isShowImage ? styles.inputItemMin : styles.inputItemMax
                      }
                      onChangeText={this.onLastNameChange}
                      multiline={true}
                    />
                  </View>
                  {isShowImage ? (
                    <View style={{ marginTop: 10 }}>
                      <Avatar
                        source={this.getAvatar()}
                        onPress={this.pickImage}
                        size={wp("76%")}
                        containerStyle={styles.avatar}
                      />
                      <View style={styles.removeView}>
                        <TouchableOpacity onPress={() => this.removeMedia()}>
                          <FontAwesome5
                            solid
                            name={"window-close"}
                            style={{
                              fontSize: 30,
                              color: Colors.malachite
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                    <View />
                  )}
                  {isLinkShow ? (
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
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor
                          </Text>
                        </View>
                      </View>
                      <View style={styles.removeView}>
                        <TouchableOpacity onPress={() => this.removeLink()}>
                          <FontAwesome5
                            solid
                            name={"window-close"}
                            style={{
                              fontSize: 20,
                              color: Colors.malachite
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                    <View />
                  )}
                  <View
                    style={{
                      marginTop: 20,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 10
                    }}
                  >
                    <TouchableOpacity
                      style={
                        selectedMedia === 0
                          ? styles.selectedMediaButton
                          : styles.mediaButton
                      }
                      onPress={() => this.selecteMediaType(0)}
                    >
                      <Text style={styles.saveText}>+VIDEO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        selectedMedia === 1
                          ? styles.selectedMediaButton
                          : styles.mediaButton
                      }
                      onPress={() => this.selecteMediaType(1)}
                    >
                      <Text style={styles.saveText}>+PHOTO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        selectedMedia === 2
                          ? styles.selectedMediaButton
                          : styles.mediaButton
                      }
                      onPress={() => this.selecteMediaType(2)}
                    >
                      <Text style={styles.saveText}>+LINK</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.processdView}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={styles.proceedButtonView}
                      onPress={() =>
                        this.props.navigation.navigate("CreateSuccess")
                      }
                    >
                      <Text style={styles.proceedText}>POST</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 10
                    }}
                  >
                    <TouchableOpacity style={{ flexDirection: "row" }}>
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
                    <TouchableOpacity
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.helpSupportText}>Add More Games</Text>
                      <FontAwesome5
                        solid
                        name="plus-square"
                        style={{
                          fontSize: 16,
                          color: Colors.malachite,
                          marginLeft: 10
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </SideMenu>
        <AddLink ref={ref => (this.filterRef = ref)} addLink={this.addLink} />
      </SafeAreaView>
    );
  }
}

export default CreatePostGameScreen;
