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
    padding: 20,
    backgroundColor: "#000"
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
    paddingHorizontal: 22,
    paddingTop: 10,
    backgroundColor: "#000"
  },
  title: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  txt1: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "Rajdhani-Medium",
    textAlign: "center"
  },
  txt2: {
    fontSize: 20,
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold"
  },
  txt3: {
    fontSize: 42,
    marginHorizontal: 30,
    color: Colors.malachite,
    fontFamily: "Rajdhani-Bold",
    textAlign: "center"
  },
  launchText: {
    fontSize: 42,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  launchButton: {
    width: "100%",
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.malachite,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  divider: {
    backgroundColor: "#FFF",
    height: 1,
    width: "35%",
    marginHorizontal: 20
  },
  setDateText: {
    fontSize: 42,
    color: "#707070",
    fontFamily: "Rajdhani-Bold"
  },
  setDateView: {
    width: "100%",
    height: 72,
    borderRadius: 36,
    borderColor: Colors.malachite,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  scheduleLaunchText: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "Rajdhani-Bold"
  },
  scheduleLaunchButton: {
    width: "100%",
    height: 48,
    borderRadius: 24,
    borderColor: Colors.malachite,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  }
});

export default styles;
