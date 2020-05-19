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
  inputStyle: {
    height: hp("6.9%"),
    width: wp("75%"),
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.malachite,
    overflow: "hidden",
    backgroundColor: "#000",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
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
    width: (wp("80%") * 3) / 10,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.malachite
  },
  list: {
    margin: 0,
    marginTop: 12,
    flex: 1
  },
  photo: {
    width: width / 2 - 30,
    height: 140,
    flex: 1,
    backgroundColor: "#ddd"
  },
  removeView: {
    height: 30,
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: -30
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
  teamText: {
    fontSize: 24,
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold"
  },
  header2: {
    paddingTop: 20,
    justifyContent: "space-between",
    backgroundColor: "#000"
  },
  avatar: {
    borderWidth: 1,
    borderColor: Colors.malachite,
    overflow: "hidden"
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  avatarIcon: {
    tintColor: "#DDD",
    width: 120,
    height: 100,
    marginTop: -160,
    marginLeft: 10
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
    fontSize: 14,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium"
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
    borderRadius: 20
  },
  inputItemMin: {
    width: "100%",
    height: 100,
    borderRadius: 20,
    borderColor: "#AAA",
    borderWidth: 1,
    padding: 15,
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium",
    textAlignVertical: "top"
  },
  inputItemMax: {
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
    fontSize: 16,
    letterSpacing: 20
  },
  placeholderText: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 15,
    padding: 0
  },
  selectedMediaButton: {
    width: 72,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.malachite,
    alignItems: "center",
    justifyContent: "center"
  },
  mediaButton: {
    width: 72,
    height: 24,
    borderRadius: 12,
    borderColor: Colors.malachite,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1
  },
  teamImage: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: Colors.malachite,
    borderRadius: 10
  },
  inputItem3: {
    marginTop: 10,
    width: "100%",
    // height: 110,
    justifyContent: "center",
    borderRadius: 20,
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium"
  },
  inputSmall: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 15,
    padding: 0
  },
  previewText: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 16,
    color: "#FFF"
  }
});

export default styles;
