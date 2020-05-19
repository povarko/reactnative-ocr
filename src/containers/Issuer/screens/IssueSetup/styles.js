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
  teamAvatar: {
    width: wp("30%"),
    height: wp("30%"),
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.malachite,
    borderWidth: 1,
    borderRadius: wp("15%"),
    marginTop: 10
  },
  teamIcon: {
    width: wp("30%") - 2,
    height: wp("30%") - 2,
    borderRadius: wp("15%"),
    backgroundColor: "#000",
    marginTop: 1
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("70%"),
    height: 40,
    borderColor: Colors.malachite,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10
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
    width: (width - 88) / 5,
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
    fontSize: 28,
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold",
    padding: 12
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
  emptyavatar: {
    width: wp("50%"),
    height: wp("50%"),
    borderColor: Colors.malachite,
    borderWidth: 1,
    borderRadius: wp("25%"),
    alignItems: "center",
    justifyContent: "center"
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
    marginTop: 30,
    marginLeft: 10
  },
  addNameText: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold",
    marginBottom: 50
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    flex: 1
  },
  inputItem: {
    width: wp("70%"),
    height: 60,
    borderRadius: 100,
    borderColor: Colors.malachite
  },
  inputItem2: {
    width: wp("45%"),
    height: 40,
    borderRadius: 100,
    borderColor: Colors.malachite
  },
  inputItem3: {
    width: wp("22%"),
    height: 40,
    borderRadius: 100,
    borderColor: Colors.malachite
  },
  inputSmall: {
    fontFamily: "Rajdhani-Bold",
    color: "#C6C6C6",
    fontSize: 24,
    padding: 0
  },
  inputSmall1: {
    fontFamily: "Rajdhani-Bold",
    color: "#C6C6C6",
    fontSize: 16,
    padding: 0
  },
  label: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 32,
    letterSpacing: 2
  },
  icons: {
    width: 16,
    height: 16,
    tintColor: Colors.malachite,
    marginLeft: -30,
    marginTop: -15,
    marginRight: 20
  },
  iconsRight: {
    width: 16,
    height: 16,
    tintColor: Colors.malachite,
    marginRight: 20
  },
  helpSupportText: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium"
  }
});

export default styles;