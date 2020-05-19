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

class CreatePostSocialScreen extends React.Component {
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
    const title = "CREATE POST";
    const type = this.props.navigation.getParam("type", () => {});
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
                    <Text style={styles.subtitle1}>
                      LINK FOR{" "}
                      <Text style={styles.subtitle2}>
                        SOCIAL MEDIA PLATFORM
                      </Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: 1,
                      backgroundColor: "#FFF",
                      marginTop: 10
                    }}
                  />
                  <View
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      alighItems: "center"
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        width: "100%",
                        height: 72,
                        backgroundColor: "#00ACEE",
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
                        height: 72,
                        backgroundColor: "#3B5998",
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
                        height: 72,
                        backgroundColor: "#E1306C",
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
                        height: 72,
                        backgroundColor: "#0077B5",
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
                        height: 72,
                        backgroundColor: "#DF0006",
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
                      marginRight: 10,
                      marginTop: 10,
                      marginBottom: 10
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
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default CreatePostSocialScreen;
