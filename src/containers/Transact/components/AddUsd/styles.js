import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  content: {
    alignItems: "center",
    paddingBottom: hp("40%")
  },
  currency: {
    color: Colors.tundora,
    fontSize: wp("4.8%"),
    fontFamily: "Rajdhani-Bold",
    opacity: 0.9
  },
  addCashContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: 12
  },
  addCashText: {
    fontSize: wp("4.8%"),
    fontFamily: "Rajdhani-Bold",
    color: Colors.tundora,
    opacity: 0.9,
    marginHorizontal: 10,
    marginTop: 10
  },
  search: {
    paddingVertical: 4,
    fontSize: 17,
    width: 120,
    height: 28,
    fontFamily: "Rajdhani-Semibold",
    opacity: 0.8
  },
  searchContainer: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 6,
    marginLeft: 10,
    marginTop: 10
  },
  title: {
    color: Colors.tundora,
    fontFamily: "Rajdani-Medium",
    fontSize: 16
  },
  chevron: {
    width: 20,
    height: 20,
    tintColor: Colors.forestGreen
  },
  amount: {
    color: Colors.tundora,
    fontFamily: "Rajdhani-Bold",
    fontSize: wp("5.8%"),
    opacity: 0.9
  },
  addressTitle: {
    color: Colors.tundora,
    fontSize: wp("4%"),
    fontFamily: "Rajdhani-Bold"
  },
  addressContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    alignSelf: "flex-start",
    justifyContent: "space-between"
  },
  address: {
    color: Colors.tundora,
    fontSize: wp("3.7%"),
    fontFamily: "Rajdhani-Medium"
  },
  icon: {
    width: 19,
    height: 19
  },
  driveCointTitle: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 26,
    color: Colors.tundora,
    textAlign: "center"
  }
});
