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
import { withNavigation } from "react-navigation";
import reactotron from "reactotron-react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
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
    height: 168,
    flexDirection: "row",
    padding: 10
  },
  itemTitle: {
    color: Colors.textBlackColor,
    fontSize: 18,
    fontFamily: "Rajdhani-Bold",
    lineHeight: 25
  },
  itemdetails: {
    color: Colors.textBlackColor,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium",
    maxHeight: 80
  },
  itemReadmore: {
    color: Colors.malachite,
    fontSize: 14,
    fontFamily: "Rajdhani-Bold",
    marginTop: 8
  },
  photo: {
    width: 120,
    height: 119.27
  }
});

const GamePlanItem = ({ data, onPress }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.item,
          index % 2 != 0 && { flexDirection: "row-reverse" }
        ]}
      >
        <View style={{ flex: 0.6, paddingHorizontal: 5 }}>
          <Text style={styles.itemTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.itemdetails}>{item.text}</Text>
          <Text onPress={() => onPress(index)} style={styles.itemReadmore}>
            Read more
          </Text>
        </View>
        <View style={{ flex: 0.4 }}>
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.photo}
            resizeMode="contain"
          />
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
};

export default withNavigation(GamePlanItem);
