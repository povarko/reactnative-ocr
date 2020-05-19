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
    alignItems: "center",
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
  divider: {
    backgroundColor: "#333333",
    width: "100%",
    marginVertical: 12
  },
  topDivider: {
    backgroundColor: "#333333",
    width: "94%",
    alignSelf: "flex-end",
    marginTop: 6
  },
  items: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 25
  },
  itemRow: {
    flex: 1,
    alignItems: "center",
    height: hp("45%"),
    paddingTop: 20
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.malachite,
    width: wp("35%"),
    height: hp("20%"),
    marginBottom: 20,
    padding: 14
  },
  itemIcon: {
    width: 42,
    height: 40
  },
  line: {
    borderRightColor: "#333333",
    borderRightWidth: 1
  },
  itemTitle: {
    color: "#FFFFFF",
    fontSize: "1.5rem",
    fontFamily: Fonts.type.rajdhaniBold,
    textTransform: "uppercase",
    lineHeight: 25,
    textAlign: "center"
  }
});
