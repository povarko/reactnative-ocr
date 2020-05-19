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
    paddingTop: getStatusBarHeight() + 20,
    paddingHorizontal: 20,
    alignItems: "center"
  },
  form: {
    marginTop: "18%",
    alignItems: "center"
  },
  title: {
    color: "#26C91E",
    fontSize: "1.4rem",
    fontFamily: Fonts.type.rajdhaniBold,
    textAlign: "center",
    marginTop: 20
  },
  header: {
    position: "absolute",
    left: 0,
    top: 0
  },
  info: {
    fontSize: "0.8rem",
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniMedium,
    marginTop: 12,
    textAlign: "center",
    paddingHorizontal: 25,
    marginBottom: "20%"
  },
  button: {
    width: wp("80%"),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#26C91E",
    marginTop: 22,
    height: 42,
    backgroundColor: "transparent"
  },
  activeButton: {
    backgroundColor: Colors.malachite,
    borderColor: "#FFF"
  },
  buttonTitle: {
    color: "#FFF",
    fontSize: 19,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  inputError: {
    fontSize: "0.9rem",
    textAlign: "center",
    top: -10,
    color: "red"
  },
  inputContainer: {
    width: wp("80%"),
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 20,
    paddingRight: 6
  },
  input: {
    fontSize: "1.25rem",
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhaniMedium,
    marginLeft: 5
  }
});
