import { StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors } from "@AppTheme";
const { width, height } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackgroundColor
  },
  bodyContent: {
    paddingBottom: 0,
    backgroundColor: "#000",
    flex: 1
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000"
  },
  content: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingTop: 25
  },
  subTitle: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 30,
    textAlign: "center"
  },
  list: {
    width: wp("85%"),
    marginTop: 12
  },
  itemText: {
    fontFamily: Fonts.type.rajdhani,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 10
  },
  itemCheck: {
    width: 20,
    height: 20,
    marginLeft: 5
  },
  buttonView: {
    width: wp("75%"),
    height: 48,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    borderColor: "#26C91E",
    borderWidth: 1
  },
  buttonText: {
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 20,
    color: "#FFF"
  }
});
