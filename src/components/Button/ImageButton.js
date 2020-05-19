import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "@AppComponents";
import { Colors, Icons } from "@AppTheme";
import styles from "./styles";

const ImageButton = ({
  onPress = () => {},
  title,
  textStyle,
  style,
  icon,
  iconAlign = "left",
  disabled = false
}) => (
  <TouchableOpacity
    onPress={disabled ? null : onPress}
    activeOpacity={disabled ? 1 : 0.8}
  >
    <View style={[styles.container0, styles.row, style]}>
      {iconAlign === "left" && (
        <Image style={{marginRight: 10}} source={icon} />
      )}      
      <Text style={[styles.title, textStyle]}>{title}</Text>
      {iconAlign === "right" && (
        <Image style={{marginLeft: 10}} source={icon} />
      )}
    </View>
  </TouchableOpacity>
);

export default ImageButton;
