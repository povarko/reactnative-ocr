import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  barChart: {
    marginTop: 12
  },
  barChartItem: {
    height: 28,
    borderBottomWidth: 1,
    borderColor: Colors.parsley,
    flexDirection: "row",
    alignItems: "center"
  },
  barChartItemName: {
    flex: 4,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium"
  },
  barChartItemColor: {
    flex: 6,
    flexDirection: "row",
    alignItems: "center"
  },
  barChartItemColorInner: {
    height: 5
  },
  barChartItemPercentage: {
    flex: 2,
    fontSize: 14,
    fontFamily: "Rajdhani-Bold",
    textAlign: "center",
    color: Colors.malachite
  },
  barChartItemChange: {
    flex: 2,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium",
    textAlign: "right"
  },
  graph: {
    height: 168,
    marginTop: 12
  },
  pricesFooter: {
    height: 64,
    flexDirection: "row",
    alignItems: "center"
  },
  tickerArrow: {
    width: 24,
    alignItems: "center"
  },
  tickerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8
  },
  tickerImage: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  tickerName: {
    fontSize: 11,
    fontFamily: "Rajdhani-Medium",
    marginLeft: 8
  },
  tickerChange: {
    fontSize: 11,
    fontFamily: "Rajdhani-Bold",
    color: Colors.malachite,
    marginLeft: 8
  }
});

export default styles;
