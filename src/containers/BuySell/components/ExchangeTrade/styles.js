import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  rowView: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center"
  },
  pickerItem1: {
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: "100%",
    marginBottom: 20
    // padding: 1,
    // paddingHorizontal: 15
  },
  pickerItem: {
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 168
    // padding: 1,
    // paddingHorizontal: 15
  },
  tradeOptionText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Rajdhani-SemiBold"
  },
  inputViews: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    marginTop: 20,
    padding: 0
  },
  input1: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 18,
    color: "#FFF",
    padding: 0,
    paddingHorizontal: 15,
    // paddingVertical: 10,
    width: "70%"
    // height: 36
  },
  stakeView: {
    width: "30%",
    alignItems: "center"
  },
  stakesText: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 18,
    color: Colors.malachite
  },
  exchangeFeeText: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Rajdhani"
  },
  exchangeFeeText1: {
    color: Colors.malachite,
    fontSize: 14,
    fontFamily: "Rajdhani-SemiBold"
  },
  roundButton: {
    marginTop: 20,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: Colors.malachite
  },
  roundButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "Rajdhani-Bold"
  },
  inputIOS: {
    fontFamily: "Rajdhani",
    fontSize: 16,
    color: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    minWidth: 150
  },
  inputAndroid: {
    fontFamily: "Rajdhani",
    fontSize: 16,
    color: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    minWidth: 150
  },
  iconContainer: {
    right: 12,
    top: 10
  },

  dropOverView: {
    alignSelf: "flex-end",
    marginTop: -34,
    marginBottom: 20,
    marginRight: 10,
    width: "95%",
    height: 28,
    backgroundColor: "#000"
  },

  dropdown_2: {
    alignSelf: "flex-end",
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#C6C6C6"
  },
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani",
    textAlignVertical: "center",
    marginHorizontal: 20
  },
  dropdown_2_dropdown: {
    height: 120,
    width: "85%",
    backgroundColor: "#000",
    borderWidth: 0,
    marginTop: 2
  },
  dropdown_2_separator: {
    height: 0.5,
    marginLeft: 10,
    backgroundColor: "#FFF"
  }
});

export default styles;
