import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import { Colors, Images } from "@AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
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
    height: 160,
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
  itemReadmore: {
    color: Colors.malachite,
    fontSize: 14,
    fontFamily: "Rajdhani-Bold"
  },
  photo: {
    height: 144
  },
  itemLike: {
    color: Colors.textBlackColor,
    fontSize: 12,
    fontFamily: "Rajdhani-SemiBold"
  }
});

renderItem4 = ({ item, index }) => {
  return (
    <View style={{ padding: 12 }}>
      <View
        style={{
          flexDirection: "row",
          height: 260,
          marginBottom: 15
        }}
      >
        <Image
          source={{ uri: item.photo }}
          style={{ width: 100, height: 240 }}
          resizeMode="cover"
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text
            style={{
              color: Colors.textBlackColor,
              fontSize: 23,
              fontFamily: "Rajdhani-Bold",
              lineHeight: 25
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: Colors.textBlackColor,
              fontSize: 14,
              fontFamily: "Rajdhani-Medium"
            }}
          >
            {item.text}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 0.8 }}>
          <Text
            numberOfLines={4}
            style={{
              color: Colors.textBlackColor,
              fontSize: 14,
              fontFamily: "Rajdhani-Medium"
            }}
          >
            {item.text}
          </Text>
        </View>
        <View style={{ flex: 0.2, alignItems: "flex-end" }}>
          <Image
            source={Images.team1}
            style={{ width: 60, height: 60 }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};
export default (AboutItem = ({ data, onPress }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={this.renderItem4}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
});
