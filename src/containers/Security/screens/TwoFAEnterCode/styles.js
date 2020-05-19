import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.textBlackColor
  },
  content: {
    flex: 1,
    backgroundColor: "#000000"
  },
  header: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center"
  },
  headerTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.malachite,
    fontSize: "1.5rem",
    fontFamily: Fonts.type.rajdhaniBold,
    flex: 1
  },
  infoBox: {
    width: wp("63%"),
    alignItems: "center",
    marginTop: 5,
    marginBottom: 30
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  infoIcon: {
    width: 42,
    height: 40
  },
  infoTitle: {
    color: "#FFFFFF",
    fontSize: "1.125rem",
    fontFamily: Fonts.type.rajdhani,
    marginLeft: 5
  },
  infoBody: {
    color: "#FFFFFF",
    fontSize: "0.875rem",
    fontFamily: Fonts.type.rajdhani,
    marginLeft: 30,
    marginTop: 4
  },
  inputBox: {
    width: wp("75%"),
    alignItems: "center",
    flexWrap: "wrap"
  },
  label: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: "1.125rem",
    marginBottom: 15,
    marginLeft: 25,
    alignSelf: "flex-start"
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#8E8E8E",
    borderRadius: 20,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    width: "100%"
  },
  input: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "0.875rem",
    marginLeft: 5
  },
  button: {
    marginTop: 40,
    backgroundColor: "#000",
    width: wp("73%"),
    height: 42,
    borderRadius: 20,
    borderColor: Colors.malachite,
    borderWidth: 1
  },
  buttonText: {
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.25rem",
    color: "#FFFFFF",
    letterSpacing: 2
  },
  checkBoxInfo: {
    color: "#FFFFFF",
    fontSize: "0.875rem",
    fontFamily: Fonts.type.rajdhani,
    marginLeft: -10
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
    paddingHorizontal: 25
  },
  helpText: {
    color: "#FFFFFF",
    fontSize: "0.875rem",
    fontFamily: Fonts.type.rajdhani,
    marginLeft: 2
  },
  helpIcon: {
    width: 21,
    height: 20
  }
});
