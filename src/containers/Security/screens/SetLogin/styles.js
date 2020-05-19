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
  row: {
    paddingTop: 30,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  item: {
    width: wp("38%"),
    height: wp("36%"),
    borderWidth: 1,
    borderColor: Colors.malachite,
    justifyContent: "center",
    alignItems: "center"
  },
  activeItem: {
    borderWidth: 4
  },
  icon: {
    width: 52,
    height: 52
  },
  title: {
    color: "#FFF",
    fontSize: "1.125rem",
    fontFamily: Fonts.type.rajdhaniSemibold,
    textTransform: "uppercase",
    marginTop: 4
  }
});
