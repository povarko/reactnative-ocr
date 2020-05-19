import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";

export default EStylesheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 45,
    height: 45
  },
  message: {
    color: "#FFF",
    fontSize: "1.5rem",
    fontFamily: Fonts.type.rajdhaniSemibold,
    textAlign: "center",
    marginTop: 5,
    paddingHorizontal: 20
  },
  iconContainer: {
    marginTop: 22,
    marginBottom: 10,
    backgroundColor: Colors.malachite,
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.malachite,
    width: 137,
    height: 36,
    borderRadius: 20
  },
  buttonText: {
    fontSize: "1.25rem",
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold
  }
});
