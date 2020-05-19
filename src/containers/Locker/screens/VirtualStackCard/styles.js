import EStylesheet from "react-native-extended-stylesheet";
import { Fonts, Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default EStylesheet.create({
  container: {
    flex: 1,
    height: hp("78%"),
    backgroundColor: "#000"
  },
  background: {
    flex: 1,
    marginBottom: 10
  },
  dummyImage: {
    // height: hp("22%"),
    width: "100%"
  },
  addImage: {}
});
