import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  background: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: Colors.textBlackColor
  },
  header: {
    flexDirection: "row",
    width: wp("100%"),
    alignItems: "center",
    alignSelf: "flex-start"
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center"
  },
  title: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 20,
    textTransform: "uppercase"
  },
  name: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 20,
    textTransform: "uppercase",
    marginTop: 10,
    textAlign: "center"
  },
  club: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 30,
    textAlign: "center"
  },
  infoContainer: {
    backgroundColor: "#0D0D0D",
    width: wp("88%"),
    alignItems: "center",
    marginTop: 40,
    paddingVertical: 25,
    minHeight: 100
  },
  icon: {
    position: "absolute",
    top: -30
  },
  infoTitle: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 24,
    textAlign: "center",
    textTransform: "uppercase"
  },
  bid: {
    color: "#FF0000",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 42,
    textAlign: "center"
  },
  subtitle: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: 20,
    textAlign: "center",
    marginTop: 6
  },
  button: {
    width: 290,
    height: 45,
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
