import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
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
    flexDirection: "row",
    paddingVertical: 8,
    alignItems: "center",
    paddingLeft: 18
  },
  itemImage: {
    marginRight: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.gallery
  },
  itemBody: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: Colors.gallery,
    paddingRight: 80,
    justifyContent: "center"
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.forestGreen
  },
  itemDescription: {
    color: Colors.tundora,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium"
  },
  itemStatus: {
    color: Colors.tundora,
    fontSize: 10
  },
  itemChat: {
    position: "absolute",
    right: 4,
    bottom: 14,
    flexDirection: "row",
    alignItems: "center"
  },
  itemChatIcon: {
    marginRight: 8
  },
  itemChatCount: {
    color: Colors.doveGray,
    fontSize: 12,
    fontFamily: "Rajdhani-Medium"
  }
});

export default styles;
