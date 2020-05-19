import React, { Component } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { Tabs, Text } from "@AppComponents";
import athletes from "@Assets/forums/SX-_Athlete_Forums";
import teams from "@Assets/forums/SX-Teams-Forums";
import sports from "@Assets/forums/SX-Sport-Forums";
import styles from "./styles";

class ForumItems extends Component {
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.item}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: item.thumbnail }}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>
          <View style={{ flex: 0.8 }}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.topic}>
              {item.topic.name}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
              {item.title}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.content}
            >{`Most recent by ${item.lastComment.username} | ${
              item.lastComment.time
            } | ${item.category}`}</Text>
          </View>
          <View style={{ flex: 0.13, flexDirection: "row" }}>
            <Image
              source={{
                uri:
                  "https://img.icons8.com/material-rounded/24/000000/speech-bubble-with-dots.png"
              }}
              style={styles.icon}
            />
            <Text style={styles.total}>{item.comments}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    );
  }
}

export default class Forums extends Component {
  render() {
    return (
      <Tabs
        tabs={[
          { title: "ATHLETES", render: () => <ForumItems data={athletes} /> },
          { title: "TEAMS", render: () => <ForumItems data={teams} /> },
          { title: "SPORTS", render: () => <ForumItems data={sports} /> }
        ]}
      />
    );
  }
}
