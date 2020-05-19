import { StyleSheet, Platform } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "#000"
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
    width: hp("9%"),
    height: hp("9%"),
    top: 10
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 6,
    flexDirection: "row"
  },
  title: {
    fontFamily: "Rajdhani-Semibold",
    color: "#FFF",
    fontSize: hp("3.7%")
  },
  amount: {
    color: Colors.malachite,
    fontSize: hp("3.7%")
  },
  amountDecimal: {
    fontSize: hp("3.7%")
  },
  searchBar: {
    flexDirection: "row",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.malachite,
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 7
  },
  searchInput: {
    fontFamily: "Rajdhani-Medium",
    height: 34,
    flex: 1,
    fontSize: 13,
    marginLeft: 8,
    color: "#FFF",
    top: Platform.OS === "android" ? 3 : 0
  }
});
