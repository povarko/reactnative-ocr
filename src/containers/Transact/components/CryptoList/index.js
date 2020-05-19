import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  ScrollView
} from "react-native";
import { Text } from "@AppComponents";
import { Icons, Colors } from "@AppTheme";
import styles from "./styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class CryptoList extends Component {
  state = { activeIndex: 1 };

  _handleSelect = (item, index) => {
    this.setState({ activeIndex: index });
    this.props.getSelected(item.name);
  };

  renderItem = ({ item, index }) => {
    const { activeIndex } = this.state;
    const style = {
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 10,
      paddingVertical: 3,
      backgroundColor: index == activeIndex ? "#ccc" : "#FFF"
    };
    const textStyle = index == activeIndex ? styles.activeTitle : styles.title;

    return (
      <TouchableOpacity onPress={() => this._handleSelect(item, index)}>
        <View style={style}>
          <View style={styles.imageContainer}>
            <Image
              source={item.image}
              style={styles.listImage}
              resizeMode="contain"
            />
          </View>
          <Text style={textStyle}>{item.name.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderAccounts = () => (
    <View style={styles.accounts}>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.account}>BANK ACCOUNT</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={[styles.account, { marginVertical: 16 }]}>
          CREDIT CARD
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.account}>PAYPAL</Text>
      </TouchableOpacity>
    </View>
  );

  renderFooter = () => (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ width: 15, height: 15, tintColor: Colors.forestGreen }}
        source={Icons.chevronDown}
      />
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInputWithIcon
          placeholder="CRYPTO"
          source={{ uri: "https://img.icons8.com/ios/24/000000/search.png" }}
        />
        <View>
          <FlatList
            data={data}
            style={{ height: "20%", marginTop: 4 }}
            renderItem={this.renderItem}
            keyExtractor={item => item.name}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: 2 }} />
            )}
          />
          {this.renderFooter()}
        </View>
        <ScrollView
          style={{ height: "80%", backgroundColor: "#F5F5F5" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: hp("35%") }}
        >
          {this.renderAccounts()}
        </ScrollView>
      </View>
    );
  }
}

const TextInputWithIcon = props => (
  <View style={styles.searchContainer}>
    <Image
      style={{ width: 14, height: 14, marginRight: 3 }}
      source={props.source}
    />
    <TextInput
      underlineColorAndroid="transparent"
      style={styles.search}
      {...props}
    />
  </View>
);

const data = [
  {
    name: "drivecoin",
    image: Icons.turncoin
  },
  {
    name: "bitcoin",
    image: Icons.bitcoin
  },
  {
    name: "ethereum",
    image: Icons.ethereum
  },
  {
    name: "litecoin",
    image: Icons.litecoin
  }
];
