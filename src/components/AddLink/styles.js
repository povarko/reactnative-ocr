import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  container: {
    backgroundColor: "#2F2F2F",
    width: wp("85%"),
    height: 385,
    borderColor: "#FFF",
    borderWidth: 0.3
  },
  content: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45
  },
  top: {
    ...EStylesheet.absoluteFill,
    height: 50,
    marginTop: -25,
    alignItems: "center",
    justifyContent: "center"
  },
  closeIcon: {
    width: 30,
    height: 80,
    position: "absolute",
    right: 5,
    marginTop: -28
  },
  circleIcon: {
    width: 70,
    height: 70,
    backgroundColor: Colors.malachite,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center"
  },
  titleLabel: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 24
  },
  removeButton: {
    width: 120,
    height: 35,
    borderRadius: 20,
    marginTop: 0,
    marginBottom: 20,
    borderColor: "#26C91E",
    borderWidth: 1,
    backgroundColor: "#2F2F2F"
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
    fontSize: 16
  },
  teamImage: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: Colors.malachite,
    borderRadius: 10
  },
  itemText: {
    fontFamily: Fonts.type.rajdhani,
    fontSize: "1rem",
    color: "#FFF",
    marginLeft: 10
  },
  inputStyle: {
    height: hp("6.9%"),
    width: wp("75%"),
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.malachite,
    overflow: "hidden",
    backgroundColor: "#000",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  inputItem2: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    padding: 0
  },
  inputItem3: {
    width: "100%",
    // height: 110,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#AAA",
    borderWidth: 1,
    padding: 15,
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium"
  },
  inputSmall: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 15,
    padding: 0
  },
  label: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 20,
    letterSpacing: 2,
    color: "#FFF"
  },
  previewText: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 16,
    color: "#FFF"
  }
});
