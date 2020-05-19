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
    paddingHorizontal: 20,
    paddingTop: 10
  },
  title: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.5rem",
    textTransform: "uppercase",
    textAlign: "center"
  },
  icons: {
    width: 7,
    height: 29,
    marginTop: 5
  },
  headerBackground: {
    width: wp("100%"),
    height: hp("100%") - 180
  },
  bodyContent: {
    // backgroundColor: "#000",
    padding: 24
  },
  graph: {
    height: 200,
    width: wp("100%") - 30,
    marginLeft: -10,
    marginTop: -20
  },
  issuanceDatapoint: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    marginTop: 10
  },
  issuanceDatapoint2: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    marginTop: -20
  }
});
