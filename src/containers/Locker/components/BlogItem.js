import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import { Divider } from "react-native-elements";
import { Colors, Icons } from "@AppTheme";
import reactotron from "reactotron-react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  divider: {
    backgroundColor: "#E0E0E0",
    height: 1.5,
    marginVertical: 20
  },
  wrapper: {},
  item: {
    flexDirection: "row"
  },
  photo: {
    height: 144,
    width: 109
  },
  contentContainer: {
    justifyContent: "space-between",
    paddingLeft: 25,
    flex: 0.7
  },
  title: {
    color: "#111",
    fontSize: 18,
    fontFamily: "Rajdhani-Bold"
  },
  body: {
    fontSize: 14,
    color: "#111",
    fontFamily: "Rajdhani"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconTitle: {
    color: "#111",
    fontSize: 12,
    fontFamily: "Rajdhani-SemiBold",
    marginLeft: 3
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default ({ data, onPress }) => {
  const IconItem = ({ name, title }) => (
    <View style={styles.row}>
      <FontAwesome5 solid name={name} color={Colors.malachite} />
      <Text style={styles.iconTitle}>{title}</Text>
    </View>
  );

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.wrapper}>
        <View style={styles.item}>
          <View style={{ flex: 0.3 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                onPress(index);
              }}
            >
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.photo}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            <View>
              <Text
                onPress={() => onPress(index)}
                style={styles.title}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {item.topic.name}
              </Text>
              <Text style={styles.body} ellipsizeMode="tail" numberOfLines={4}>
                {item.title}
              </Text>
            </View>

            <View style={styles.actionRow}>
              <IconItem name="thumbs-up" title="Like" />
              <IconItem name="comment" title="Comment" />
              <IconItem name="share-alt" title="Share" />
              <Image source={Icons.expandAlt} resizeMode="contain" />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
      />
    </View>
  );
};
