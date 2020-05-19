import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  menuContainer: {
    // flex: 1,
    backgroundColor: Colors.mineShaft
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 25,
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
  title1: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 0,
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  activeStyle: {
    backgroundColor: "#464646"
  },
  container: {
    flex: 1,
    backgroundColor: Colors.textBlackColor
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    paddingTop: 10
  },
  title: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.5rem",
    textTransform: "uppercase",
    textAlign: "center"
  },
  nameTitle: {
    marginTop: 10,
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center"
  },
  teamTitle: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 30,
    textAlign: "center"
  },
  icons: {
    width: 20,
    height: 29,
    marginTop: 5
  },
  icons1: {
    width: 16,
    height: 20,
    marginTop: 5
  },
  headerBackground: {
    flex: 1,
    width: wp("100%"),
    height: hp("100%")
  },
  avatar: {
    borderWidth: 1,
    borderColor: Colors.malachite,
    borderRadius: wp("15%"),
    width: wp("30%"),
    height: wp("30%")
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20
  },
  subContent: {
    alignItems: "center",
    marginTop: 0,
    marginBottom: 100
  },
  itemContentSelected: {
    width: wp("100%") - 44,
    height: hp("10%"),
    borderWidth: 3,
    borderColor: Colors.malachite,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 10
  },
  itemContent: {
    width: wp("100%") - 44,
    height: hp("10%"),
    borderWidth: 1,
    borderColor: Colors.malachite,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 10
  },
  itemImage: {
    width: 45,
    height: 45
  },
  itemText: {
    width: wp("80%") - 110,
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 30,
    marginLeft: 15
  },
  itemRightIcon: {
    width: 14,
    height: 25,
    marginRight: 5
  }
});
