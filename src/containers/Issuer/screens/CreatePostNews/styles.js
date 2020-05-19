import { StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors } from "@AppTheme";
const { width, height } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackgroundColor
  },
  bodyContent: {
    paddingBottom: 0,
    flex: 1,
    backgroundColor: "#000"
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000"
  },
  teamImage: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: Colors.malachite,
    borderRadius: 6
    // marginTop: 5
  },
  processdView: {
    height: 80,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  proceedButtonView: {
    width: 140,
    height: 36,
    backgroundColor: Colors.malachite,
    borderWidth: 1,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center"
  },
  proceedText: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  subTitle: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani"
  },
  icons: {
    width: 16,
    height: 16,
    tintColor: Colors.malachite,
    marginLeft: -32,
    marginTop: -10,
    marginRight: 20
  },
  helpSupportText: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: "Rajdhani"
  },
  saveText: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium"
  },
  bioContent: {
    marginLeft: wp("8%"),
    width: wp("84%"),
    borderWidth: 0.5,
    borderTopWidth: 5,
    borderColor: Colors.malachite,
    padding: 14,
    marginTop: 20,
    backgroundColor: Colors.darkBackgroundColor
  },
  inputItem2: {
    width: "100%",
    height: 40,
    borderRadius: 16
  },
  inputItem3: {
    width: "100%",
    height: 110,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#AAA",
    borderWidth: 1,
    padding: 15,
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium"
  },
  inputSmall: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold",
    padding: 0
  },
  label: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 14,
    letterSpacing: 2,
    color: "#FFF"
  },
  previewText: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 16,
    color: "#FFF"
  }
});

export default styles;
