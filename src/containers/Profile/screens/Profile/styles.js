import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7"
  },
  content: {
    backgroundColor: "#f7f7f7"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10
  },
  title: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.5rem",
    textTransform: "uppercase",
    textAlign: "center"
  },
  icons: {
    width: 18,
    height: 18
  },
  headerBackground: {
    width: wp("100%"),
    height: hp("35%")
  },
  avatar: {
    borderWidth: 1,
    borderColor: Colors.malachite,
    overflow: "hidden"
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20
  },
  avatarIcon: {
    tintColor: "#FFF",
    width: 18,
    height: 18,
    position: "absolute",
    bottom: 10
  },
  inputContainer: {
    justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    // position: "absolute",
    marginTop: 30,
    flex: 1
  },
  usernameContainer: {
    height: 60,
    width: wp("75%"),
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.malachite,
    overflow: "hidden",
    backgroundColor: "#000",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  inputLarge: {
    color: "#000",
    fontSize: "2.0rem",
    fontFamily: Fonts.type.rajdhaniBold,
    padding: 0
  },
  label: {
    fontFamily: Fonts.type.rajdhaniSemibold,
    fontSize: "1.125rem",
    letterSpacing: 0
  },
  line: {
    width: wp("100%") - 40,
    height: 1,
    backgroundColor: "#c8c8ca"
  },
  inputSmall: {
    color: "#000",
    fontFamily: Fonts.type.rajdhaniMedium,
    fontSize: "1.125rem"
  },
  inputItem: {
    width: wp("35%"),
    height: 46,
    padding: 0
  },
  namesContainer: {
    marginTop: 25,
    flexDirection: "row"
  },
  location: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#8E8E8E",
    width: wp("75%"),
    borderRadius: 20,
    height: 38,
    alignItems: "center",
    paddingHorizontal: 15
  },
  locationLabel: {
    fontFamily: Fonts.type.rajdhaniSemibold,
    letterSpacing: 0,
    color: "#000",
    fontSize: "1.125rem",
    marginBottom: 5,
    marginLeft: 10
  },
  locationTitle: {
    fontFamily: Fonts.type.rajdhaniMedium,
    fontSize: "1.125rem",
    marginLeft: 5,
    color: "#000"
  },
  locationChange: {
    textDecorationLine: "underline",
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniMedium,
    fontSize: "1.125rem",
    marginLeft: 5
  },
  button: {
    width: 130,
    borderWidth: 1,
    borderColor: Colors.malachite,
    borderRadius: 20,
    backgroundColor: "#000",
    marginTop: 20,
    marginBottom: 20
  },
  buttonText: {
    fontSize: "1.25rem",
    fontFamily: Fonts.type.rajdhaniBold
  },
  error: {
    color: "red",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "0.875rem",
    marginTop: 4
  },
  overlay: {
    width: wp("100%"),
    height: hp("100%"),
    justifyContent: "center",
    alignItems: "center",
    ...EStylesheet.absoluteFill,
    backgroundColor: "#00000057"
  }
});
