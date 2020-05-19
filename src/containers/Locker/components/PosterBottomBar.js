import React from "react";
import { Button, Text } from "@AppComponents";
import { StyleSheet, View, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors, Icons } from "@AppTheme";
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  dailyChangeView: {
    height: 36,
    marginTop: -36,
    backgroundColor: "#333",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  dailyChangeTitle: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Rajdhani",
    marginLeft: 10
  },
  dailyChangePhoto: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.malachite,
    backgroundColor: "#FFF",
    marginLeft: 10
  },
  dailyChangeRightArrow: {
    width: 12,
    height: 8,
    marginRight: 20
  },
  changeValue: {
    color: Colors.malachite,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "Rajdhani-Bold"
  },
  changeIcon: {
    fontSize: 24
  },
  button: {
    width: 60,
    height: 20,
    backgroundColor: Colors.malachite,
    borderRadius: 15
  }
});

const PosterBottomBar = ({ data, navigation }) => (
  <View style={styles.dailyChangeView}>
    <Image
      source={data.image}
      style={styles.dailyChangePhoto}
      resizeMode={"cover"}
    />
    <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
      <Text style={[styles.dailyChangeTitle, { marginRight: 10 }]}>
        {data.symbol}
      </Text>
      <FontAwesome5
        solid
        name={data.change >= 0 ? "caret-up" : "caret-down"}
        style={[
          styles.changeIcon,
          {
            color: data.change >= 0 ? Colors.malachite : "red"
          }
        ]}
      />
      <Text style={styles.changeValue}>{data.change}%</Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Button
        title="BUY"
        textStyle={{ fontSize: 10 }}
        style={styles.button}
        onPress={() => {
          navigation.navigate("BuySellMain", {
            type: "BUY",
            username: data.name
          });
        }}
      />
      <Image source={Icons.arrowRight} style={styles.dailyChangeRightArrow} />
    </View>
  </View>
);

export default withNavigation(PosterBottomBar);
