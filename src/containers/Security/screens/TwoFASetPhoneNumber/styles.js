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
    width: wp("65%"),
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
    marginLeft: 15,
    marginTop: 4
  },
  colorText: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold
  },
  inputBox: {
    width: wp("70%")
  },
  label: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: "1.125rem",
    marginBottom: 15,
    marginLeft: 25
  },
  selectLabel: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: "0.875rem"
  },
  selectContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: 90,
    height: 40,
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.malachite
  },
  select: {
    marginLeft: 10,
    flex: 1
  },
  inputContainer: {
    borderColor: "#8E8E8E",
    borderWidth: 0.5,
    height: 40,
    width: 170,
    paddingLeft: 20,
    overflow: "hidden",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20
  },
  input: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "0.875rem",
    flex: 1
  },
  button: {
    marginTop: 40,
    backgroundColor: "#000",
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
  errorText: {
    textAlign: "center",
    color: "red",
    marginTop: 5,
    fontFamily: Fonts.type.rajdhaniSemibold
  }
});
