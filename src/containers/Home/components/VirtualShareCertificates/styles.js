import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabs: {
    height: 44,
    flexDirection: "row",
    alignItems: "center"
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 44
  },
  tabText: {
    fontSize: 20,
    fontFamily: "Rajdhani-Semibold",
    color: Colors.malachite
  },
  listItem: {
    height: 96,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 18
  },
  listItemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.forestGreen
  },
  avatarContainer: {
    width: 62,
    height: 62,
    borderColor: Colors.forestGreen,
    borderWidth: 2,
    borderRadius: 62 / 2,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
});

export default styles;
