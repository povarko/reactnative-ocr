import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  container: {
    backgroundColor: "transparent",
    // backgroundColor: "#2F2F2F",
    width: wp("90%"),
    height: hp("50%"),
    alignItems: "center"
  },
  content: {
    flex: 1,
    width: "100%",
    // justifyContent: "center",
    backgroundColor: "#2F2F2F",
    alignItems: "center"
    // paddingTop: 45
  },
  circleIcon: {
    width: 70,
    height: 70,
    marginTop: -35
  },
  titleLabel: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 42,
    marginTop: 20
  },
  descriptionLabel: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniMedium,
    fontSize: 16
  },
  button: {
    width: wp("70%"),
    height: 35,
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: "#26C91E"
  },
  buttonText: {
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.25rem"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: wp("70%")
  },
  pickerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 120,
    margin: 10
  },
  inputIOS: {
    fontFamily: "Rajdhani",
    fontSize: 16,
    color: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 100
  },
  inputAndroid: {
    fontFamily: "Rajdhani",
    fontSize: 16,
    color: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 100
  }
});
