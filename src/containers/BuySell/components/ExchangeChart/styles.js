import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#000"
    // flex: 1
  },
  candleChart: {
    height: "50%",
    marginTop: 10
    // flex: 1
  },
  graphTitle: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Rajdhani-Bold",
    paddingBottom: 10
  },
  candleGraphView: {
    backgroundColor: "#CCC",
    height: 200,
    width: "115%",
    marginLeft: -25
  },
  rowView: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center"
  },
  pickerItem: {
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: "100%"
    // padding: 1,
    // paddingHorizontal: 15
  },
  inputIOS: {
    fontFamily: "Rajdhani",
    fontSize: 24,
    color: Colors.malachite,
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 150
  },
  inputAndroid: {
    fontFamily: "Rajdhani",
    fontSize: 24,
    color: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 150
  },
  iconContainer: {
    right: 18,
    top: 8
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
