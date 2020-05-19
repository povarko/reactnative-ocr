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
  profileCompletion: {
    marginLeft: wp("10%"),
    color: "#FFF",
    fontFamily: "Rajdhani-Medium",
    fontSize: 14
  },
  profileCompletionBackground: {
    width: wp("80%"),
    height: 6,
    borderRadius: 3,
    backgroundColor: "#464646",
    margin: 6
  },
  profileCompletionProgress: {
    width: wp("80%") / 5,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.malachite
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
  header2: {
    paddingTop: 20,
    justifyContent: "space-between",
    backgroundColor: "#000"
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
    fontFamily: "Rajdhani-Medium"
  },
  saveText: {
    fontSize: 12,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  bioContent: {
    marginLeft: wp("8%"),
    width: wp("84%"),
    // height: 300,
    // alignItems: "center",
    padding: 14,
    backgroundColor: Colors.darkBackgroundColor
  },
  inputItem2: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    color: "#FFF",
    fontSize: 16
  },
  inputItem3: {
    width: "100%",
    height: 240,
    borderRadius: 20,
    borderColor: "#AAA",
    borderWidth: 1,
    padding: 15,
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium",
    textAlignVertical: "top"
  },
  label: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 32,
    letterSpacing: 2
  },
  placeholderText: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 15,
    padding: 0
  }
});

export default styles;
