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
import { Colors, Icons } from "@AppTheme";
import PosterBottomBar from "./PosterBottomBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFF"
  },
  item: {
    flex: 1,
    height: 165,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  itemTitle: {
    color: Colors.textBlackColor,
    fontSize: 18,
    fontFamily: "Rajdhani-Bold"
  },
  itemdetails: {
    color: Colors.textBlackColor,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium",
    height: 100
  },
  changeValue: {
    color: Colors.malachite,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "Rajdhani-SemiBold"
  },
  changeIcon: {
    fontSize: 24
  },
  item: {
    flex: 1,
    height: 140,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  itemTitle: {
    color: Colors.textBlackColor,
    fontSize: 18,
    fontFamily: "Rajdhani-SemiBold"
    // height: 48
  },
  itemCost: {
    color: Colors.malachite,
    fontSize: 24,
    fontFamily: "Rajdhani-Bold",
    height: 26
  },
  photo: {
    height: 115
  },
  buttonBuy: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    width: 100,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.malachite
  },
  buyText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "Rajdhani-Bold",
    textAlign: "center"
  },
  saleText: {
    color: Colors.tundora,
    fontSize: 16,
    fontFamily: "Rajdhani-Medium",
    textAlign: "center"
  }
});

class StoreExpandItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };
  }

  renderItems = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <View style={{ width: 115 }}>
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.photo}
            resizeMode={"cover"}
          />
        </View>
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={styles.itemTitle}>{item.category}</Text>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemCost}>{item.price}</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.buttonBuy}>
            <Text style={styles.buyText}>BUY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 45, marginBottom: 15 }}>
          <PosterBottomBar data={this.props.data} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.saleText}>Sale </Text>
          </TouchableOpacity>
          <Text style={styles.saleText}> | </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.saleText}> Fangear </Text>
          </TouchableOpacity>
          <Text style={styles.saleText}> | </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.saleText}> New Arrivals </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.props.data.store}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
          extraData={this.state}
        />
      </View>
    );
  }
}

StoreExpandItem.propTypes = {};
export default StoreExpandItem;
