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
  header: {
    paddingHorizontal: 22,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: 5
  },
  nameTitle: {
    marginTop: 10,
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center"
  },
  teamTitle: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 30,
    textAlign: "center"
  },
  headerBackground: {
    width: wp("100%"),
    height: hp("100%") - 110
  },
  avatar: {
    borderWidth: 1,
    borderColor: Colors.malachite,
    borderRadius: 60,
    width: 120,
    height: 120
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20
  },
  priceTitle1: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: 16,
    textAlign: "center",
    height: 18
  },
  priceTitle: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniSemiBold,
    fontSize: 36,
    textAlign: "center"
  },
  subContentView: {
    marginHorizontal: 40,
    marginTop: 20,
    marginBottom: 100,
    height: 200,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center"
  },
  currentPathTitle: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center"
  },
  auctionTitle: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 42,
    textAlign: "center",
    height: 42
  },
  roundButton: {
    marginTop: 10,
    width: 140,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: Colors.malachite
  },
  roundButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "Rajdhani-Bold"
  }
});
