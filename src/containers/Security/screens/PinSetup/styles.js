import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";

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
    alignItems: "center",
    marginBottom: 10
  },
  headerTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.malachite,
    fontSize: "1.5rem",
    fontFamily: Fonts.type.rajdhaniBold,
    flex: 1
  },
  title: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: "1.125rem",
    textTransform: "uppercase",
    marginBottom: 25
  },
  inactiveButton: {
    backgroundColor: "#1F1F1F",
    height: 43,
    width: 166,
    borderRadius: 20,
    marginTop: 17,
    borderWidth: 1,
    borderColor: Colors.malachite
  },
  button: {
    backgroundColor: Colors.malachite,
    height: 43,
    width: 166,
    borderRadius: 20,
    marginTop: 17
  },
  buttonText: {
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.25rem",
    color: "#FFFFFF"
  },
  pinButton: {
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: Colors.malachite,
    width: 69,
    height: 69,
    borderRadius: 69 / 2,
    justifyContent: "center",
    alignItems: "center"
  },
  pinButtonText: {
    fontFamily: Fonts.type.rajdhani,
    fontSize: "1.5rem",
    color: "white"
  },
  clear: {
    fontSize: "1.188rem",
    fontFamily: Fonts.type.rajdhani,
    color: "#FFFFFF",
    marginTop: 20
  },
  pincodeCircle: {
    borderWidth: 1,
    borderColor: Colors.malachite,
    marginBottom: 13
  }
});
