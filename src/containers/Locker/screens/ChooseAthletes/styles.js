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
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    justifyContent: "space-between"
  },
  mapmarker: {
    color: Colors.malachite,
    fontSize: 18
  },
  changeLocation: {
    marginLeft: 5,
    color: Colors.malachite,
    fontSize: 15
  },
  sortIcon: {
    color: Colors.malachite,
    fontSize: 20,
    marginLeft: 8
  },
  list: {
    margin: 0,
    marginTop: 12,
    flex: 1
  },
  photo: {
    width: width / 3 - 30,
    height: 100,
    flex: 1,
    backgroundColor: "#ddd"
  },
  itemView: {
    width: width / 3 - 30,
    height: 30,
    // backgroundColor: "#00000020",
    alignItems: "center"
  },
  itemName: {
    marginTop: 5,
    fontSize: 11,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  itemSport: {
    marginTop: 0,
    fontSize: 11,
    color: "#FFF",
    fontFamily: "Rajdhani-SemiBold"
  },
  processdView: {
    height: 80,
    width: width,
    backgroundColor: Colors.textBlackColor,
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
    width: width / 3 - 30,
    height: 100,
    marginTop: -100,
    backgroundColor: "#26C91EA0",
    alignItems: "center",
    justifyContent: "center"
  },
  checkcircle: {
    fontSize: 38,
    color: "#FFF"
  }
});

export default styles;
