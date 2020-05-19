import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingTop: 20,
    paddingHorizontal: 16
  },
  label: {
    color: Colors.tundora,
    fontSize: 17,
    fontFamily: "Rajdhani-Medium",
    marginBottom: 5
  },
  item: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center"
  },
  wallet: {
    color: Colors.tundora,
    fontFamily: "Rajdhani-Semibold",
    fontSize: 15
  },
  address: {
    color: Colors.tundora,
    fontFamily: "System",
    fontSize: wp("3.2%"),
    marginLeft: 6,
    opacity: 0.8
  },
  button: {
    width: wp("90%"),
    height: 45,
    backgroundColor: Colors.forestGreen,
    marginTop: 30,
    marginBottom: 50
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontFamily: "System",
    fontWeight: "500"
  },
  dialog: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  dialogLabel: {
    fontFamily: "System",
    color: Colors.tundora,
    fontSize: 14
  },
  detailsContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  copyIcon: {
    width: 22,
    height: 22,
    marginLeft: 2
  },
  qrCodeLarge: {
    width: 140,
    height: 140
  },
  qrCodeLabel: {
    color: Colors.tundora,
    fontSize: 17,
    fontFamily: "Rajdhani-Medium",
    marginLeft: 5,
    marginBottom: 0
  },
  shareContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12
  },
  icon: {
    width: 19,
    height: 19
  },
  inputIOS: {
    fontFamily: "Rajdhani-Semibold",
    fontSize: 16,
    color: Colors.forestGreen,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 1,
    minWidth: 150
  },
  inputAndroid: {
    fontFamily: "Rajdhani-Semibold",
    fontSize: 16,
    color: Colors.forestGreen,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 1,
    minWidth: 150
  },
  iconContainer: {
    right: 12,
    top: 10
  }
});
