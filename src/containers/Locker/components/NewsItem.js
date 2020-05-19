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
import { Colors } from "@AppTheme";

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
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  itemTitle: {
    color: Colors.textBlackColor,
    fontSize: 14,
    fontFamily: "Rajdhani-Bold",
    height: 20
  },
  itemdetails: {
    color: Colors.textBlackColor,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium",
    height: 40
  },
  itemReadmore: {
    color: Colors.malachite,
    fontSize: 14,
    fontFamily: "Rajdhani-Bold"
  },
  photo: {
    height: 72
  }
});

export default (NewsItem = ({ data, onPress }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <View style={{ width: 80 }}>
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.photo}
            resizeMode={"cover"}
          />
        </View>
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={styles.itemTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.itemdetails}>{item.text}</Text>
          <Text onPress={() => onPress(index)} style={styles.itemReadmore}>
            Read more
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
});
