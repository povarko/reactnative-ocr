import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A"
  },
  header: {
    height: 64,
    marginTop: 12,
    marginLeft: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  rightMenu: {
    width: 7,
    height: 29,
    marginTop: 10,
    marginRight: 20
  },
  stake: {
    color: Colors.malachite,
    fontSize: 18,
    fontFamily: "Rajdhani-Bold",
    textTransform: "uppercase"
  },
  stakeValue: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Rajdhani-Bold",
    textTransform: "uppercase"
  },
  photo: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: Colors.malachite,
    backgroundColor: "#FFF"
    // padding: 10
  },
  subTitle: {
    color: Colors.malachite,
    fontSize: 24,
    fontFamily: "Rajdhani-Bold",
    textTransform: "uppercase"
  },
  graph: {
    height: 200,
    width: wp("100%") - 10,
    marginLeft: -20
  },
  confirmtext: {
    fontSize: 18,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  tradingtext: {
    fontSize: 14,
    color: Colors.malachite,
    fontFamily: "Rajdhani"
  },
  timetext: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "Rajdhani"
  },
  pickerItem: {
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 190
    // padding: 1,
    // paddingHorizontal: 15
  },
  inputIOS: {
    fontFamily: "Rajdhani",
    fontSize: 16,
    color: Colors.malachite,
    paddingVertical: 10,
    paddingHorizontal: 10,
    minWidth: 160
  },
  inputAndroid: {
    fontFamily: "Rajdhani",
    fontSize: 16,
    color: Colors.malachite,
    paddingVertical: 10,
    paddingHorizontal: 10,
    minWidth: 160
  },
  iconContainer: {
    right: 12,
    top: 10
  },
  dropOverView: {
    alignSelf: "flex-end",
    marginTop: -34,
    marginBottom: 10,
    marginRight: 10,
    width: 200,
    height: 28,
    backgroundColor: "#000"
  },

  dropdown_2: {
    alignSelf: "flex-end",
    width: 220,
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
