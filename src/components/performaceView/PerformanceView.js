import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  processColor
} from "react-native";
import { Text, Amount } from "@AppComponents";
import { LineChart } from "react-native-charts-wrapper";
import { Colors, Icons } from "@AppTheme";
import { withNavigation } from "react-navigation";
import styles from "./styles";
import { GRAPH_DATA, BAR_CHART_DATA, TICKER_DATA } from "./dummy";

const BarChartItem = ({ data }) => {
  return (
    <TouchableOpacity>
      <View style={styles.barChartItem}>
        <Text style={styles.barChartItemName}>
          {data.name} ({data.count})
        </Text>
        <View style={styles.barChartItemColor}>
          <View
            style={[
              styles.barChartItemColorInner,
              { backgroundColor: data.color, flex: data.percentage }
            ]}
          />
          <View style={{ flex: 100 - data.percentage }} />
        </View>
        <Text style={styles.barChartItemPercentage}>{data.percentage}%</Text>
        <Text style={styles.barChartItemChange}>{data.change}%</Text>
      </View>
    </TouchableOpacity>
  );
};

class PerformanceView extends Component {
  _handleSelect = event => {
    let entry = event.nativeEvent;
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null });
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) });
    }

    console.log(event.nativeEvent);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.barChart}>
            {BAR_CHART_DATA.map((data, index) => (
              <BarChartItem data={data} key={index} />
            ))}
          </View>
          <LineChart
            style={styles.graph}
            data={GRAPH_DATA}
            textColor={"#FFF"}
            chartDescription={{ text: "" }}
            legend={{
              enabled: false
            }}
            marker={{
              enabled: true,
              markerColor: processColor("white"),
              textColor: processColor("black")
            }}
            highlights={[
              {
                x: 0,
                y: 0
              },
              {
                x: 1,
                y: 1
              }
            ]}
            xAxis={{
              enabled: true,
              granularity: 1,
              drawLabels: true,
              position: "BOTTOM",
              drawAxisLine: true,
              drawGridLines: true,
              fontFamily: "HelveticaNeue-Medium",
              fontWeight: "bold",
              textSize: 12,
              textColor: processColor("gray"),
              valueFormatter: ["M", "T", "W", "T", "F", "S"]
            }}
            yAxis={{
              left: {
                enabled: false
              },
              right: {
                enabled: false
              }
            }}
            autoScaleMinMaxEnabled={true}
            animation={{
              durationX: 1000,
              durationY: 0,
              easingX: "EaseInOutQuart"
            }}
            drawGridBackground={false}
            drawBorders={true}
            touchEnabled={true}
            dragEnabled={true}
            scaleEnabled={false}
            scaleXEnabled={true}
            scaleYEnabled={false}
            pinchZoom={false}
            doubleTapToZoomEnabled={false}
            dragDecelerationEnabled={true}
            dragDecelerationFrictionCoef={0.99}
            keepPositionOnRotation={false}
            highlightPerDragEnabled={true}
            onSelect={this._handleSelect}
            onChange={event => console.log(event.nativeEvent)}
          />
          <View style={{ marginTop: 12 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: 12,
                borderBottomWidth: 1,
                borderColor: Colors.malachite
              }}
            >
              <Text style={{ fontSize: 11, flex: 1 }}>
                Index Value Daily Average Trading Price
              </Text>
              <Text style={{ fontSize: 11 }}>LAST 180 DAYS</Text>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: "Rajdhani-Bold",
                  marginLeft: 8,
                  color: Colors.malachite
                }}
              >
                +12.75%
              </Text>
            </View>
            <View
              style={{
                marginTop: 12,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: Colors.malachite
                }}
              />
              <Text
                style={{
                  marginLeft: 8,
                  marginRight: 2,
                  fontSize: 12,
                  fontFamily: "Rajdhani-Medium"
                }}
              >
                Portfolio Value:
              </Text>
              <Amount value={170802.75} unit={"$"} style={{ fontSize: 12 }} />
            </View>
            <View
              style={{
                flex: 1,
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flex: 0.6,
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: Colors.cyan
                  }}
                />
                <Text style={{ marginLeft: 8, marginRight: 3, fontSize: 12 }}>
                  DriveCoin Cash:
                </Text>
                <Amount value={49410.58} unit={"$"} style={{ fontSize: 12 }} />
              </View>

              <View
                style={{
                  flex: 0.4,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
              >
                <Text style={{ fontSize: 12, fontFamily: "Rajdhani-Medium" }}>
                  GAIN/LOSS:
                </Text>
                <Text
                  style={{
                    marginLeft: 4,
                    fontSize: 12,
                    fontFamily: "Rajdhani-Bold",
                    color: Colors.malachite
                  }}
                >
                  +64.15%
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TickerScroll navigation={this.props.navigation} />
      </View>
    );
  }
}

export default withNavigation(PerformanceView);

class TickerScroll extends Component {
  state = {
    animatedValue: new Animated.Value(0),
    currentIndex: 0
  };

  renderItem = ({ item, index }) => {
    const { navigation } = this.props;
    const openProfile = () => {
      item.change = 4;
      item.tickerPrice = 200;
      item.total = 986;
      navigation.navigate("VirtualShareCertificate", { data: item });
    };

    return (
      <TouchableOpacity onPress={openProfile} activeOpacity={0.9}>
        <View style={styles.tickerItem}>
          <Image style={styles.tickerImage} source={item.image} />
          <Text style={styles.tickerName}>{item.name}</Text>
          <Text style={styles.tickerChange}>{item.change}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  _next = () => {
    if (!this.flatListRef) return;
    const { currentIndex } = this.state;
    const scrollIndex = currentIndex + 3;
    if (scrollIndex >= TICKER_DATA.length) {
      this.flatListRef.getNode().scrollToIndex({ index: 0, animated: true });
    } else {
      this.flatListRef.getNode().scrollToIndex({ index: scrollIndex });
    }
  };

  _previous = () => {
    if (!this.flatListRef) return;
    const { currentIndex } = this.state;
    const scrollIndex = currentIndex - 1;
    if (scrollIndex < 0) return;
    this.flatListRef.getNode().scrollToIndex({ index: scrollIndex });
  };

  _handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: this.state.animatedValue } } }],
    { useNativeDriver: true }
  );

  _handleViewableItemsChanged = ({ viewableItems, changed, ...rest }) => {
    this.setState({ currentIndex: viewableItems[0].index });
  };

  render() {
    return (
      <View style={styles.pricesFooter}>
        <TouchableOpacity onPress={this._previous} style={styles.tickerArrow}>
          <Image source={Icons.tickerArrowLeft} />
        </TouchableOpacity>
        <Animated.FlatList
          horizontal
          //pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 }}
          data={TICKER_DATA}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          //snapToAlignment="start"
          onScroll={this._handleScroll}
          onViewableItemsChanged={this._handleViewableItemsChanged}
          ref={ref => (this.flatListRef = ref)}
        />
        <TouchableOpacity onPress={this._next} style={styles.tickerArrow}>
          <Image source={Icons.tickerArrowRight} />
        </TouchableOpacity>
      </View>
    );
  }
}
