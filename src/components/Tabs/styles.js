import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  tabs: {
    height: wp("10%"),
    flexDirection: "row"
    //alignItems: "center"
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: wp("10%")
  },
  tabText: {
    fontSize: wp("4.8%"),
    fontFamily: "Rajdhani-Semibold",
    color: Colors.malachite
  },
  leftBorder: {
    borderTopColor: "#f4f4f4",
    borderLeftColor: "#f4f4f4",
    borderTopWidth: 0.3,
    borderLeftWidth: 0.3
  },
  rightBorder: {
    borderTopColor: "#f4f4f4",
    borderRightColor: "#f4f4f4",
    borderTopWidth: 0.3,
    borderRightWidth: 0.3
  }
});

export default styles;
