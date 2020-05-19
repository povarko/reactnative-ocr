import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  container: {
    backgroundColor: "transparent",
    // backgroundColor: "#2F2F2F",
    width: wp("90%"),
    height: hp("50%"),
    alignItems: "center"
  },
  content: {
    flex: 1,
    width: "100%",
    // justifyContent: "center",
    backgroundColor: "#2F2F2F",
    alignItems: "center"
    // paddingTop: 45
  },
  circleIcon: {
    width: 70,
    height: 70,
    marginTop: -35
  },
  titleLabel: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.25rem",
    marginTop: 20
  },
  button: {
    width: 120,
    height: 35,
    borderRadius: 20,
    marginTop: 0,
    marginBottom: 20,
    backgroundColor: "#26C91E"
  },
  buttonText: {
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.25rem"
  },
  list: {
    width: wp("85%"),
    margin: 0,
    marginTop: 12,
    flex: 1
  },
  itemText: {
    fontFamily: Fonts.type.rajdhani,
    fontSize: "1rem",
    color: "#FFF",
    marginLeft: 10
  },
  itemCheck: {
    width: 20,
    height: 20,
    marginLeft: 5
  }
});
