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
    height: 140,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  itemTitle: {
    color: Colors.textBlackColor,
    fontSize: 18,
    fontFamily: "Rajdhani-SemiBold"
    // height: 48
  },
  itemCost: {
    color: Colors.malachite,
    fontSize: 24,
    fontFamily: "Rajdhani-Bold",
    height: 26
  },
  photo: {
    height: 115
  },
  buttonBuy: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    width: 100,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.malachite
  },
  buyText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "Rajdhani-Bold",
    textAlign: "center"
  },
  saleText: {
    color: Colors.tundora,
    fontSize: 16,
    fontFamily: "Rajdhani-Medium",
    textAlign: "center"
  }
});

renderItem3 = ({ item, index }) => {
  return (
    <View style={styles.item}>
      <View style={{ width: 115 }}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.photo}
          resizeMode={"cover"}
        />
      </View>
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text style={styles.itemTitle}>{item.category}</Text>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemCost}>{item.price}</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonBuy}>
          <Text style={styles.buyText}>BUY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default (StoreItem = ({ data, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.saleText}>Sale </Text>
        </TouchableOpacity>
        <Text style={styles.saleText}> | </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.saleText}> Fangear </Text>
        </TouchableOpacity>
        <Text style={styles.saleText}> | </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.saleText}> New Arrivals </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={this.renderItem3}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
});
