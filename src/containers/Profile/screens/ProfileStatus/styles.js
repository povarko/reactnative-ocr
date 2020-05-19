import EStylesheet from "react-native-extended-stylesheet";
import { Colors, Fonts } from "@AppTheme";

export default EStylesheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.textBlackColor
  },
  content: {
    backgroundColor: "#000",
    flex: 1
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    position: "absolute",
    width: "100%",
    top: 0
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  pending: {
    color: "#FF6200",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "2.625rem",
    textTransform: "uppercase",
    marginTop: 12,
    textAlign: "center"
  },
  error: {
    color: "#FF0000",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "2.625rem",
    textTransform: "uppercase",
    marginTop: 12,
    textAlign: "center"
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: "1.5rem",
    fontFamily: Fonts.type.rajdhani,
    marginTop: 6,
    textAlign: "center"
  },
  button: {
    width: 141.1,
    height: 35.09,
    backgroundColor: Colors.malachite,
    borderRadius: 25,
    marginTop: 12
  },
  altButton: {
    width: 141.1,
    height: 35.09,
    backgroundColor: "#000",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.malachite,
    marginTop: 12,
    marginBottom: 10
  },
  buttonText: {
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "0.938rem",
    color: "#FFFFFF",
    textTransform: "uppercase"
  },
  textBlock: {
    maxWidth: 300,
    alignItems: "center"
  }
});
