import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  body: {
    flex: 1
  },
  title: {
    color: "#FFF",
    fontSize: 19
  },
  amount: {
    color: Colors.malachite
  }
});

export default styles;
