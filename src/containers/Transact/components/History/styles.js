import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: hp("10%")
  },
  heading: {
    color: Colors.tundora,
    textAlign: "center",
    fontSize: wp("5%"),
    fontFamily: "Rajdhani-Bold"
  },
  avatarContainer: {
    flex: 0.2,
    backgroundColor: "#1B5E20",
    alignItems: "center",
    justifyContent: "center"
  },
  details: {
    flex: 0.8,
    paddingHorizontal: 12,
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  date: {
    fontSize: wp("4%"),
    fontWeight: "bold",
    color: Colors.tundora,
    opacity: 0.98
  },
  address: {
    color: Colors.tundora,
    fontSize: 14,
    opacity: 0.9
  },
  detail: {
    color: Colors.forestGreen,
    fontSize: 14,
    textAlign: "right"
  },
  body: {
    flexDirection: "row",
    height: 65,
    marginVertical: 4
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
