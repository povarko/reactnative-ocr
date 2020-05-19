import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  content: {
    alignItems: "center",
    paddingBottom: hp("46%")
  },
  currency: {
    color: Colors.tundora,
    fontSize: wp("4.8%"),
    fontWeight: "600",
    fontFamily: "System",
    opacity: 0.9
  },
  addCashContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    backgroundColor: "#F5F5F5"
  },
  addCashText: {
    fontSize: wp("4.8%"),
    fontFamily: "Rajdhani-Bold",
    marginTop: 10,
    color: Colors.tundora,
    opacity: 0.9,
    marginHorizontal: 10
  },
  search: {
    paddingVertical: 4,
    fontSize: 17,
    width: 120,
    height: 28,
    fontFamily: "Rajdhani-Semibold",
    opacity: 0.8
  },
  searchContainer: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 6,
    marginLeft: 10,
    marginTop: 10
  },
  title: {
    color: Colors.tundora,
    fontFamily: "Rajdhani-Medium",
    fontSize: 16
  },
  chevron: {
    width: 20,
    height: 20,
    tintColor: Colors.forestGreen
  },
  amount: {
    color: Colors.tundora,
    fontFamily: "Rajdhani-Bold",
    fontSize: wp("5.8%"),
    opacity: 0.9
  },
  addressTitle: {
    color: Colors.tundora,
    fontSize: wp("4%"),
    fontFamily: "Rajdhani-Bold"
  },
  addressContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    alignSelf: "flex-start",
    justifyContent: "space-between"
  },
  address: {
    color: Colors.tundora,
    fontSize: wp("3.7%")
  },
  icon: {
    width: wp("3.8%"),
    height: wp("3.8%")
  },
  scanTitle: {
    color: Colors.tundora,
    fontWeight: "500",
    fontSize: wp("3.5%"),
    marginBottom: 0,
    marginLeft: 2
  },
  qrCode: {
    height: 70,
    width: 70,
    marginTop: 3,
    flex: 0.4,
    marginRight: 4
  },
  shareContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  shareText: {
    color: Colors.tundora,
    fontWeight: "500",
    fontSize: wp("3.5%"),
    marginLeft: 3,
    marginBottom: 0
  },
  driveCointTitle: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 26,
    color: Colors.tundora,
    textAlign: "center"
  }
});
