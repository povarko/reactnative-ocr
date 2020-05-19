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
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    width: wp("100%")
  },
  header: {
    marginTop: 15,
    // marginLeft: 10,
    alignSelf: "flex-start"
  },
  content: {
    width: wp("90%"),
    backgroundColor: "#0D0D0D",
    borderColor: Colors.malachite,
    borderWidth: 0.5,
    borderTopColor: Colors.malachite,
    borderTopWidth: 5,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 30
  },
  inputContainer: {
    borderColor: "#464646",
    borderWidth: 1,
    borderRadius: 30,
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 5
  },
  input: {
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "2.3rem",
    color: "#C6C6C6"
  },
  divider: {
    backgroundColor: "#464646",
    width: wp("78%"),
    alignSelf: "center"
  },
  salesContainer: {
    marginTop: 18,
    paddingHorizontal: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },
  title: {
    color: "#FFF",
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.25rem",
    textTransform: "uppercase"
  },
  price: {
    color: Colors.malachite,
    fontFamily: Fonts.type.rajdhaniBold,
    fontSize: "1.25rem"
  },
  button: {
    alignSelf: "center",
    height: 46,
    width: wp("80%"),
    borderWidth: 1,
    borderColor: Colors.malachite,
    borderRadius: 20,
    backgroundColor: "transparent",
    marginTop: 10,
    marginBottom: 40
  },
  buttonText: {
    color: "#FFF",
    fontSize: "1.25rem",
    fontFamily: Fonts.type.rajdhaniBold
  }
});
