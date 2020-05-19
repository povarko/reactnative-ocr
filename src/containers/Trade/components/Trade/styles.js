import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    marginTop: 8
  },
  content: {
    flex: 1,
    width: wp("50%"),
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 20,
    borderBottomColor: "#ECEFF1",
    borderBottomWidth: 0.6
  },
  title: {
    color: Colors.tundora,
    fontSize: wp("4.5%"),
    fontFamily: "Rajdhani-Bold",
    textAlign: "center"
  },
  status: {
    color: Colors.tundora,
    fontSize: 18,
    fontFamily: "Rajdhani-Semibold",
    textAlign: "center",
    opacity: 0.9,
    marginTop: 16
  },
  name: {
    color: Colors.tundora,
    fontSize: wp("5%"),
    fontFamily: "Rajdhani-Bold",
    textAlign: "center",
    marginTop: 6,
    textTransform: "uppercase"
  },
  price: {
    color: Colors.forestGreen
  },
  total: {
    fontFamily: "Rajdhani-Bold",
    color: Colors.forestGreen,
    fontSize: wp("4.4%"),
    textAlign: "center",
    marginTop: -5
  },
  symbol: {
    color: Colors.tundora,
    fontSize: 14.5,
    textAlign: "center",
    fontFamily: "Rajdhani-Medium"
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2
  },
  avatarContainer: {
    backgroundColor: "#FFF",
    width: 58,
    height: 58,
    borderColor: Colors.forestGreen,
    borderWidth: 1.6,
    borderRadius: 58 / 2,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center"
  },
  lightButton: {
    width: wp("45%"),
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1
  },
  button: {
    width: wp("45%"),
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.forestGreen
  },
  buttonText: {
    color: Colors.tundora,
    fontSize: 17,
    color: "#FFF",
    fontFamily: "Rajdhani-Semibold"
  },
  buttonTextDark: {
    color: Colors.tundora,
    fontSize: 17,
    color: Colors.tundora,
    fontFamily: "Rajdhani-Medium"
  },
  footer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "space-between"
  },
  inputIOS: {
    fontFamily: "Rajdhani-Semibold",
    fontSize: 15,
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
    fontSize: 15,
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
  },
  triangle: {
    position: "absolute",
    top: 0,
    width: 0,
    height: 0,
    alignSelf: "center",
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderTopWidth: 7,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#000"
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  imageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  imageHeaderTitle: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 22,
    color: "#FFF",
    marginHorizontal: 20
  }
});
