import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "@AppComponents";
import { Colors, Icons } from "@AppTheme";
import { withNavigation } from "react-navigation";
import styles from "./styles";

class PortfolioView extends Component {
  render() {
    const { onPressItem, navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => onPressItem(0)}>
          <View style={styles.listItem}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image source={Icons.athlete} />
              <Text style={styles.subtile}>ATHLETES</Text>
            </View>
            <View style={styles.content} />
            <View style={{ flex: 1 }}>
              <View style={styles.row}>
                <Text style={styles.title}>Athletes</Text>
                <Text style={styles.rate}>73</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.token}>Tokens</Text>
                <Text style={styles.price}>10,098</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.valueTitle}>Value</Text>
                <Text style={styles.value}>$108,491</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressItem(1)}>
          <View style={styles.listItem}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image source={Icons.team} />
              <Text style={styles.subtile}>TEAMS</Text>
            </View>
            <View style={styles.content} />
            <View style={{ flex: 1 }}>
              <View style={styles.row}>
                <Text style={[styles.title, { color: Colors.goldTips }]}>
                  Teams
                </Text>
                <Text style={styles.rate}>23</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.token}>Tokens</Text>
                <Text style={styles.price}>7,195</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.valueTitle}>Value</Text>
                <Text style={styles.value}>$38,311</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressItem(2)}>
          <View style={styles.listItem}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image source={Icons.sport} />
              <Text style={styles.subtile}>SPORTS</Text>
            </View>
            <View style={styles.content} />
            <View style={{ flex: 1 }}>
              <View style={styles.row}>
                <Text style={[styles.title, { color: Colors.royalBlue }]}>
                  Sports
                </Text>
                <Text style={styles.rate}>9</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.token}>Tokens</Text>
                <Text style={styles.price}>1,548</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.valueTitle}>Value</Text>
                <Text style={styles.value}>$14,491</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Transact")}>
          <View style={styles.listItem}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image source={Icons.cash} />
              <Text style={styles.subtile}>CASH</Text>
            </View>
            <View style={styles.content} />
            <View style={{ flex: 1 }}>
              <View style={styles.row}>
                <Text style={[styles.title, { color: Colors.cyan }]}>
                  DriveCoins
                </Text>
                <Text style={styles.rate}>49,410</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.token}>Conversion</Text>
                <Text style={styles.price}>$1.00=DX1.00</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.valueTitle}>Value</Text>
                <Text style={styles.value}>$49,410</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

PortfolioView.propTypes = {
  onPressItem: PropTypes.func.isRequired
};

export default withNavigation(PortfolioView);
