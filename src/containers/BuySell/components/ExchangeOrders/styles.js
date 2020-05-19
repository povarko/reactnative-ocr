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
  pickerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 25,
    //height: 40,
    width: "100%",
    paddingHorizontal: 20
  },
  inputIOS: {
    fontFamily: "Rajdhani",
    fontSize: 18,
    color: Colors.malachite,
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 150
  },
  inputAndroid: {
    fontFamily: "Rajdhani",
    fontSize: 18,
    color: Colors.malachite,
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 150,
    paddingLeft: 10
  },
  iconContainer: {
    right: 18,
    top: 8
  },
  tagtopView: {
    width: "100%",
    height: 40,
    marginTop: 10,
    backgroundColor: Colors.malachite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10
  },
  tagView: {
    width: "100%",
    height: 40,
    backgroundColor: Colors.darkBackgroundColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  tagViewText: {
    fontFamily: "Rajdhani",
    fontSize: 10,
    color: "#FFF"
  },
  tagItemView: {
    width: "100%",
    height: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0
  },
  list: {
    marginTop: 5
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
