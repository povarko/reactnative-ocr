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

class AddSocialScreen extends React.Component {
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
                <Text style={styles.textTitle}>STEP 5: </Text>
                <Text style={styles.textTitle1}>ADD SOCIAL MEDIA</Text>
              </View>
              <View style={{ width: 20 }} />
            </View>
            <View style={styles.header2}>
              <Text style={styles.profileCompletion}>PROFILE COMPLETION</Text>
              <View style={{ alignItems: "center" }}>
                <View style={styles.profileCompletionBackground}>
                  <View style={styles.profileCompletionProgress} />
                </View>
                <Text style={styles.profileCompletionText}>
                  100%{" "}
                  <Text
                    style={[
                      styles.profileCompletionText,
                      { color: Colors.malachite }
                    ]}
                  >
                    COMPLETED!
                  </Text>
                </Text>
              </View>
            </View>
            <ScrollView style={{ backgroundColor: "#000" }}>
              <View style={styles.bodyContent}>
                <View style={styles.bioContent}>
                  <View style={{ marginTop: 10 }}>
                    <Text>SELECT SOCIAL PLATFORMS</Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: 1,
                      backgroundColor: "#FFF",
                      marginTop: 10
                    }}
                  />
                  <View style={{ padding: 10, alighItems: "center" }}>
                    <TouchableOpacity
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: Colors.malachite,
                        alignItems: "center",
                        // justifyContent: "center",
                        flexDirection: "row"
                      }}
                    >
                      <View style={{ width: 80, alignItems: "center" }}>
                        <FontAwesome5
                          solid
                          name="twitter"
                          style={{
                            fontSize: 28,
                            color: "#FFF",
                            marginHorizontal: 20
                          }}
                        />
                      </View>
                      <Text style={styles.saveText}>TWITTER</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 25,
                        borderColor: Colors.malachite,
                        borderWidth: 1,
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: 10
                      }}
                    >
                      <View style={{ width: 80, alignItems: "center" }}>
                        <FontAwesome5
                          solid
                          name="facebook-f"
                          style={{
                            fontSize: 28,
                            color: "#FFF",
                            marginHorizontal: 20
                          }}
                        />
                      </View>
                      <Text style={styles.saveText}>FACEBOOK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 25,
                        borderColor: Colors.malachite,
                        borderWidth: 1,
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: 10
                      }}
                    >
                      <View style={{ width: 80, alignItems: "center" }}>
                        <FontAwesome5
                          solid
                          name="instagram"
                          style={{
                            fontSize: 28,
                            color: "#FFF",
                            marginHorizontal: 20
                          }}
                        />
                      </View>
                      <Text style={styles.saveText}>INSTAGRAM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 25,
                        borderColor: Colors.malachite,
                        borderWidth: 1,
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: 10
                      }}
                    >
                      <View style={{ width: 80, alignItems: "center" }}>
                        <FontAwesome5
                          solid
                          name="linkedin-in"
                          style={{
                            fontSize: 28,
                            color: "#FFF",
                            marginHorizontal: 20
                          }}
                        />
                      </View>
                      <Text style={styles.saveText}>LINKEDIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: "100%",
                        height: 50,
                        borderRadius: 25,
                        borderColor: Colors.malachite,
                        borderWidth: 1,
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: 10
                      }}
                    >
                      <View style={{ width: 80, alignItems: "center" }}>
                        <FontAwesome5
                          solid
                          name="youtube"
                          style={{
                            fontSize: 28,
                            color: "#FFF",
                            marginHorizontal: 20
                          }}
                        />
                      </View>
                      <Text style={styles.saveText}>YOUTUBE</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      marginRight: 15
                    }}
                  >
                    <Text style={styles.helpSupportText}>Add Other</Text>
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
                  this.props.navigation.navigate("IssueSuccess", { type: type })
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

export default AddSocialScreen;
