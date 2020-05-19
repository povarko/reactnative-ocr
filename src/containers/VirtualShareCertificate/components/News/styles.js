import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginBottom: 20
  },
  title: {
    color: Colors.tundora,
    fontSize: 16,
    fontFamily: "Rajdhani-Medium"
  },
  socialIcons: {
    flexDirection: "row",
    alignItems: "center"
  },
  socialIcon: {
    marginLeft: 8
  },
  item: {
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 8,
    alignItems: "flex-start"
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: Colors.tundora
  },
  itemDescription: {
    marginTop: 10,
    flex: 1,
    color: Colors.tundora,
    fontSize: 14
  },
  itemImage: {
    width: 92,
    height: 78,
    marginRight: 12
  },
  itemReadMore: {
    color: Colors.forestGreen,
    fontWeight: "800",
    fontSize: 14
  }
});

export default styles;
