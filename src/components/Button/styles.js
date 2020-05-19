import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    backgroundColor: Colors.forestGreen
  },
  container0: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  title: {
    color: "#FFF",
    fontSize: wp("3.8%"),
    fontFamily: "Rajdhani-Semibold"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    // width: "10%"
  },
});
