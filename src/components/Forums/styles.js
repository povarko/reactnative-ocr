import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingBottom: 50
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 14,
    paddingVertical: 12,
    justifyContent: "space-between"
  },
  avatar: {
    width: wp("12%"),
    height: wp("12%"),
    borderRadius: wp("12%") / 2
  },
  avatarContainer: {
    width: wp("14%"),
    height: wp("14%"),
    borderRadius: wp("14%") / 2,
    borderWidth: 2,
    borderColor: Colors.forestGreen,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  separator: {
    borderBottomColor: "#ECEFF1",
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginLeft: 40
  },
  topic: {
    color: Colors.forestGreen,
    fontSize: 16,
    fontFamily: "Rajdhani-Medium",
    textTransform: "uppercase"
  },
  title: {
    color: Colors.tundora,
    fontSize: 14
  },
  content: {
    color: Colors.tundora,
    fontSize: 11,
    opacity: 0.9
  },
  icon: {
    tintColor: Colors.forestGreen,
    width: 15,
    height: 15
  },
  total: {
    color: Colors.forestGreen,
    fontSize: 13,
    marginLeft: 2
  }
});
