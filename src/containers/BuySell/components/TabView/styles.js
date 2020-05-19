import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  tabItem: {
    flexDirection: "row",
    paddingVertical: 6,
    width: wp("50%"),
    alignItems: "center",
    paddingLeft: 15,
    paddingVertical: 10
  },
  tabItemImage: {
    width: 64,
    height: 62,
    borderWidth: 2,
    borderRadius: 64 / 2,
    borderColor: Colors.malachite,
    alignItems: "center"
  },
  tabItemName: {
    fontSize: 14,
    lineHeight: 17,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  tabItemTitle: {
    fontSize: 14,
    lineHeight: 17,
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold"
  },
  tabItemPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.malachite,
    opacity: 0.9
  },
  activeItemContainer: {
    paddingHorizontal: 10,
    paddingTop: hp("2.5%"),
    justifyContent: "center",
    // paddingBottom: 60,
    width: wp("50%")
  },
  activeItemTitle: {
    color: "#FFF",
    fontFamily: "Rajdhani-Medium",
    fontSize: 16
  },
  activeItemSymbol: {
    color: "#FFF",
    fontFamily: "Rajdhani-Semibold",
    fontSize: 16
  },
  activeItemValue: {
    color: Colors.malachite,
    fontFamily: "Rajdhani-Semibold",
    fontSize: 16
    // fontWeight: "600"
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#ccc",
    height: 36,
    marginTop: 5,
    paddingHorizontal: 10,
    borderRadius: 18,
    fontFamily: "Rajdhani",
    fontSize: 18
  },
  list: {
    // paddingTop: hp("2.5%"),
    width: wp("50%"),
    backgroundColor: Colors.darkBackgroundColor
  },
  button: {
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.malachite
  },
  amount: {
    fontSize: 24,
    color: Colors.malachite,
    fontFamily: "Rajdhani-Semibold"
  },
  amountDecimal: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 16
    // fontWeight: "normal"
  },
  readMoreView: {
    height: 30,
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: Colors.malachite,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
