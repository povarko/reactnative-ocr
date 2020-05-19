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
  headerBackground: {
    width: wp("100%"),
    height: height - 115
  },
  bodyContent: {
    paddingBottom: 0,
    flex: 1
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  textTitle: {
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold",
    fontSize: 24
  },
  textTitle1: {
    color: Colors.malachite,
    fontFamily: "Rajdhani-SemiBold",
    fontSize: 18
  },
  textTitle2: {
    color: "#FFF",
    fontFamily: "Rajdhani-Medium",
    fontSize: 16
  },
  header2: {
    paddingHorizontal: wp("10%"),
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  subTitleContent: {
    marginLeft: wp("5%"),
    width: wp("90%"),
    padding: 14,
    alignItems: "center"
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#FFF",
    marginTop: 10
  },
  processdView: {
    height: 80,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100
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
  cameraIcon: {
    borderWidth: 1,
    borderColor: Colors.malachite,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  preview: {
    width: wp("80%"),
    height: wp("80%")
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  avatar: {
    borderWidth: 1,
    borderColor: Colors.malachite,
    overflow: "hidden",
    borderRadius: 10
  },
  emptyavatar: {
    width: wp("80%"),
    height: wp("80%"),
    borderColor: Colors.malachite,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  }
});

export default styles;
