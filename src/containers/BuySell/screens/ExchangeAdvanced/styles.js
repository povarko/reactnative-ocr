import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";

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
  icons: {
    width: 24,
    height: 24
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
  photo: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: Colors.malachite,
    backgroundColor: "#FFF",
    marginLeft: 10
    // padding: 10
  },
  tabViews: {
    paddingHorizontal: 20,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tabText: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Rajdhani-Bold"
  },
  selectedTabBottom: {
    height: 2,
    backgroundColor: Colors.malachite
  },
  unselectedTabBottom: {
    height: 2,
    backgroundColor: "#000"
  },
  rowView: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center"
  }
});

export default styles;
