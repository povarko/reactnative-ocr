import React from "react";
import { TextInput, View, Image, Text } from "react-native";
import styles from "./styles";

export default ({
  iconSource,
  label,
  labelStyle,
  inputStyle,
  style = {},
  ...rest
}) => {
  const containerStyle = {};

  if (style.width) {
    // put lable and input in equal width container
    containerStyle.width = style.width;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.inputContainer, style]}>
        {iconSource && (
          <Image resizeMode="contain" source={iconSource} style={styles.icon} />
        )}
        <TextInput
          autoCapitalize="none"
          style={[styles.input, inputStyle, { padding: 0 }]}
          placeholderTextColor="#9e9d9d"
          {...rest}
        />
      </View>
    </View>
  );
};
