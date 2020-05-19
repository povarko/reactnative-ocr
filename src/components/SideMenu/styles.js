import EStylesheet from "react-native-extended-stylesheet";
import { Colors, Fonts } from "@AppTheme";

export default EStylesheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  menuContainer: {
    flex: 1,
    backgroundColor: Colors.mineShaft
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderBottomWidth: 0.3,
    borderBottomColor: "#000"
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: Colors.malachite,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    width: 13,
    height: 13
  },
  title: {
    color: "#FFF",
    fontSize: "1.25rem",
    marginLeft: 10,
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  activeStyle: {
    backgroundColor: "#464646"
  }
});
