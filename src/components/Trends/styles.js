import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  header: {
    width: "100%",
    backgroundColor: Colors.deepForestGreen,
    paddingVertical: 8
  },
  headerLight: {
    width: "100%",
    backgroundColor: "#424242",
    paddingVertical: 8
  },
  headerTitle: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 19,
    fontFamily: "Rajdhani-Medium"
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    padding: 12
  },
  avatar: {
    width: wp("5%"),
    height: wp("5%"),
    borderRadius: wp("5%") / 2
  },
  avatarContainer: {
    width: wp("7%"),
    height: wp("7%"),
    borderRadius: wp("7%") / 2,
    borderWidth: 1,
    borderColor: Colors.forestGreen,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.dustyGray
  },
  title: {
    color: Colors.tundora,
    fontSize: 12,
    fontFamily: "Rajdhani-Medium",
    textTransform: "uppercase"
  },
  change: {
    color: Colors.tundora,
    fontSize: 12,
    fontFamily: "Rajdhani-bold",
    textAlign: "right"
  },
  separator: {
    borderBottomColor: "#ECEFF1",
    borderBottomWidth: 1,
    marginHorizontal: 10
  }
});
