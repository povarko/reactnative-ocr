import React from "react";
import { View, Image } from "react-native";
import { Text } from "@AppComponents";
import { Images } from "@AppTheme";
import styles from "./styles";

export default () => (
  <View style={styles.container}>
    <Image
      source={Images.logoWithTitle}
      style={styles.logo}
      resizeMode={"contain"}
    />
  </View>
);
