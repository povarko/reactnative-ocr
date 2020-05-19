import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  container: {
    height: 72,
    borderWidth: 1,
    borderColor: Colors.malachite,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 12
  },
  leftView: {
    width: 72,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: Colors.tundora
  },
  photo: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: Colors.malachite,
    backgroundColor: "#FFF"
  },
  body: {
    flex: 1,
    paddingHorizontal: 12
  },
  rightIcon: {
    color: "#FFF",
    fontSize: 24
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  name: {
    fontSize: 16,
    fontFamily: "Rajdhani-Bold"
  },
  stakeCount: {
    fontSize: 16,
    fontFamily: "Rajdhani",
    color: Colors.malachite
  },
  stakeCountBold: {
    fontSize: 16,
    fontFamily: "Rajdhani-SemiBold",
    color: Colors.malachite
  },
  usdValue: {
    fontSize: 20,
    fontFamily: "Rajdhani-Semibold"
  },
  changeValue: {
    marginLeft: 8,
    fontSize: 13
  },
  changeIcon: {
    fontSize: 24
  },
  deleteIcon: {
    fontSize: 20,
    color: Colors.malachite
  }
});

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default (TeamTrackItem = ({ data, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Image
          source={{ uri: data.photo }}
          style={styles.photo}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.stakeCount}>
            STX: <Text style={styles.stakeCountBold}>{data.lon}</Text>{" "}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.usdValue}>
            ${data.usdValue ? numberWithCommas(0) : ""}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5
              solid
              name={data.change >= 0 ? "caret-up" : "caret-down"}
              style={[
                styles.changeIcon,
                { color: data.change >= 0 ? Colors.malachite : "red" }
              ]}
            />
            <Text style={styles.changeValue}>{data.lat}%</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <FontAwesome5 name={"times-circle"} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <FontAwesome5 solid name={"chevron-right"} style={styles.rightIcon} />
    </View>
  );
});
