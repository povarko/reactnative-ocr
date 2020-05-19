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
    marginBottom: 8
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
    height: 160,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    borderBottomWidth: 2,
    borderColor: Colors.gallery
  },
  itemBody: {
    flex: 1,
    justifyContent: "center"
  },
  itemTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: Colors.tundora
  },
  itemDescription: {
    color: Colors.tundora,
    fontWeight: "500",
    fontSize: 15
  },
  itemPrice: {
    color: Colors.forestGreen,
    fontSize: 18,
    fontWeight: "700"
  },
  itemImage: {
    width: 120,
    height: 120,
    marginRight: 12
  },
  itemBuyButton: {
    width: 104,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    backgroundColor: Colors.forestGreen
  },
  itemBuyButtonText: {
    fontSize: 15,
    fontWeight: "700"
  }
});

export default styles;
