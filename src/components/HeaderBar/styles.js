import { StyleSheet, Platform } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#1A1A1A",
    height: 72,
    paddingHorizontal: 20,
    overflow: "hidden",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderColor: Colors.malachite
  },
  menuIcon: {
    width: 27,
    height: 24
  },
  logo: {
    width: 54,
    height: 33
  },
  title: {
    textAlign: "center",
    fontFamily: "Rajdhani-Bold",
    color: "#FFF",
    fontSize: 20,
    textTransform: "uppercase"
  }
});
