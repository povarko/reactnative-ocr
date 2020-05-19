import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A"
  },
  bodyContent: {
    backgroundColor: "#000",
    padding: 24,
    flex: 1
  },
  tabView: {
    marginTop: 10,
    height: 190
  },
  tabs: {
    height: 50,
    flexDirection: "row"
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  tabPortfolioActive: {
    backgroundColor: "#000",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: Colors.malachite
  },
  tabPortfolioInactive: {
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderColor: Colors.malachite
  },
  tabScoutActive: {
    backgroundColor: "#000",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: Colors.malachite
  },
  tabScoutInactive: {
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderColor: Colors.malachite
  },
  tabText: {
    fontSize: 22,
    fontFamily: "Rajdhani-Bold"
  },
  tabTextInactive: {
    opacity: 0.4
  },
  tabContent: {
    flexDirection: "row",
    padding: 10
  },
  tabPortfolioContent: {
    borderWidth: 1,
    borderTopWidth: 0,
    backgroundColor: "#000",
    borderColor: Colors.malachite
  },
  tabScoutContent: {
    borderWidth: 1,
    borderTopWidth: 0,
    backgroundColor: "#000",
    borderColor: Colors.malachite
  },
  graph: {
    height: 80,
    width: "100%"
  },
  imageBorder: {
    borderWidth: 1,
    borderColor: Colors.malachite,
    padding: 3
  },
  balanceLabel: {
    fontSize: 30,
    fontFamily: "Rajdhani",
    color: Colors.malachite,
    height: 30
  },
  balanceValue: {
    fontSize: 30,
    fontFamily: "Rajdhani-Semibold",
    color: Colors.malachite
  },
  changeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  trackedTeamValue: {
    fontFamily: "Rajdhani-Semibold",
    fontSize: 35,
    color: Colors.malachite
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.tundora,
    marginTop: 8
  },
  teamsValue: {
    fontFamily: "Rajdhani-Semibold",
    fontSize: 22,
    color: Colors.malachite,
    marginTop: 8
  },
  verticalLine: {
    width: 1,
    backgroundColor: Colors.tundora,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8
  },
  athletesValue: {
    fontFamily: "Rajdhani-Semibold",
    fontSize: 26,
    color: Colors.malachite
  },
  athletesWorth: {
    fontFamily: "Rajdhani-Semibold",
    fontSize: 26,
    color: Colors.malachite
    // marginTop: 8
  }
});

export default styles;
