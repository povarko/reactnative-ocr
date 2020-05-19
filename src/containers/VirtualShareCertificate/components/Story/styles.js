import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
  },
  contentContainerStyle: {
    paddingHorizontal: 18,
    paddingBottom: 40
  },
  title: {
    color: Colors.tundora,
    fontSize: 16,
    fontFamily: "Rajdhani-Medium"
  },
  name: {
    color: Colors.tundora,
    fontSize: 22,
    textTransform: "capitalize",
    lineHeight: 24,
    fontFamily: "Rajdhani-Bold"
  },
  storyContainer: {
    flex: 0.65,
    marginLeft: 20,
    justifyContent: "space-evenly"
  },
  story: {
    marginTop: 8,
    color: Colors.tundora,
    fontSize: 14,
    flex: 1
  },
  story2: {
    color: Colors.tundora,
    fontFamily: "Rajdhani-medium",
    fontSize: 14,
    flex: 0.76
  },
  footer: {
    flexDirection: "row",
    marginTop: 12,
    flex: 1,
    justifyContent: "space-between"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default styles;
