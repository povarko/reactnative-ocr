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
  textTitle: {
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold",
    fontSize: 22
  },
  textTitle1: {
    color: "#FFF",
    fontFamily: "Rajdhani-Bold",
    fontSize: 22
  },
  processdView: {
    height: 80,
    width: width,
    backgroundColor: Colors.darkBackgroundColor,
    alignItems: "center",
    justifyContent: "center"
  },
  proceedButtonView: {
    width: 280,
    height: 48,
    borderColor: Colors.malachite,
    borderWidth: 1,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  proceedText: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  icons: {
    width: 16,
    height: 16,
    tintColor: Colors.malachite,
    marginLeft: -32,
    marginTop: -10,
    marginRight: 20
  },
  subtitle1: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani"
  },
  subtitle2: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  helpSupportText: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium"
  },
  saveText: {
    fontSize: 24,
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
    marginBottom: 30,
    backgroundColor: Colors.darkBackgroundColor
  },
  label: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 32,
    letterSpacing: 2
  }
});

export default styles;
