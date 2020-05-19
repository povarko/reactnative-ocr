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
    marginTop: 22,
    width: hp("10%"),
    height: hp("10%")
  },
  title1: {
    fontSize: "1.4rem",
    color: "#26C91E",
    textTransform: "uppercase",
    marginBottom: 5,
    fontFamily: Fonts.type.rajdhaniBold
  },
  title2: {
    color: "#FFF",
    fontSize: "1.6rem",
    textTransform: "uppercase",
    marginBottom: 3,
    fontFamily: Fonts.type.rajdhaniBold
  },
  title3: {
    color: "#FFF",
    fontSize: "1.1rem",
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#26C91E",
    marginTop: 25,
    height: 42,
    width: wp("70%"),
    backgroundColor: "transparent"
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
    fontFamily: Fonts.type.rajdhaniSemibold,
    marginTop: 12,
    color: Colors.error
  },
  row: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  resend: {
    fontFamily: Fonts.type.rajdhani,
    fontSize: "0.9rem",
    color: "#FFF",
    marginLeft: 3
  }
});
