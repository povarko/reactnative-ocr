import { StyleSheet } from "react-native";
import { Colors } from "@AppTheme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  title: {
    color: Colors.tundora,
    fontFamily: "Rajdhani-Medium",
    fontSize: 14
  },
  activeTitle: {
    color: Colors.tundora,
    fontFamily: "Rajdhani-Bold",
    fontSize: 14
  },
  listImage: {
    tintColor: "green",
    width: 11,
    height: 11
  },
  imageContainer: {
    borderColor: Colors.forestGreen,
    borderWidth: 1,
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5
  },
  accounts: {
    //backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 5
  },
  account: {
    color: Colors.tundora,
    fontFamily: "Rajdhani-Medium",
    fontSize: wp("4.3%")
  },
  search: {
    flex: 1,
    paddingVertical: 4,
    fontSize: 14
  },
  searchContainer: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 6,
    marginLeft: 10,
    marginTop: 10,
    height: 25
  }
});
