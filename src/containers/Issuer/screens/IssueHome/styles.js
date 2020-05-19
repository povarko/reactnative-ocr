import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.textBlackColor
  },
  headerBackground: {
    width: wp("100%"),
    height: height - 115
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10
  },
  bodyContent: {
    padding: 20,
    paddingBottom: 30,
    flex: 1,
    alignItems: "center"
    // justifyContent: "center"
  },
  chooseItemSelected: {
    width: width - 50,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.malachite,
    flexDirection: "row",
    alignItems: "center"
  },
  chooseItem: {
    width: width - 50,
    height: 80,
    borderRadius: 40,
    borderColor: Colors.malachite,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  chooseItemImage: {
    fontSize: 45
  },
  chooseItemText: {
    marginLeft: 20,
    color: "#FFF",
    fontSize: 30,
    fontFamily: "Rajdhani-Bold"
  },
  divideOR: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default styles;
