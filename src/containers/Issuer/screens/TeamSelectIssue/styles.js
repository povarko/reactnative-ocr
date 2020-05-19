import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@AppTheme";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackgroundColor
  },
  bodyContent: {
    padding: 24,
    paddingBottom: 0,
    flex: 1,
    backgroundColor: "#000"
  },
  searchBox: {
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.tundora,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8
  },
  searchInput: {
    flex: 1,
    fontFamily: "Rajdhani",
    fontSize: 18,
    color: "#FFF"
  },
  searchIcon: {
    marginLeft: 12,
    color: Colors.tundora,
    fontSize: 25
  },
  header: {
    marginTop: 8,
    justifyContent: "space-between"
  },
  profileCompletion: {
    marginLeft: 20,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium",
    fontSize: 14
  },
  profileCompletionBackground: {
    width: width - 88,
    height: 6,
    marginLeft: 20,
    borderRadius: 3,
    backgroundColor: "#464646",
    margin: 6
  },
  profileCompletionProgress: {
    width: (width - 88) / 10,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.malachite
  },
  list: {
    margin: 0,
    marginTop: 12,
    flex: 1
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
  selectedItem: {
    width: width / 2 - 30,
    height: 140,
    marginTop: -140,
    backgroundColor: "#26C91EA0",
    alignItems: "center",
    justifyContent: "center"
  },
  checkcircle: {
    fontSize: 38,
    color: "#FFF"
  },
  searchresultMark: {
    marginRight: 10,
    fontSize: 14,
    color: Colors.malachite
  },
  searchresultMark2: {
    marginRight: 10,
    fontSize: 20,
    color: Colors.malachite
  },
  header2: {
    margin: 10,
    justifyContent: "space-between"
  },
  searchCancel: {
    marginLeft: 12,
    color: Colors.malachite,
    fontSize: 25
  }
});

export default styles;
