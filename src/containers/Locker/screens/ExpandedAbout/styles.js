import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@AppTheme";
const { width, height } = Dimensions.get("window");

const StatusBarHeight = height >= 812 ? 46 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A"
  },
  header: {
    height: 64,
    marginTop: 12,
    marginLeft: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  rightMenu: {
    width: 7,
    height: 29,
    marginTop: 10,
    marginRight: 20
  },
  animatedUserNameText: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Rajdhani-Bold"
  },
  stake: {
    color: Colors.malachite,
    fontSize: 18,
    fontFamily: "Rajdhani-Bold",
    textTransform: "uppercase"
  },
  stakeValue: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Rajdhani-Bold",
    textTransform: "uppercase"
  },
  moreHeader: {
    height: 48,
    backgroundColor: Colors.malachite,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10
  },
  moreHeaderText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Rajdhani-Bold",
    marginLeft: -30
  },
  backIcon: {
    color: "#FFF",
    fontSize: 24,
    marginLeft: 10,
    width: 20
  },
  photo: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: Colors.malachite,
    backgroundColor: "#FFF"
    // padding: 10
  },
  userName: {
    fontSize: 24,
    fontFamily: "Rajdhani-Bold",
    color: "#FFF"
  },
  userNickName: {
    fontSize: 18,
    fontFamily: "Rajdhani-Bold",
    color: Colors.malachite
  },
  usdValue: {
    fontSize: 36,
    fontFamily: "Rajdhani-Regular",
    color: Colors.doveGray
  },
  //Side menu style
  sidemenuView: {
    position: "absolute",
    width: 195,
    height: 438,
    top: StatusBarHeight,
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
  }
});

export default styles;
