import React from "react";
import { Text } from "react-native";

const CustomTextComponent = props => (
  <Text
    {...props}
    allowFontScaling={false}
    style={[{ color: "#000" }, props.style]}
  />
);

export default CustomTextComponent;
