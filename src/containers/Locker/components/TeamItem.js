import React from "react";
import { View, StyleSheet, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import Entypo from "react-native-vector-icons/Entypo";
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
    fontFamily: "Rajdhani-Bold",
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
  stakeTitle: {
    color: Colors.malachite,
    fontSize: 16,
    fontFamily: "Rajdhani"
  }
});

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default (TeamItem = ({ data, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Image
          source={data.image}
          // source={{ uri: data.image }}
          style={styles.photo}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.stakeTitle}>
            STX <Text style={styles.stakeCount}>{data.stakeCount}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.usdValue}>
            ${data.usdValue ? numberWithCommas(data.usdValue) : ""}
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
      <Entypo name="chevron-thin-right" style={styles.rightIcon} />
    </View>
  );
});
