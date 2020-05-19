import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 45,
    height: 45
  },
  message: {
    color: "#FFF",
    fontSize: "1.5rem",
    fontFamily: Fonts.type.rajdhaniSemibold,
    textAlign: "center",
    lineHeight: 25
  },
  iconContainer: {
    marginTop: 22,
    marginBottom: 10,
    backgroundColor: Colors.malachite,
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  email: {
    color: Colors.malachite,
    fontSize: "1.5rem",
    fontFamily: Fonts.type.rajdhani,
    lineHeight: 25,
    textAlign: "center"
  },
  bottom: {
    marginTop: hp("26%")
  },
  bottomText: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: "1rem",
    textAlign: "center",
    lineHeight: 25
  }
});
