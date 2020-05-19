import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, SideMenu, Input } from "@AppComponents";
import styles from "./styles";
import { Images, Icons, Colors } from "@AppTheme";
import ImagePicker from "react-native-image-crop-picker";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class AddNewsScreen extends React.Component {
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
      return { uri: imageSource.sourceURL };
    } else {
      return ""; //Images.user;
    }
  };

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
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.textTitle}>STEP 3: </Text>
                <Text style={styles.textTitle1}>
                  {type === "TEAM" ? "ADD TEAM NEWS" : "ADD NEWS"}
                </Text>
              </View>
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
                  { fontSize: 12, marginLeft: wp("27.5%"), marginBottom: 20 }
                ]}
              >
                50%
              </Text>
            </View>
            <ScrollView style={{ backgroundColor: "#000" }}>
              <View style={styles.bodyContent}>
                <View style={styles.bioContent}>
                  <View style={{ marginTop: 10 }}>
                    <Text>ADD LINK HERE</Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Input
                      placeholder="Title"
                      placeholderTextColor="#FFF"
                      labelStyle={styles.label}
                      inputStyle={styles.inputSmall}
                      style={styles.inputItem2}
                    />
                  </View>
                  <View style={{ marginTop: 0 }}>
                    <Input
                      placeholder="Url link..."
                      placeholderTextColor="#FFF"
                      labelStyle={styles.label}
                      inputStyle={styles.inputSmall}
                      style={styles.inputItem2}
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
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 20,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      marginBottom: 10
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        width: 72,
                        height: 24,
                        borderRadius: 12,
                        borderColor: Colors.malachite,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1
                      }}
                    >
                      <Text style={styles.saveText}>SAVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: 72,
                        height: 24,
                        borderRadius: 12,
                        borderColor: Colors.malachite,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        marginLeft: 20
                      }}
                    >
                      <Text style={styles.saveText}>POST</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: wp("84%"),
                    marginLeft: wp("8%"),
                    marginTop: 20,
                    marginBottom: 20
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
                    <Text style={styles.helpSupportText}>Add More News</Text>
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
            </ScrollView>
            <View style={styles.processdView}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.proceedButtonView}
                onPress={() =>
                  this.props.navigation.navigate("AddBlog", { type: type })
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

export default AddNewsScreen;
