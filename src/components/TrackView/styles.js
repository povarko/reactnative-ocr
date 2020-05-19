import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingTop: 2,
    paddingBottom: 70
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 20,
    height: 90
  },
  avatar: {
    width: wp("12%"),
    height: wp("12%"),
    borderRadius: wp("12%") / 2
  },
  avatarContainer: {
    width: wp("14%"),
    height: wp("14%"),
    borderRadius: wp("14%") / 2,
    borderWidth: 2,
    borderColor: Colors.forestGreen,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.dustyGray,
    overflow: "hidden"
  },
  title: {
    color: Colors.tundora,
    fontSize: wp("4.8%"),
    fontFamily: "Rajdhani-Semibold",
    textTransform: "uppercase"
  },
  symbol: {
    color: Colors.tundora,
    fontFamily: "Rajdhani-Medium",
    fontSize: 16,
    marginTop: 3
  },
  buttonTitle: {
    fontSize: 16,
    fontFamily: "Rajdhani-Bold"
  },
  button: {
    paddingVertical: 4,
    marginLeft: 15,
    marginTop: 3,
    width: 100
  },
  price: {
    color: Colors.tundora,
    fontFamily: "Rajdhani-Bold",
    fontSize: wp("4.8%")
  },
  change: {
    color: Colors.forestGreen,
    fontSize: wp("4.4%"),
    fontFamily: "Rajdhani-Bold",
    marginLeft: 6
  }
});
