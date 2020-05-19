import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Images, Icons, Colors } from "@AppTheme";
import { SideMenu } from "@AppComponents";
import styles from "./styles";
// import { FlatList } from "react-native-gesture-handler";

const typeData = [
  {
    name: "PROFERSSIONAL",
    icon: "user-shield"
  },
  {
    name: "SEMI-PRO",
    icon: "dumbbell"
  },
  {
    name: "AMATEUR",
    icon: "award"
  },
  {
    name: "UNIVERSITY",
    icon: "graduation-cap"
  },
  {
    name: "SCHOOL",
    icon: "school"
  },
  {
    name: "JUNIOR",
    icon: "school"
  }
];

class IssueHomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  onSelect = index => {
    const type = this.props.navigation.getParam("type", () => {});
    this.setState({
      selected: index
    });
    this.props.navigation.navigate("SportSelectIssue", { type: type });
  };

  renderItem = ({ item, index }) => {
    let { selected } = this.state;

    return (
      <TouchableOpacity
        style={{ marginTop: 20 }}
        activeOpacity={0.5}
        onPress={() => this.onSelect(index)}
      >
        <View
          style={
            selected == index ? styles.chooseItemSelected : styles.chooseItem
          }
        >
          <View style={{ width: 70, marginLeft: 10, alignItems: "center" }}>
            <FontAwesome5
              solid
              name={item.icon}
              style={{
                fontSize: 45,
                color: selected == index ? "#FFF" : Colors.malachite
              }}
            />
          </View>
          <Text style={styles.chooseItemText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const title = "";
    let { selected } = this.state;
    const type = this.props.navigation.getParam("type", () => {});
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <ImageBackground
            resizeMode="cover"
            source={Images.backgroundSmall}
            style={styles.headerBackground}
          >
            {/* <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
            </View> */}
            <View style={styles.bodyContent}>
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 30,
                  fontFamily: "Rajdhani-Bold"
                }}
              >
                WHAT TYPE OF
              </Text>
              <Text
                style={{
                  color: Colors.malachite,
                  fontSize: 42,
                  fontFamily: "Rajdhani-Bold"
                }}
              >
                {type} ARE YOU?
              </Text>
              <FlatList
                data={typeData}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </ImageBackground>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default IssueHomeScreen;
