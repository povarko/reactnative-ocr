import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  },
  listItem: {
    height: 110,
    borderBottomWidth: 0.5,
    borderColor: Colors.malachite,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12
  },
  subtile: {
    fontSize: 13,
    fontFamily: "Rajdhani-Semibold",
    color: "#FFF",
    marginTop: 4
  },
  content: {
    width: 1,
    height: 70,
    backgroundColor: Colors.dustyGray,
    marginHorizontal: 20
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    color: Colors.malachite,
    fontSize: 24,
    fontFamily: "Rajdhani-Semibold"
  },
  rate: {
    color: Colors.malachite,
    fontSize: 24,
    fontFamily: "Rajdhani-Semibold"
  },
  token: {
    color: Colors.alabaster,
    fontSize: wp("5.4%"),
    fontFamily: "Rajdhani-Light"
  },
  price: {
    color: Colors.alabaster,
    fontSize: wp("5.4%"),
    fontFamily: "Rajdhani-Light"
  },
  valueTitle: {
    color: Colors.alabaster,
    fontSize: wp("5.4%"),
    fontFamily: "Rajdhani-Medium"
  },
  value: {
    color: Colors.alabaster,
    fontSize: wp("5.4%"),
    fontFamily: "Rajdhani-Medium"
  }
});

export default styles;
