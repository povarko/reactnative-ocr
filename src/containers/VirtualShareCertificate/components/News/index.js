import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity, FlatList, Linking } from "react-native";
import { Text, Readmore } from "@AppComponents";
import { Colors, Icons } from "@AppTheme";
import styles from "./styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const NewsItem = ({ data, index }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={[
          styles.item,
          { backgroundColor: index % 2 == 0 ? "#FFF" : Colors.gallery }
        ]}
      >
        <Image
          source={{ uri: data.thumbnail }}
          style={styles.itemImage}
          resizeMode={"cover"}
        />
        <View style={{ width: wp("60%") }}>
          <Text style={styles.itemTitle}>{data.title}</Text>
          <Readmore
            text={data.text}
            previewLines={2}
            textStyle={styles.itemDescription}
            buttonStyle={styles.itemReadMore}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

class VirtualShareCertificateNews extends Component {
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
          <Text style={styles.title}>In the News | Press Releases</Text>
          <View style={styles.socialIcons}>{this._renderSocialMedia()}</View>
        </View>
        <FlatList
          data={data.news}
          contentContainerStyle={{ paddingBottom: 10 }}
          renderItem={({ item, index }) => (
            <NewsItem data={item} index={index} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

VirtualShareCertificateNews.propTypes = {
  data: PropTypes.object.isRequired
};

export default VirtualShareCertificateNews;
