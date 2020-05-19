import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderBottomWidth: 1,
    borderColor: "#707070",
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  leftView: {
    // marginLeft: 10,
    // width: 36,
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  photo: {
    width: 24,
    height: 24,
    borderRadius: 12,
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
    fontSize: 14,
    fontFamily: "Rajdhani-Bold"
  }
});

export default (TeamPlayerItem = ({ data, onPress }) => {
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
        </View>
      </View>
      <TouchableOpacity>
        <FontAwesome5
          regular
          name="check-circle"
          style={{
            fontSize: 19,
            color: Colors.malachite
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5
          regular
          name="times-circle"
          style={{
            fontSize: 19,
            color: "#DF0006",
            marginLeft: 10
          }}
        />
      </TouchableOpacity>
    </View>
  );
});
