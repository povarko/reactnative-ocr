import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import { Colors } from "@AppTheme";
// import { TouchableOpacity } from "react-native-gesture-handler";

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
    fontSize: 24,
    left: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  name: {
    fontSize: 16,
    fontFamily: "Rajdhani-Bold",
    textTransform: "uppercase"
  },
  stakeCount: {
    fontSize: 16,
    fontFamily: "Rajdhani-SemiBold",
    color: Colors.malachite
  },
  usdValue: {
    fontSize: 20,
    fontFamily: "Rajdhani-Semibold",
    width: 80
  },
  changeValue: {
    marginLeft: 8,
    fontSize: 13
  },
  changeIcon: {
    fontSize: 24,
    left: 4
  },
  trackButton: {
    width: 60,
    height: 23,
    borderRadius: 12,
    borderColor: Colors.malachite,
    borderWidth: 1,
    alignItems: "center",
    marginLeft: 18
  },
  trackButtonText: {
    fontSize: 14,
    fontFamily: "Rajdhani-Bold",
    color: "#FFF"
  }
});

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default (ScoutAthleteTrackItem = ({ data, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Image source={data.image} style={styles.photo} resizeMode={"cover"} />
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <View>
            <Text style={styles.name}>{data.name}</Text>
            <View style={styles.row}>
              <Text style={styles.usdValue}>
                ${data.price ? numberWithCommas(data.price) : ""}
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
                <Text style={styles.changeValue}>{data.change}%</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => onPress()}>
            <View style={styles.trackButton}>
              <Text style={styles.trackButtonText}>TRACK</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Entypo name={"chevron-thin-right"} style={styles.rightIcon} />
    </View>
  );
});
