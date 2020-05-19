import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default EStylesheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight(),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7"
  },
  form: {
    marginTop: hp("9%")
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#26C91E",
    marginTop: 22,
    height: 42,
    backgroundColor: Colors.mainColor,
    borderWidth: 1,
    borderColor: "#FFF"
  },
  regButton: {
    width: wp("80%"),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#26C91E",
    marginTop: 22,
    height: 42,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FFF"
  },
  buttonTitle: {
    color: Colors.btnTitleColor,
    fontSize: 19,
    letterSpacing: 1,
    // textTransform: "uppercase",
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  regBtnTitle: {
    color: Colors.gray
  },

  divider: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  line: {
    width: wp("17%"),
    height: 1.4,
    backgroundColor: "#707070"
  },
  dividerText: {
    color: "#FFF",
    marginHorizontal: 10,
    fontSize: 8.5,
    fontWeight: "bold"
  },
  icon: {
    width: 28,
    height: 28,
    marginHorizontal: 10
  },
  fpassword: {
    color: "#26C91E",
    fontSize: "1rem",
    marginTop: 10,
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  info: {
    fontSize: "0.7rem",
    color: Colors.gray,
    lineHeight: 15,
    textAlign: "center"
  },
  colorText: {
    // color: "#26C91E"
    color: "#000000"
  },

  linkColor: {
    color: Colors.btnTitleColor
  },

  policyRow: {
    marginTop: 20
  },
  inputError: {
    fontSize: "0.9rem",
    textAlign: "center",
    top: -10,
    color: "red",
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  overlay: {
    width: wp("100%"),
    height: hp("100%"),
    justifyContent: "center",
    alignItems: "center",
    ...EStylesheet.absoluteFill,
    backgroundColor: "#00000057"
  }
});
