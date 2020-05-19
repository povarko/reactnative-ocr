import EStlesheet from "react-native-extended-stylesheet";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Fonts } from "@AppTheme";

export default EStlesheet.create({
  container: {
    alignItems: "center"
  },
  logo: {
    width: hp("13.5%"),
    height: hp("13.5%")
  },
  title1: {
    textTransform: "uppercase",
    color: "#FFF",
    fontSize: Fonts.size.h2,
    fontFamily: Fonts.type.rajdhani,
    textAlign: "center",
    marginTop: -12
  },
  title2: {
    textTransform: "uppercase",
    color: "#FFF",
    fontSize: Fonts.size.h2,
    fontFamily: Fonts.type.rajdhaniBold,
    textAlign: "center",
    marginTop: -10
  }
});
