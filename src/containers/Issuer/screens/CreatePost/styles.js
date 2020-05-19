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
    backgroundColor: "#000",
    paddingHorizontal: 20,
    width: wp("100%")
  },
  header: {
    paddingTop: 10
  },
  content: {
    width: wp("90%"),
    backgroundColor: "#0D0D0D",
    borderColor: Colors.malachite,
    borderWidth: 0.5,
    borderTopWidth: 5,
    marginTop: 30,
    paddingTop: 20,
    paddingHorizontal: 12,
    paddingBottom: 30,
    alignItems: "center"
  },
  subTitle: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: Fonts.type.rajdhani
  },
  itemContent: {
    width: wp("80%"),
    height: 70,
    borderWidth: 1,
    borderColor: Colors.malachite,
    borderRadius: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 20
  },
  itemContentSelected: {
    width: wp("80%"),
    height: 70,
    backgroundColor: Colors.malachite,
    borderRadius: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 20
  },
  itemText: {
    width: wp("80%") - 100,
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: 30,
    marginLeft: 15
  },
  itemIconSelected: {
    fontSize: 23,
    color: "#FFF"
  },
  itemIcon: {
    fontSize: 23,
    color: Colors.malachite
  }
});
