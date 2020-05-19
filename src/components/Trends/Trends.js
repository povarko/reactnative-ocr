import React, { Component } from "react";
import { FlatList, View, TouchableOpacity, Image } from "react-native";
import { Text } from "@AppComponents";
import PropTypes from "prop-types";
import styles from "./styles";

const newListed = [
  { uri: "https://img.icons8.com/office/16/000000/boxing.png", name: "BOXING" },
  {
    uri: "https://img.icons8.com/ios/50/000000/motorcycle-filled.png",
    name: "MOTOGP"
  },
  {
    uri: "https://img.icons8.com/color/48/000000/f1-race-car-top-veiw.png",
    name: "NASCAR"
  },
  {
    uri: "https://img.icons8.com/material/24/000000/exercise.png",
    name: "IAAF"
  },
  {
    uri: "https://img.icons8.com/office/16/000000/cycling-road.png",
    name: "CYCLING"
  }
];

const Header = ({ title, light }) => (
  <View style={light ? styles.headerLight : styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

class TrendItem extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  renderItem = ({ item, index }) => {
    const { type } = this.props;
    let actionText = `${item.change || 2.54}%`;
    let changeStyle = styles.change;

    if (type == "newListed") {
      actionText = "View";
      changeStyle = [changeStyle, { fontWeight: "normal" }];
    }

    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.item}>
          <View
            style={[
              styles.avatarContainer,
              type !== "sports" && { backgroundColor: "transparent" }
            ]}
          >
            <Image
              source={item.image ? item.image : { uri: item.uri }}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>
          <View style={{ flex: 0.6 }}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
          <View style={{ flex: 0.3 }}>
            <Text style={changeStyle}>{actionText}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        bounces={false}
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 15 }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    );
  }
}

export default class Trends extends Component {
  static propTypes = {
    topAthletes: PropTypes.array.isRequired,
    topTeams: PropTypes.array.isRequired,
    topSports: PropTypes.array.isRequired,
    newListed: PropTypes.array
  };

  render() {
    const { topAthletes, topTeams, topSports } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Header light title="TOP 5 ATHLETES" />
            <TrendItem data={topAthletes} type="athletes" />
          </View>
          <View style={{ flex: 1, backgroundColor: "#E0E0E0" }}>
            <Header title="TOP 5 TEAMS" />
            <TrendItem data={topTeams} type="teams" />
          </View>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "#E0E0E0" }}>
            <Header title="TOP 5 SPORTS" />
            <TrendItem data={topSports} type="sports" />
          </View>
          <View style={{ flex: 1 }}>
            <Header light title="5 NEW LISTED" />
            <TrendItem data={newListed} type="newListed" />
          </View>
        </View>
      </View>
    );
  }
}
