import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import { Colors, Icons } from "@AppTheme";
import PosterBottomBar from "./PosterBottomBar";
// import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFF"
  },
  header: {
    height: 48,
    backgroundColor: Colors.malachite,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Rajdhani-Bold"
  },
  item: {
    flex: 1,
    height: 165,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  itemTitle: {
    color: Colors.textBlackColor,
    fontSize: 18,
    fontFamily: "Rajdhani-Bold"
  },
  itemdetails: {
    color: Colors.textBlackColor,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium",
    height: 100
  },
  changeValue: {
    color: Colors.malachite,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "Rajdhani-SemiBold"
  },
  changeIcon: {
    fontSize: 24
  },
  list: {
    // flex: 1
  },
  photo: {
    width: width / 3 - 20,
    height: width / 3 - 20,
    flex: 1,
    backgroundColor: "#FFF"
  }
});

class AboutExpandItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", margin: 5 }}>
        <TouchableOpacity activeOpacity={0.8} style={{ width: "100%" }}>
          <Image
            source={{ uri: item }}
            style={styles.photo}
            resizeMode={"cover"}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const data = this.props.data;
    return (
      <View style={styles.container}>
        <View style={styles.moreHeader}>
          <Text style={styles.moreHeaderText}>ABOUT</Text>
        </View>
        <View style={{ marginTop: 35 }}>
          <PosterBottomBar data={this.props.data} />
        </View>
        <ScrollView style={{ backgroundColor: "#FFF" }}>
          <View style={{ flexDirection: "row", height: 260, padding: 10 }}>
            <Image
              source={{ uri: data.story[0].photo }}
              style={{ width: 100, height: 240 }}
              resizeMode={"cover"}
            />
            <View style={{ flex: 1, marginLeft: 12, marginTop: 0 }}>
              <Text
                style={{
                  color: Colors.textBlackColor,
                  fontSize: 23,
                  fontFamily: "Rajdhani-Bold"
                }}
              >
                {data.name} BIOGRAPHY
              </Text>
              <Text
                style={{
                  color: Colors.textBlackColor,
                  fontSize: 14,
                  fontFamily: "Rajdhani-Medium"
                }}
              >
                {data.story[0].text}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                flex: 1,
                color: Colors.textBlackColor,
                fontSize: 14,
                fontFamily: "Rajdhani-Medium"
              }}
            >
              {this.props.data.story.text}
            </Text>
          </View>
          <Text
            style={{
              marginLeft: 10,
              color: Colors.textBlackColor,
              fontSize: 18,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            {data.name} TIME LINE GALLERY
          </Text>
          <FlatList
            data={data.story[0].gallery}
            renderItem={this.renderItem}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
          />
        </ScrollView>
      </View>
    );
  }
}

AboutExpandItem.propTypes = {};
export default AboutExpandItem;
