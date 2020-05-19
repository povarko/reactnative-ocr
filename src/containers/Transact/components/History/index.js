import React, { Component } from "react";
import { View, Image, ScrollView } from "react-native";
import { Text } from "@AppComponents";
import styles from "./styles";

export default class AddUsd extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>TRANSACTION </Text>
          <Text style={[styles.heading, { fontFamily: "Rajdhani-Semibold" }]}>
            HISTORY
          </Text>
        </View>
        <View style={{ marginTop: 12 }}>
          {data.map((item, i) => (
            <View key={i} style={styles.body}>
              <View style={styles.avatarContainer}>
                <Image
                  source={{
                    uri:
                      "https://img.icons8.com/material-rounded/24/000000/user.png"
                  }}
                  style={{ tintColor: "#2ECC71", width: 20, height: 20 }}
                />
              </View>
              <View style={styles.details}>
                <View>
                  <Text style={styles.date}>{item.date}</Text>
                  <Text style={styles.address}>{item.addr}</Text>
                </View>
                <View>
                  <Text style={[styles.date, { fontWeight: "normal" }]}>
                    SportXchange.io
                  </Text>
                  <Text style={styles.detail}>Details</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const data = [
  { date: "04, June 2017", addr: "7d68373929220" },
  { date: "07, June 2017", addr: "Sd68373929220" },
  { date: "10, June 2017", addr: "pd68373929220" },
  { date: "14, June 2017", addr: "Rd68373929220" }
];
