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

const StoreItem = ({ data, index }) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image
          source={{ uri: data.thumbnail }}
          style={styles.itemImage}
          resizeMode={"contain"}
        />
        <View style={styles.itemBody}>
          <Text style={styles.itemTitle}>{data.category}</Text>
          <Text style={styles.itemDescription}>{data.title}</Text>
          <Text style={styles.itemPrice}>{data.price}</Text>
          <TouchableOpacity style={styles.itemBuyButton}>
            <Text style={styles.itemBuyButtonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

class VirtualShareCertificateStore extends Component {
  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Sale | Fangear | New Arrivals</Text>
        </View>
        <FlatList
          data={data.store}
          contentContainerStyle={{ paddingBottom: 10 }}
          renderItem={({ item, index }) => (
            <StoreItem data={item} index={index} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

VirtualShareCertificateStore.propTypes = {
  data: PropTypes.object.isRequired
};

export default VirtualShareCertificateStore;
