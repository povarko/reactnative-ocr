import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#464646",
    backgroundColor: "transparent",
    width: wp("90%"),
    height: hp("50%"),
    alignItems: "center"
  },
  content: {
    flex: 1,
    width: "100%",
    // justifyContent: "center",
    backgroundColor: "#0D0D0D",
    alignItems: "center"
    // paddingTop: 45
  },
  top: {
    ...EStylesheet.absoluteFill,
    width: "100%",
    height: 50,
    flexDirection: "row",
    top: -10,
    zIndex: 9999,
    elevation: 1000
  },
  circleIcon: {
    width: 70,
    height: 70,
    marginTop: -35
  },
  titleLabel: {
    color: "#FF0000",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "2.5rem",
    marginTop: 10
  },
  removeButton: {
    width: 72,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#26C91E",
    marginRight: 10
  },
  cancelButton: {
    width: 72,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#26C91E",
    backgroundColor: "#0D0D0D",
    marginLeft: 10
  },
  buttonText: {
    margin: 0,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "0.75rem"
  },
  bodyTextLabel: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: "1rem",
    marginTop: 10
  },
  descriptionLabel: {
    marginTop: 20,
    margin: 10,
    color: "#FFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: "1rem",
    textAlign: "center"
  }
});
