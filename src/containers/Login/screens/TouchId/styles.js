import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default EStylesheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: getStatusBarHeight() + 20
  },
  headerTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.malachite,
    fontSize: "1.5rem",
    fontFamily: Fonts.type.rajdhaniBold
  },
  title: {
    color: "#FFFFFF",
    fontSize: "1.125rem",
    fontFamily: Fonts.type.rajdhani,
    lineHeight: 25,
    textTransform: "uppercase"
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: "1rem",
    fontFamily: Fonts.type.rajdhani,
    marginTop: 16
  },
  retry: {
    color: "#26C91E",
    fontFamily: Fonts.type.rajdhani,
    fontSize: "1rem",
    marginTop: 12
  }
});
