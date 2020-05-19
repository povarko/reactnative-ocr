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
  tabView: {
    marginTop: 10
  },
  tabs: {
    height: 50,
    flexDirection: "row"
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  tabActive: {
    backgroundColor: "#0D0D0D",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: Colors.malachite
  },
  tabInactive: {
    borderBottomWidth: 1,
    borderColor: Colors.malachite
  },
  tabText: {
    fontSize: 22,
    fontFamily: "Rajdhani-Bold"
  },
  tabContent: {
    borderWidth: 1,
    borderTopWidth: 0,
    backgroundColor: "#0D0D0D",
    borderColor: Colors.malachite,
    // height: 200
    margin: 0,
    marginBottom: 100
  },
  graph: {
    height: 200,
    width: wp("100%") - 30,
    marginLeft: -10
  },
  issuanceDatapoint: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    marginTop: 10
  },
  tradingDatapoint: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    marginTop: 10
  },
  tradingActiveTab: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: Colors.malachite
  },
  tradingActiveTabLeft: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderColor: Colors.malachite
  },
  tradingActiveTabRight: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: Colors.malachite
  },
  tradingInactiveTab: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.malachite
  },
  tradingTab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
