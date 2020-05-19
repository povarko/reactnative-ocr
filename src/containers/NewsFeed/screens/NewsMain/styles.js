import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackgroundColor
  },
  container1: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFF"
  },
  bodyContent: {
    padding: 24,
    paddingBottom: 0,
    backgroundColor: "#000",
    flex: 1
  },
  header: {
    height: 48,
    backgroundColor: Colors.malachite,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Rajdhani-Bold"
  },
  athlete: {
    fontSize: 16,
    fontFamily: "Rajdhani-Bold",
    color: Colors.textBlackColor,
    marginRight: 6
  },
  item: {
    flex: 1,
    height: 165,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  itemTitle: {
    color: Colors.textBlackColor,
    fontSize: 18,
    fontFamily: "Rajdhani-Bold"
  },
  itemdetails: {
    color: Colors.textBlackColor,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium",
    height: 100
  },
  itemReadmore: {
    color: Colors.malachite,
    fontSize: 14,
    fontFamily: "Rajdhani-Bold"
  },
  photo: {
    height: 144
  },
  imgLike: {
    width: 14,
    height: 14
  },
  itemLike: {
    marginLeft: 3,
    color: Colors.textBlackColor,
    fontSize: 12,
    fontFamily: "Rajdhani-SemiBold"
  },
  source: {
    fontFamily: "Rajdhani",
    fontSize: 14,
    color: Colors.textBlackColor,
    textTransform: "uppercase",
    marginTop: 10
  },
  collapseItem: {
    marginBottom: 20,
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  expanditem: {
    marginBottom: 20,
    flex: 1
  },
  expandPhoto: {
    height: 190
  },
  expanditemdetails: {
    color: Colors.textBlackColor,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium",
    marginTop: 10
  },
  expandimgLike: {
    width: 20,
    height: 21
  },
  expanditemLike: {
    marginLeft: 3,
    color: Colors.textBlackColor,
    fontSize: 15,
    fontFamily: "Rajdhani-SemiBold"
  },
  changeValue: {
    color: Colors.malachite,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "Rajdhani-Bold"
  },
  changeIcon: {
    fontSize: 24
  },
  logo1: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.malachite
  },
  date: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 10,
    color: Colors.malachite
  },
  username: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 16,
    color: "#000"
  },
  comment: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 14,
    color: "#000"
  },
  reply: {
    fontFamily: "Rajdhani",
    fontSize: 10,
    color: "#464646",
    marginLeft: 10,
    marginTop: 3
  },
  logo2: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.malachite
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    marginRight: 20,
    justifyContent: "space-between"
  },
  detailsContainer: {
    padding: 10,
    paddingTop: 5
  },
  divider: {
    backgroundColor: "#E0E0E0",
    marginVertical: 12
  },
  dailyChangeView: {
    height: 36,
    marginTop: -36,
    backgroundColor: "#333",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  dailyChangeTitle: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Rajdhani",
    marginLeft: 10
  },
  dailyChangePhoto: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.malachite,
    backgroundColor: "#FFF",
    marginLeft: 10
  },
  dailyChangeRightArrow: {
    width: 12,
    height: 8,
    marginRight: 20
  }
});
