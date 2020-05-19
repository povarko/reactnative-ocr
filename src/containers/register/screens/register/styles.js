import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  background: {
    flex: 1
  },
  container: {
    paddingTop: hp("10%")
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 70,
    paddingHorizontal: wp("11.5%")
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  },
  terms: {
    color: Colors.gray,
    fontFamily: Fonts.type.rajdhaniMedium,
    fontSize: 14,
    marginLeft: -14
  },
  colorText: {
    color: Colors.btnTitleColor
  },
  button: {
    width: 290,
    height: 48,
    borderRadius: 25,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.mainColor
  },
  buttonText: {
    fontFamily: Fonts.type.rajdhaniBold,
    color: Colors.btnTitleColor,
    fontSize: "1.2rem"
  },
  validButton: {
    width: 290,
    height: 48,
    borderRadius: 25,
    backgroundColor: Colors.malachite
  },
  overlay: {
    width: wp("100%"),
    height: hp("100%"),
    justifyContent: "center",
    alignItems: "center",
    ...EStylesheet.absoluteFill,
    backgroundColor: "#00000057"
  },
  error: {
    fontSize: "0.9rem",
    textAlign: "center",
    top: -8,
    color: "red",
    fontFamily: Fonts.type.rajdhaniSemibold
  }
});
