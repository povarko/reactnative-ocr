import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@AppTheme";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackgroundColor
  },
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  background: {
    position: "absolute",
    left: 0,
    top: 0,
    width: width,
    height: height
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 12
  },
  title: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5
  },
  congrate: {
    width: width * 0.2,
    height: width * 0.2
    // margin: 40
  },
  txt1: {
    fontSize: 42,
    color: "#F00",
    textAlign: "center",
    fontFamily: "Rajdhani-Bold"
  },
  txt2: {
    fontSize: 18,
    marginHorizontal: 5,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium",
    textAlign: "center"
  },
  goText: {
    fontSize: 15,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  backButton: {
    width: 140,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.malachite,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
    // width: "60%"
  },
  txtDays: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium"
  },
  txtDaysVal: {
    fontSize: 36,
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold"
  },
  divider: {
    backgroundColor: "#FFF",
    width: 1,
    height: "100%",
    marginHorizontal: 20
  }
});

export default styles;
