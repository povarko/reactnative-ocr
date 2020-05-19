import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  container: {
    backgroundColor: "transparent",
    width: wp("90%"),
    height: hp("80%"),
    alignItems: "center"
  },
  content: {
    flex: 1,
    width: "100%",
    // justifyContent: "center",
    backgroundColor: "#2F2F2F",
    alignItems: "center"
  },
  top: {
    ...EStylesheet.absoluteFill,
    width: "100%",
    height: 50,
    flexDirection: "row"
    // top: -30
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.malachite
  },
  circleIcon: {
    width: 70,
    height: 70,
    marginTop: -35
  },
  smallCircle: {
    width: 14.79,
    height: 14.79,
    borderRadius: 14.79 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.malachite
  },
  locationLabel: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.25rem",
    marginTop: 20
  },
  location: {
    fontFamily: Fonts.type.rajdhani,
    color: "#FFFFFF",
    textTransform: "uppercase"
  },
  title: {
    textTransform: "uppercase",
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.875rem",
    textTransform: "uppercase",
    marginVertical: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  descIconContainer: {
    backgroundColor: "#26C91E",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    color: "#FFFFFF",
    fontSize: "0.875rem",
    fontFamily: Fonts.type.rajdhaniMedium,
    marginLeft: 6
  },
  maps: {
    height: 220,
    marginTop: 20
  },
  button: {
    width: 120,
    height: 35,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#26C91E"
  },
  buttonText: {
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.25rem"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  clearButton: {
    color: Colors.malachite,
    alignSelf: "center",
    marginRight: 15
  },
  header: {
    backgroundColor: "transparent",
    width: "100%",
    height: 30
  }
});
