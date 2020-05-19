import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, SideMenu, Input } from "@AppComponents";
import styles from "./styles";
import { Images, Icons, Colors } from "@AppTheme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class CreatePostNewsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const title = "CREATE POST";
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
                    <Text style={styles.subTitle}>CREATE NEWS POST BELOW</Text>
                  </View>
                  <View style={{ marginTop: 20, marginLeft: 10 }}>
                    <Text style={[styles.subTitle, { fontSize: 14 }]}>
                      ADD LINK HERE
                    </Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Input
                      placeholder="Title"
                      placeholderTextColor="#FFF"
                      labelStyle={styles.label}
                      inputStyle={styles.inputSmall}
                      style={styles.inputItem2}
                      onChangeText={this.onLastNameChange}
                    />
                  </View>
                  <View style={{ marginTop: 0 }}>
                    <Input
                      placeholder="Url link..."
                      placeholderTextColor="#FFF"
                      labelStyle={styles.label}
                      inputStyle={styles.inputSmall}
                      style={styles.inputItem2}
                      onChangeText={this.onLastNameChange}
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
                    <TouchableOpacity
                      style={{ position: "absolute", top: 15, right: 15 }}
                    >
                      <FontAwesome5
                        name="trash-alt"
                        style={{
                          fontSize: 15,
                          color: Colors.malachite
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 20
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
                      <Text style={styles.helpSupportText}>Add Another</Text>
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
                </View>
              </View>
            </ScrollView>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default CreatePostNewsScreen;
