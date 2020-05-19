import { StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors } from "@AppTheme";
const { width, height } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackgroundColor
  },
  bodyContent: {
    paddingBottom: 0,
    flex: 1,
    backgroundColor: "#000"
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000"
  },
  textTitle: {
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold",
    fontSize: 22
  },
  teamAvatar: {
    width: wp("30%"),
    height: wp("30%"),
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.malachite,
    borderWidth: 1,
    borderRadius: wp("15%"),
    marginTop: 10
  },
  teamIcon: {
    width: wp("30%") - 2,
    height: wp("30%") - 2,
    borderRadius: wp("15%"),
    backgroundColor: "#000",
    marginTop: 1
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("70%"),
    height: 40,
    borderColor: Colors.malachite,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10
  },
  inputStyle: {
    height: hp("6.9%"),
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
  profileCompletion: {
    marginLeft: wp("10%"),
    color: "#FFF",
    fontFamily: "Rajdhani-Medium",
    fontSize: 14
  },
  profileCompletionBackground: {
    width: wp("80%"),
    height: 6,
    borderRadius: 3,
    backgroundColor: "#464646",
    margin: 6
  },
  profileCompletionProgress: {
    width: (width - 88) / 5,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.malachite
  },
  list: {
    padding: 10,
    flex: 1,
    backgroundColor: "#1F1F1F"
  },
  photo: {
    width: width / 2 - 30,
    height: 140,
    flex: 1,
    backgroundColor: "#ddd"
  },
  processdView: {
    height: 80,
    width: width,
    backgroundColor: Colors.darkBackgroundColor,
    alignItems: "center",
    justifyContent: "center"
  },
  proceedButtonView: {
    width: 280,
    height: 48,
    borderColor: Colors.malachite,
    borderWidth: 1,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  proceedText: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  teamText: {
    fontSize: 28,
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold"
    // padding: 12
  },
  header2: {
    paddingTop: 20,
    justifyContent: "space-between",
    backgroundColor: "#000"
  },
  avatar: {
    borderWidth: 1,
    borderColor: Colors.malachite,
    overflow: "hidden"
  },
  emptyavatar: {
    width: wp("50%"),
    height: wp("50%"),
    borderColor: Colors.malachite,
    borderWidth: 1,
    borderRadius: wp("25%"),
    alignItems: "center",
    justifyContent: "center"
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  avatarIcon: {
    tintColor: "#DDD",
    width: 120,
    height: 100,
    marginTop: 30,
    marginLeft: 10
  },
  addNameText: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold",
    marginBottom: 50
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    flex: 1
  },
  inputItem: {
    width: wp("70%"),
    height: 60,
    borderRadius: 100,
    borderColor: Colors.malachite
  },
  inputItem3: {
    width: "100%",
    height: 110,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#AAA",
    borderWidth: 1,
    padding: 15,
    marginBottom: 20
  },
  inputSmall: {
    fontFamily: "Rajdhani-Bold",
    color: "#C6C6C6",
    fontSize: 14,
    padding: 0
  },
  inputItem2: {
    width: "100%",
    height: 32,
    borderRadius: 16
  },
  teamImage: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: Colors.malachite,
    borderRadius: 6
    // marginTop: 5
  },
  label: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 32,
    letterSpacing: 2
  },
  previewText: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 16,
    color: "#FFF"
  },
  icons: {
    width: 16,
    height: 16,
    tintColor: Colors.malachite,
    marginLeft: -30,
    marginTop: -15,
    marginRight: 20
  },
  iconsRight: {
    width: 16,
    height: 16,
    tintColor: Colors.malachite,
    marginRight: 20
  },
  helpSupportText: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium"
  },
  bioContent: {
    marginLeft: wp("8%"),
    width: wp("84%"),
    padding: 14,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: Colors.darkBackgroundColor
  },
  maps: {
    height: 140,
    width: "100%",
    marginTop: 10
  },

  //player tab
  tabContentView: {
    marginLeft: wp("8%"),
    width: wp("84%"),
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: "#1F1F1F"
  },
  tabContentHeader: {
    width: "50%",
    height: 48,
    alignItems: "center",
    justifyContent: "center"
  },
  tabTitleSelected: {
    fontSize: 30,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  tabTitleUnselected: {
    fontSize: 30,
    color: "#464646",
    fontFamily: "Rajdhani-Bold"
  },
  searchBox: {
    margin: 10,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.tundora,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15
  },
  searchInput: {
    flex: 1,
    fontFamily: "Rajdhani-Bold",
    fontSize: 24,
    color: "#FFF"
  },
  searchIcon: {
    marginLeft: 12,
    color: Colors.tundora,
    fontSize: 25
  }
});

export default styles;
