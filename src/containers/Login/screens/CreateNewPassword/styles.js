import EStylesheet from "react-native-extended-stylesheet";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Colors, Fonts } from "@AppTheme";

export default EStylesheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 25,
    paddingHorizontal: 20,
    alignItems: "center"
  },
  content: {
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: Colors.malachite,
    fontSize: "1.4rem",
    fontFamily: Fonts.type.rajdhaniBold,
    textAlign: "center",
    marginTop: 18
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#8E8E8E",
    height: 42,
    width: 290,
    borderRadius: 25,
    paddingHorizontal: 25
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: "1.25rem",
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  button: {
    backgroundColor: "transparent",
    width: 290,
    height: 42,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.malachite,
    marginTop: 28
  },
  activeButton: {
    backgroundColor: Colors.malachite,
    borderColor: "#FFFFFF"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: "1.25rem",
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  error: {
    textAlign: "center",
    fontFamily: Fonts.type.rajdhaniSemibold,
    fontSize: "1.125rem",
    marginTop: 10
  },
  success: {
    color: Colors.malachite
  },
  inputError: {
    fontSize: "0.9rem",
    textAlign: "center",
    top: 10,
    color: "red",
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  label: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhaniSemibold,
    fontSize: "0.875rem",
    marginLeft: 12,
    marginBottom: 10
  }
});
