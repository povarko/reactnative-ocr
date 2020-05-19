import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@AppComponents";
import styles from "./styles";

export default (TopTabBar = ({ activeTab, labels, onPressTab }) => {
  return (
    <View style={styles.tabs}>
      {labels.map((label, index) => (
        <TouchableOpacity
          key={index}
          style={activeTab == index ? styles.activeTab : null}
          onPress={() => onPressTab(index)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab == index ? styles.activeTabText : null
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
});
