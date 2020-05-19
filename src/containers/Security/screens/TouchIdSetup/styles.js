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
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "flex-start"
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
