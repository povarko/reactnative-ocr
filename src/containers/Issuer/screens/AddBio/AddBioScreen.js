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

class AddBioScreen extends React.Component {
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
                <Text style={styles.textTitle}>STEP 1: </Text>
                <Text style={styles.textTitle1}>
                  {type === "TEAM" ? "ADD TEAM BIO" : "ADD BIOGRAPHY"}
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
                  { fontSize: 12, marginLeft: wp("15%"), marginBottom: 20 }
                ]}
              >
                20%
              </Text>
            </View>
            <ScrollView style={{ backgroundColor: "#000" }}>
              <View style={styles.bodyContent}>
                <View style={styles.bioContent}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text>UPLOAD BIOGRAPHY</Text>
                    <FontAwesome5
                      solid
                      name="cloud-upload-alt"
                      style={{
                        fontSize: 16,
                        color: Colors.malachite
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: 1,
                      backgroundColor: "#FFF",
                      marginTop: 10
                    }}
                  />
                  <View style={{ marginTop: 10 }}>
                    <Text>CREATE BIOGRAPHY</Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Input
                      placeholder="Header here"
                      placeholderTextColor="#FFF"
                      labelStyle={styles.label}
                      inputStyle={styles.placeholderText}
                      style={styles.inputItem2}
                    />
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <TextInput
                      placeholder="Content copy here..."
                      placeholderTextColor="#FFF"
                      style={styles.inputItem3}
                      multiline={true}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 20,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 10
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        width: 72,
                        height: 24,
                        borderRadius: 12,
                        backgroundColor: Colors.malachite,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Text style={styles.saveText}>SAVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <Text>Add image</Text>
                      <FontAwesome5
                        solid
                        name="cloud-upload-alt"
                        style={{
                          fontSize: 16,
                          color: Colors.malachite,
                          marginLeft: 10
                        }}
                      />
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
                    <Text style={styles.helpSupportText}>
                      Add Biography Gallery
                    </Text>
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
                  this.props.navigation.navigate("AddPlan", { type: type })
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

export default AddBioScreen;
