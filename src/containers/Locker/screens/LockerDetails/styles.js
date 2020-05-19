import { StyleSheet, Dimensions, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Colors, Fonts } from "@AppTheme";
const { width, height } = Dimensions.get("window");
const StatusBarHeight =
  Platform.OS === "ios" ? getStatusBarHeight() : getStatusBarHeight() + 20;

const styles = StyleSheet.create({
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
  iconSideMenu: {
    width: 13,
    height: 13
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    marginLeft: 10,
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  activeStyle: {
    backgroundColor: "#464646"
  },

  container: {
    flex: 1,
    backgroundColor: "#1A1A1A"
  },
  bodyContent: {
    backgroundColor: "#000",
    marginTop: 10,
    paddingBottom: 0,
    flex: 1
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    // height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1A1A1A"
  },
  backIcon: {
    color: "#FFF",
    fontSize: 24
  },
  icon: {
    width: 19,
    height: 19,
    marginLeft: 8
  },
  socialIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    tintColor: Colors.malachite
  },
  body: {
    padding: 20,
    paddingTop: 0,
    flex: 1
  },
  userInfoView: {
    alignItems: "center",
    backgroundColor: "#000"
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: Colors.malachite,
    backgroundColor: "#FFF",
    padding: 10
  },
  userName: {
    fontSize: 24,
    fontFamily: "Rajdhani-Bold",
    color: "#FFF",
    textTransform: "uppercase"
  },
  userNickName: {
    fontSize: 18,
    fontFamily: "Rajdhani-Bold",
    color: Colors.malachite,
    textTransform: "uppercase"
  },
  usdValue: {
    fontSize: 36,
    fontFamily: "Rajdhani-Regular",
    color: "#FFF"
  },
  buysell: {
    flexDirection: "row",
    marginTop: 8
  },
  buttonBuy: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.malachite
  },
  buttonSell: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.blazeOrange,
    marginLeft: 10
  },
  buyText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Rajdhani-Bold",
    textAlign: "center"
  },
  stackView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between"
  },
  stakeCount: {
    fontSize: 20,
    fontFamily: "Rajdhani-Regular",
    color: "#FFF"
  },
  stakeValue: {
    fontSize: 20,
    fontFamily: "Rajdhani-Regular",
    color: Colors.malachite
  },
  changeButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 25,
    borderRadius: 4,
    backgroundColor: Colors.malachite
  },
  changeDate: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Rajdhani-Regular"
  },
  changeText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Rajdhani-Bold",
    textAlign: "center"
  },
  graph: {
    height: 180,
    width: width - 60
  },
  graphText: {
    color: Colors.malachite,
    fontSize: 12,
    fontFamily: "Rajdhani-Regular"
  },
  moreView: {
    alignItems: "center",
    marginTop: 20
  },
  downIcon: {
    width: 30,
    height: 10
  },

  moreHeader: {
    height: 48,
    backgroundColor: Colors.malachite,
    alignItems: "center",
    justifyContent: "center"
  },
  moreHeaderText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Rajdhani-Bold"
  },

  animatedUserNameText: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Rajdhani-Bold"
  },
  animatedStakeText: {
    color: Colors.malachite,
    fontSize: 18,
    fontFamily: "Rajdhani-Bold"
  },
  animatedUSDText: {
    color: "#FFF",
    fontSize: 22,
    fontFamily: "Rajdhani"
  },
  //Side menu style
  sidemenuView: {
    position: "absolute",
    width: 195,
    height: 432,
    top: StatusBarHeight - 30,
    backgroundColor: "#000",
    padding: 0,
    paddingTop: 0
  },
  rightMenuBack: {
    backgroundColor: "#1A1A1A",
    height: 72,
    alignItems: "flex-end",
    paddingRight: 20
  },
  rightIcon: {
    color: Colors.malachite,
    fontSize: 24,
    marginTop: 20
  },
  sideMenuItemView: {
    backgroundColor: "#2F2F2F",
    height: 70,
    alignItems: "center",
    marginTop: 1,
    flexDirection: "row",
    padding: 5
  },
  sideMenuItemViewSelected: {
    backgroundColor: Colors.malachite,
    height: 70,
    alignItems: "center",
    marginTop: 1,
    flexDirection: "row"
  },
  sideMenuItemText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Rajdhani-SemiBold",
    marginLeft: 10
  },
  rightSideIcon: {
    marginLeft: 15,
    width: 24,
    height: 24,
    tintColor: Colors.malachite
  },
  rightSideIconSelected: {
    marginLeft: 15,
    width: 24,
    height: 24,
    tintColor: "#FFF"
  },
  animatedSymbol: {
    color: "#FFF",
    fontFamily: "Rajdhani-Bold",
    fontSize: 18
  }
});

export default styles;
