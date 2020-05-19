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
  logoIcon: {
    width: 121,
    height: 138,
    marginBottom: 10
  },
  globeView: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.malachite,
    margin: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  txt1: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Rajdhani"
  },
  txt2: {
    fontSize: 30,
    marginHorizontal: 30,
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold",
    textAlign: "center"
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
  },
  goText: {
    fontSize: 18,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  }
});

export default styles;
