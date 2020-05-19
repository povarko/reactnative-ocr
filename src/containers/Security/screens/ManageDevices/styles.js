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
  content: {
    flex: 1,
    backgroundColor: "#000000"
  },
  header: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center"
  },
  headerTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.malachite,
    fontSize: "1.5rem",
    fontFamily: Fonts.type.rajdhaniBold,
    flex: 1
  },
  revokeRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 3
  },
  revokeIcon: {
    width: 24,
    height: 23,
    tintColor: Colors.malachite
  },
  revokeText: {
    marginLeft: 2,
    color: "#FFFFFF",
    fontSize: "0.75rem",
    fontFamily: Fonts.type.rajdhaniSemibold
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 5,
    alignItems: "center",
    flex: 1
  },
  table: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333333"
  },
  tableRow: {
    flex: 0.9
  },
  tableIcons: {
    flex: 0.1,
    backgroundColor: Colors.malachite,
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#333333",
    paddingLeft: 10,
    paddingRight: 22,
    paddingVertical: 3
  },
  tableTitle: {
    color: "#FFFFFF",
    fontSize: "0.875rem",
    fontFamily: Fonts.type.rajdhani,
    flex: 1,
    textTransform: "uppercase"
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    paddingLeft: 10,
    paddingRight: 22,
    paddingVertical: 14
  },
  tableText: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhani,
    fontSize: "0.75rem",
    flex: 1
  },
  icon: {
    width: 24,
    height: 23,
    tintColor: "#FFF"
  },
  overlay: {
    backgroundColor: "#1A1A1A"
  },
  overlayContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45
  },
  overlayTitle: {
    color: Colors.malachite,
    fontSize: "2.625rem",
    fontFamily: Fonts.type.rajdhaniBold,
    textTransform: "uppercase"
  },
  overlayTextTop: {
    fontSize: "1rem",
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhani,
    textAlign: "center"
  },
  overlayTextBottom: {
    fontSize: "1rem",
    color: "#FFFFFF",
    fontFamily: Fonts.type.rajdhani,
    paddingHorizontal: 25,
    marginTop: 5,
    textAlign: "center"
  },
  top: {
    ...EStylesheet.absoluteFill,
    width: "100%",
    height: 50,
    flexDirection: "row",
    top: -28
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    left: 40
  },
  circleIcon: {
    tintColor: "#FFFFFF",
    width: 30,
    height: 30
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25
  },
  inverseButton: {
    backgroundColor: "#000000",
    width: 72,
    height: 24,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.malachite,
    marginRight: 5
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: "0.75rem",
    fontFamily: Fonts.type.rajdhaniBold,
    textTransform: "uppercase"
  },
  button: {
    width: 72,
    height: 24,
    backgroundColor: Colors.malachite,
    borderRadius: 14,
    marginLeft: 5
  }
});
