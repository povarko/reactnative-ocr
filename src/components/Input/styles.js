import EStylesheet from "react-native-extended-stylesheet";
import { Fonts } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  container: {
    width: wp("80%"),
    marginBottom: 15
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#8E8E8E",
    flexDirection: "row",
    height: 50,
    width: wp("80%"),
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center"
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: "1.25rem",
    fontFamily: Fonts.type.rajdhani
  },
  icon: {
    marginRight: 8,
    height: 18,
    width: 18
  },
  label: {
    color: "#FFF",
    fontSize: "1.063rem",
    textTransform: "uppercase",
    marginBottom: 6,
    marginLeft: 15,
    letterSpacing: 2,
    fontFamily: Fonts.type.rajdhaniSemibold
  }
});
