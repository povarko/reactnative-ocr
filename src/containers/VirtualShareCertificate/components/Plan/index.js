import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity, FlatList, Linking } from "react-native";
import { Text, Readmore } from "@AppComponents";
import { Icons } from "@AppTheme";
import styles from "./styles";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const PlanItem = ({ data, index }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={index % 2 == 0 ? styles.item : styles.itemReverse}>
        <Image
          source={{ uri: data.thumbnail }}
          style={{ height: 148, width: 148 }}
        />
        <View style={{ width: 10 }} />
        <View style={{ width: wp("53%") }}>
          <Text style={styles.itemTitle}>{data.title}</Text>
          <Readmore
            text={data.text}
            previewLines={5}
            textStyle={styles.itemDescription}
            buttonStyle={styles.itemReadMore}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

class VirtualShareCertificatePlan extends Component {
  _habdleBrowserOpen = async url => {
    Linking.openURL(url);
  };

  _renderSocialMedia() {
    const social = this.props.data.social;

    return (
      <>
        {Object.keys(social).map((key, i) => {
          if (social[key]) {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => this._habdleBrowserOpen(social[key])}
              >
                <Image source={Icons[key]} style={styles.socialIcon} />
              </TouchableOpacity>
            );
          }
        })}
      </>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Training | Foundation | Live</Text>
          <View style={styles.socialIcons}>{this._renderSocialMedia()}</View>
        </View>
        <FlatList
          data={data.plan}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 10 }}
          renderItem={({ item, index }) => (
            <PlanItem data={item} index={index} />
          )}
        />
      </View>
    );
  }
}

VirtualShareCertificatePlan.propTypes = {
  data: PropTypes.object.isRequired
};

export default VirtualShareCertificatePlan;
