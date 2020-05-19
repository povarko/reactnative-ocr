import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "space-between"
  },
  menuIcon: {
    position: "absolute",
    right: 20,
    top: 20,
    width: 20,
    height: 16
  },
  logo: {
    alignSelf: "center",
    width: hp("10%"),
    height: hp("10%"),
    marginTop: 20
  },
  title: {
    fontFamily: "Rajdhani-Bold",
    color: "#FFF",
    fontSize: hp("3.3%"),
    textAlign: "center"
  }
});
