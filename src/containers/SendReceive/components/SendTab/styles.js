import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 16
  },
  label: {
    color: Colors.tundora,
    fontSize: 17,
    fontFamily: "Rajdhani-Medium",
    marginBottom: 5
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 11,
    width: wp("80%")
  },
  amount: {
    color: Colors.forestGreen,
    fontFamily: "Rajdhani-Bold",
    fontSize: wp("5.6%")
  },
  amountDecimal: {
    fontFamily: "Rajdhani-Medium",
    fontWeight: "normal"
  },
  button: {
    width: wp("90%"),
    height: 45,
    backgroundColor: Colors.forestGreen,
    marginTop: 30,
    marginBottom: 50
  },
  inputIOS: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 15,
    color: Colors.forestGreen,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 1,
    minWidth: 150
  },
  inputAndroid: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 15,
    color: Colors.forestGreen,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 1,
    minWidth: 150
  },
  iconContainer: {
    right: 12,
    top: 10
  }
});
