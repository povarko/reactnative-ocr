import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.textBlackColor,
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: getStatusBarHeight()
  },
  button: {
    alignSelf: "center",
    height: 40,
    backgroundColor: Colors.malachite,
    width: wp("70%"),
    marginVertical: 20,
    borderRadius: 25
  },
  buttonLabel: {
    color: "#FFF",
    fontSize: 17
  }
});
