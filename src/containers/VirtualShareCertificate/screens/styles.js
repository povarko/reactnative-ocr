import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  header1: {
    backgroundColor: "#030303"
  },
  header1Content: {
    height: 196,
    alignItems: "center"
  },
  bottomTabs: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 0
  },
  bottomTab: {
    paddingHorizontal: 12
  },
  tabText: {
    fontSize: hp("2.5%"),
    fontFamily: "Rajdhani-Medium"
  },
  tabTextActive: {
    color: Colors.malachite,
    fontSize: hp("2.5%"),
    fontFamily: "Rajdhani-Bold"
  },
  tabSeparator: {
    width: 1,
    height: 22,
    backgroundColor: Colors.malachite
  },
  header2: {
    alignItems: "center",
    paddingBottom: 20
  },
  topTabs: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1001
  },
  topTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  topTabInner: {
    height: 44,
    alignItems: "center",
    justifyContent: "center"
  },
  topTabActiveTriangle: {
    position: "absolute",
    top: 44,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#000"
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    zIndex: 1000
  },
  bottomAd: {
    height: hp("14%"),
    width: wp("100%")
  },
  name: {
    fontSize: 22,
    fontFamily: "Rajdhani-Bold",
    textTransform: "uppercase"
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center"
  },
  symbol: {
    fontSize: 18,
    fontFamily: "Rajdhani-Semibold",
    color: Colors.malachite
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16
  },
  button: {
    width: 96,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.malachite
  },
  sellButton: {
    width: 96,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blazeOrange,
    marginLeft: 8
  },
  buttonText: {
    fontSize: 15,
    fontFamily: "Rajdhani-Bold"
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30
  },
  avatar: {
    alignSelf: "center",
    top: 10,
    width: 100,
    height: 100,
    borderRadius: 50
  },
  title: {
    color: Colors.malachite,
    fontSize: 22,
    fontFamily: "Rajdhani-Medium"
  },
  detailName: {
    marginTop: 16,
    fontSize: hp("3.5%"),
    fontFamily: "Rajdhani-Bold",
    textTransform: "uppercase"
  },
  detailSymbol: {
    fontSize: 14,
    fontFamily: "Rajdhani-Semibold",
    color: Colors.malachite
  },
  detailPrice: {
    fontSize: hp("3.8%")
  }
});

export default styles;
