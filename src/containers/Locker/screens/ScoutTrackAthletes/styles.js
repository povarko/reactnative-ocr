import { StyleSheet } from "react-native";
import { Colors, Fonts } from "@AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A"
  },
  bodyContent: {
    padding: 24,
    paddingBottom: 0,
    backgroundColor: "#000",
    flex: 1
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
  backIcon: {
    color: "#FFF",
    fontSize: 24
  },
  sortIcon: {
    color: Colors.malachite,
    fontSize: 20,
    marginLeft: 8
  },
  list: {
    marginTop: 12
  },
  descriptionLabel: {
    marginTop: 20,
    margin: 10,
    color: "#FFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: 16,
    textAlign: "center"
  }
});

export default styles;
