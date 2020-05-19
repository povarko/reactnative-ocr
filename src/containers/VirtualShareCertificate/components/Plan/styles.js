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
    paddingVertical: 14,
    backgroundColor: "#FFF",
    justifyContent: "center",
    paddingHorizontal: 10,
    alignItems: "flex-start"
  },
  itemReverse: {
    flexDirection: "row-reverse",
    paddingVertical: 14,
    backgroundColor: Colors.gallery,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  itemBody: {
    flex: 1
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.tundora
  },
  itemDescription: {
    marginTop: 6,
    color: Colors.tundora,
    fontSize: 14
  },
  itemImage: {
    width: 148,
    height: 148
  },
  itemReadMore: {
    color: Colors.forestGreen,
    fontWeight: "800",
    fontSize: 14,
    marginTop: 4
  }
});

export default styles;
