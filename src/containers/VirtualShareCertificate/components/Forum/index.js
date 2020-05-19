import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Text } from "@AppComponents";
import { Colors, Images, Icons } from "@AppTheme";
import styles from "./styles";

const ForumItem = ({ data, index }) => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={styles.item}>
        <Image
          source={{ uri: data.thumbnail }}
          style={styles.itemImage}
          resizeMode="contain"
        />
        <View style={styles.itemBody}>
          <Text style={styles.itemTitle}>{data.topic.name}</Text>
          <Text style={styles.itemDescription}>{data.title}</Text>
          <Text style={styles.itemStatus}>
            Most recent by {data.lastComment.username} | {data.lastComment.time}{" "}
            | {data.category}
          </Text>
          <View style={styles.itemChat}>
            <Image source={Icons.bubble} style={styles.itemChatIcon} />
            <Text style={styles.itemChatCount}>14,500</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

class VirtualShareCertificateForum extends Component {
  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Most Recent | Categories</Text>
        </View>
        <FlatList
          data={data.forum}
          contentContainerStyle={{ paddingBottom: 10 }}
          renderItem={({ item, index }) => (
            <ForumItem data={item} index={index} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

VirtualShareCertificateForum.propTypes = {
  data: PropTypes.object.isRequired
};

export default VirtualShareCertificateForum;
