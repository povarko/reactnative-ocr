import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ScrollView, Image } from "react-native";
import { Text } from "@AppComponents";
import styles from "./styles";

class VirtualShareCertificateStory extends Component {
  render() {
    const { data } = this.props;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Text style={styles.title}>
          Childhood | Life Achievements | Timeline{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 12
          }}
        >
          <View style={{ flex: 0.35 }}>
            <Image
              //style={{ flex: 1, height: 100 }}
              source={data.poster}
              resizeMode="contain"
            />
          </View>
          <View style={styles.storyContainer}>
            <View style={[styles.row, { flexWrap: "wrap" }]}>
              <Text style={styles.name}>The</Text>
              <Text style={[styles.name, { textTransform: "uppercase" }]}>
                {" "}
                {data.name}{" "}
              </Text>
              <Text style={styles.name}>biography</Text>
            </View>
            <Text style={styles.story}>{data.story[0].text}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.story2}>{data.story[1].text}</Text>
          <View style={{ flex: 0.24, alignItems: "flex-end" }}>
            <Image
              source={{ uri: data.story[1].photo }}
              style={{ width: 60, height: 60 }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

VirtualShareCertificateStory.propTypes = {
  data: PropTypes.object.isRequired
};

export default VirtualShareCertificateStory;
