import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.textBlackColor
  },
  background: {
    flex: 1,
    paddingVertical: 14
  },
  content: {
    flex: 1,
    width: wp("100%"),
    alignItems: "center",
    paddingTop: 5,
    paddingHorizontal: 20
  },
  infoRow: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
    paddingLeft: 35
  },
  name: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 20,
    lineHeight: 25,
    textTransform: "uppercase"
  },
  clubName: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 26,
    marginTop: 3
  },
  pricesRow: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("78%"),
    justifyContent: "center",
    marginTop: 18
  },
  priceTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: Fonts.type.rajdhani
  },
  verticalLine: {
    height: "100%",
    width: 1,
    backgroundColor: Colors.malachite,
    marginHorizontal: 10
  },
  price: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: 36,
    marginTop: 3
  },
  stakesContainer: {
    backgroundColor: "#0D0D0D",
    width: wp("88%"),
    //justifyContent: 'center',
    alignItems: "center",
    marginTop: 40,
    paddingVertical: 25
  },
  trophy: {
    position: "absolute",
    top: -40,
    width: 80,
    height: 80
  },
  stakeTitle: {
    textTransform: "uppercase",
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    textAlign: "center",
    fontSize: 22,
    marginTop: 20
  },
  stakes: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 36,
    textAlign: "center",
    top: -6
  },
  stakeValue: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhani,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 20,
    top: -6
  },
  serial: {
    fontFamily: Fonts.type.rajdhaniBold,
    color: "#FFF",
    fontSize: 13,
    marginLeft: 8
  },
  edition: {
    fontFamily: Fonts.type.rajdhani,
    color: "#FFF",
    fontSize: 13
  },
  button: {
    width: 290,
    height: 48,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.malachite,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 25
  },
  buttonText: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 20,
    textTransform: "uppercase"
  }
});
