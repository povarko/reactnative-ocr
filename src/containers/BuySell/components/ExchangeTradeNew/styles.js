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
  scrollViewStyle: {
    backgroundColor: "#000",
    marginTop: 20,
    paddingHorizontal: 15,
    height: "100%",
    flex: 1
  },
  tabs: {
    height: 35,
    flexDirection: "row"
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  tabActive: {
    backgroundColor: Colors.darkBackgroundColor
  },
  tabHeaderTitle: {
    fontSize: 16,
    fontFamily: "Rajdhani-Bold",
    color: "#FFF"
  },
  divideVertical: {
    width: 1,
    backgroundColor: Colors.gray
  },
  divideHorizontal: {
    height: 1,
    backgroundColor: Colors.gray,
    marginTop: 20
  },
  contents: {
    backgroundColor: Colors.darkBackgroundColor,
    flex: 1,
    padding: 20,
    marginBottom: 40
  },
  orderType: {
    flexDirection: "row"
  },
  orderTypeView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textBold: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 24
  },
  textRegular: {
    fontFamily: "Rajdhani",
    fontSize: 18
  },
  textRegular14: {
    fontFamily: "Rajdhani",
    fontSize: 14
  },
  textValueBold: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 18,
    color: Colors.malachite
  },
  button: {
    alignSelf: "center",
    height: 35,
    backgroundColor: Colors.malachite,
    width: 120,
    marginVertical: 10,
    borderRadius: 18,
    marginTop: 40
  },
  buttonLabel: {
    color: "#FFF",
    fontFamily: "Rajdhani-Bold",
    fontSize: 15
  }
});

export default styles;
