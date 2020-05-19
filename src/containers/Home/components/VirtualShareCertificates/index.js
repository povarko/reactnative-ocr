import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, FlatList, Image } from "react-native";
import { Text, Amount } from "@AppComponents";
import { Colors } from "@AppTheme";
import { ATHLETES, TEAMS, SPORTS } from "./dummy";

import styles from "./styles";

const AthleteItem = ({ data, index, onPressItem }) => {
  // Placeholder data
  data.change = 4;
  data.tickerPrice = 200;
  data.total = 986;

  return (
    <TouchableOpacity onPress={onPressItem}>
      <View
        style={[
          styles.listItem,
          { backgroundColor: index % 2 == 0 ? "#FFF" : Colors.gallery }
        ]}
      >
        <Image
          style={styles.listItemImage}
          source={data.image}
          resizeMode={"cover"}
        />
        <View style={{ flex: 1, marginLeft: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: Colors.tundora,
                fontFamily: "Rajdhani-Bold",
                textTransform: "uppercase"
              }}
            >
              {data.name}
            </Text>
            <Text style={{ fontSize: 18, color: Colors.tundora }}>
              {data.sport}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 18,
                color: Colors.forestGreen,
                fontFamily: "Rajdhani-Bold"
              }}
            >
              ${data.price}
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 8,
                color:
                  data.change < 0 ? Colors.alizarinCrimson : Colors.forestGreen
              }}
            >
              ({data.change > 0 && "+"}
              {data.change}%)
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: Colors.doveGray }}>{data.symbol}: </Text>
              <Amount
                unit={""}
                value={data.tickerPrice}
                style={{ color: Colors.doveGray, fontSize: 14 }}
                wholeStyle={{ color: Colors.doveGray }}
                decimalStyle={{ color: Colors.doveGray }}
                dotStyle={{ color: Colors.doveGray }}
              />
            </View>
            <Amount
              value={data.total}
              unit={"$"}
              style={{ color: Colors.forestGreen, fontSize: 18 }}
              wholeStyle={{ color: Colors.forestGreen }}
              decimalStyle={{ color: Colors.forestGreen, fontWeight: "normal" }}
              dotStyle={{ color: Colors.forestGreen }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TeamItem = ({ data, index }) => {
  return (
    <View
      style={[
        styles.listItem,
        { backgroundColor: index % 2 == 0 ? "#FFF" : Colors.gallery }
      ]}
    >
      <View style={styles.avatarContainer}>
        <Image style={styles.image} source={data.image} resizeMode="contain" />
      </View>
      <View style={{ flex: 1, marginLeft: 16 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: Colors.tundora,
              fontFamily: "Rajdhani-Bold",
              textTransform: "uppercase"
            }}
          >
            {data.name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.forestGreen,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            ${data.price}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginLeft: 8,
              color:
                data.change < 0 ? Colors.alizarinCrimson : Colors.forestGreen
            }}
          >
            ({data.change > 0 && "+"}
            {data.change}%)
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: Colors.doveGray }}>
              {data.tickerSymbol}:{" "}
            </Text>
            <Amount
              unit={""}
              value={data.tickerPrice}
              style={{ color: Colors.doveGray, fontSize: 14 }}
              wholeStyle={{ color: Colors.doveGray }}
              decimalStyle={{ color: Colors.doveGray }}
              dotStyle={{ color: Colors.doveGray }}
            />
          </View>
          <Amount
            value={data.total}
            style={{ color: Colors.doveGray }}
            unit={"$"}
            style={{ color: Colors.forestGreen, fontSize: 18 }}
            wholeStyle={{ color: Colors.forestGreen }}
            decimalStyle={{ color: Colors.forestGreen, fontWeight: "normal" }}
            dotStyle={{ color: Colors.forestGreen }}
          />
        </View>
      </View>
    </View>
  );
};

const SportItem = ({ data, index }) => {
  return (
    <View
      style={[
        styles.listItem,
        { backgroundColor: index % 2 == 0 ? "#FFF" : Colors.gallery }
      ]}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          borderWidth: 2,
          borderColor: Colors.forestGreen,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.dustyGray
        }}
        resizeMode={"contain"}
      >
        <Image source={data.image} resizeMode={"contain"} />
      </View>
      <View style={{ flex: 1, marginLeft: 16 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: Colors.tundora,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            {data.name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.forestGreen,
              fontFamily: "Rajdhani-Bold"
            }}
          >
            ${data.price}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginLeft: 8,
              color:
                data.change < 0 ? Colors.alizarinCrimson : Colors.forestGreen
            }}
          >
            ({data.change > 0 && "+"}
            {data.change}%)
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: Colors.doveGray,
                fontFamily: "Rajdhani-Semibold"
              }}
            >
              {data.tickerSymbol}{" "}
            </Text>
            <Amount
              unit={""}
              value={data.tickerPrice}
              style={{ color: Colors.doveGray, fontSize: 14 }}
              wholeStyle={{ color: Colors.doveGray }}
              decimalStyle={{ color: Colors.doveGray }}
              dotStyle={{ color: Colors.doveGray }}
            />
          </View>
          <Amount
            value={data.total}
            unit={"$"}
            style={{ color: Colors.forestGreen, fontSize: 18 }}
            wholeStyle={{ color: Colors.forestGreen }}
            decimalStyle={{ color: Colors.forestGreen, fontWeight: "normal" }}
            dotStyle={{ color: Colors.forestGreen }}
          />
        </View>
      </View>
    </View>
  );
};

class VirtualShareCertificates extends Component {
  render() {
    const { onChangeTab, onPressItem, activeTabIndex } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[
              styles.tab,
              { backgroundColor: activeTabIndex == 0 ? "#FFF" : "#000" }
            ]}
            onPress={() => onChangeTab(0)}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color: activeTabIndex == 0 ? Colors.tundora : Colors.malachite
                }
              ]}
            >
              ATHLETES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              { backgroundColor: activeTabIndex == 1 ? "#FFF" : "#000" }
            ]}
            onPress={() => onChangeTab(1)}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color: activeTabIndex == 1 ? Colors.tundora : Colors.malachite
                }
              ]}
            >
              TEAMS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              { backgroundColor: activeTabIndex == 2 ? "#FFF" : "#000" }
            ]}
            onPress={() => onChangeTab(2)}
          >
            <Text
              style={[
                styles.tabText,
                {
                  color: activeTabIndex == 2 ? Colors.tundora : Colors.malachite
                }
              ]}
            >
              SPORTS
            </Text>
          </TouchableOpacity>
        </View>
        {activeTabIndex == 0 && (
          <FlatList
            data={ATHLETES}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item, index }) => (
              <AthleteItem
                data={item}
                index={index}
                onPressItem={() => onPressItem(item)}
              />
            )}
            onPressItem={() => {}}
            style={{ backgroundColor: "#FFF" }}
          />
        )}
        {activeTabIndex == 1 && (
          <FlatList
            data={TEAMS}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item, index }) => (
              <TeamItem data={item} index={index} />
            )}
            onPressItem={() => {}}
            style={{ backgroundColor: "#FFF" }}
          />
        )}
        {activeTabIndex == 2 && (
          <FlatList
            data={SPORTS}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item, index }) => (
              <SportItem data={item} index={index} />
            )}
            onPressItem={() => {}}
            style={{ backgroundColor: "#FFF" }}
          />
        )}
      </View>
    );
  }
}

VirtualShareCertificates.propTypes = {
  activeTabIndex: PropTypes.number.isRequired,
  onChangeTab: PropTypes.func.isRequired,
  onPressItem: PropTypes.func.isRequired
};

export default VirtualShareCertificates;
