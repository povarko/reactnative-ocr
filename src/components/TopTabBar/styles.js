import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  tabs: {
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  tab: {},
  activeTab: {
    borderBottomWidth: 2,
    borderColor: Colors.malachite
  },
  tabText: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium",
    marginBottom: 4
  },
  activeTabText: {
    fontFamily: "Rajdhani-Bold",
    borderColor: Colors.malachite
  }
});

export default styles;
