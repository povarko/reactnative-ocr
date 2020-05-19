import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackgroundColor
  },
  bodyContent: {
    padding: 24,
    paddingBottom: 0,
    backgroundColor: "#000",
    flex: 1
  },
  title1: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 30,
    color: "#FFF",
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontFamily: "Rajdhani",
    fontSize: 14,
    color: "#FFF"
  },
  icons: {
    width: 24,
    height: 24
  },
  searchBox: {
    height: 48,
    // borderRadius: 24,
    // borderWidth: 1,
    borderColor: Colors.tundora,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8
  },
  searchInput: {
    flex: 1,
    fontFamily: "Rajdhani",
    fontSize: 14,
    color: "#FFF"
  },
  searchIcon: {
    marginLeft: 12,
    color: Colors.tundora,
    fontSize: 25
  },
  tabView: {
    backgroundColor: "#000",
    height: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("100%")
  },
  tabActive: {
    backgroundColor: Colors.darkBackgroundColor,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  tabDeactive: {
    backgroundColor: "#000",
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  textNameSelect: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 24,
    color: Colors.malachite
  },
  textName: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 24,
    color: "#FFF"
  },
  textTabDeactive: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 24,
    color: "#AAA"
  },
  list: {
    backgroundColor: Colors.darkBackgroundColor
    // flex: 1
  },
  tabItemNoSelected: {
    flexDirection: "row",
    paddingVertical: 6,
    alignItems: "center",
    paddingLeft: 15,
    borderWidth: 1,
    backgroundColor: "#000",
    borderTopColor: "#000",
    borderLeftColor: "#000",
    borderRightColor: "#000",
    borderBottomColor: "#464646"
  },
  tabItemSelected: {
    flexDirection: "row",
    paddingVertical: 6,
    alignItems: "center",
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: Colors.malachite
  },
  tabItemImage: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderRadius: 52 / 2,
    borderColor: Colors.malachite,
    alignItems: "center"
  },
  tabItemName: {
    fontSize: 14,
    lineHeight: 17,
    color: "#FFF",
    fontFamily: "Rajdhani"
  },
  tabItemTitle: {
    fontSize: 14,
    lineHeight: 17,
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold"
  },
  tabItemPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.malachite,
    opacity: 0.9
  }
});
