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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    paddingTop: 10
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
    fontFamily: Fonts.type.rajdhani,
    fontSize: 36,
    textAlign: "center",
    letterSpacing: -2
  },
  subContentView: {
    marginHorizontal: 40,
    marginTop: 20,
    marginBottom: 150,
    height: 330,
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
    marginTop: 20,
    width: "90%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    borderColor: Colors.malachite,
    borderWidth: 1
  },
  roundButtonText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Rajdhani-Bold"
  },
  inputViews: {
    alignItems: "center",
    borderColor: "#C6C6C6",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: "90%",
    marginTop: 10,
    flexDirection: "row"
  },
  input: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 18,
    color: "#FFF",
    width: "85%",
    paddingHorizontal: 3,
    paddingVertical: 10,
    padding: 0
  },
  input1: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 18,
    color: "#FFF",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    padding: 0
  },
  dollarTitle: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 18,
    color: "#FFF",
    marginLeft: 15
  },
  fundTitle: {
    fontFamily: "Rajdhani",
    fontSize: 16,
    color: "#FFF"
  },
  availableTitle: {
    fontFamily: "Rajdhani",
    fontSize: 16,
    color: Colors.malachite
  },
  maxTitle: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 20,
    color: Colors.malachite
  }
});
