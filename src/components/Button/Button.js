import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@AppComponents";
import { Colors } from "@AppTheme";
import styles from "./styles";

const Button = ({
  onPress = () => {},
  title,
  textStyle,
  style,
  disabled = false
}) => (
  <TouchableOpacity
    onPress={disabled ? null : onPress}
    activeOpacity={disabled ? 1 : 0.8}
  >
    <View style={[styles.container, style]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;
