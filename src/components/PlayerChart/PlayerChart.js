import React, { Component } from "react";
import { View, Image, TouchableOpacity, processColor } from "react-native";
import { Text, Amount } from "@AppComponents";
import { LineChart } from "react-native-charts-wrapper";
import { Colors, Icons } from "@AppTheme";
import styles from "./styles";

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

const TickerItem = ({ data }) => {
  return (
    <View style={styles.tickerItem}>
      <Image style={styles.tickerImage} source={data.image} />
      <Text style={styles.tickerName}>{data.name}</Text>
      <Text style={styles.tickerChange}>{data.change}</Text>
    </View>
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
    //const { athlete } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.date}>07/06 - 07/08</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>+27.35%</Text>
          </View>
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
            enabled: false,
            granularity: 1,
            drawLabels: true,
            position: "BOTTOM",
            drawAxisLine: true,
            drawGridLines: true,
            fontFamily: "HelveticaNeue-Medium",
            fontWeight: "bold",
            textSize: 12,
            textColor: processColor("gray")
            //valueFormatter: ["M", "T", "W", "T", "F", "S"]
          }}
          yAxis={{
            left: {
              enabled: true,
              granularity: 1,
              drawLabels: true,
              drawAxisLine: true,
              drawGridLines: true,
              fontFamily: "HelveticaNeue-Medium",
              fontWeight: "bold",
              textSize: 12,
              textColor: processColor(Colors.forestGreen)
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
        <Text style={styles.footerText}>
          Index Value Daily Average Trading Price
        </Text>
      </View>
    );
  }
}

export default PerformanceView;

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";

const GRAPH_DATA = {
  dataSets: [
    {
      values: [
        {
          y: 65,
          x: 0,
          marker: "65"
        },
        {
          y: 77,
          x: 1,
          marker: "77"
        },
        {
          y: 76,
          x: 2,
          marker: "76"
        },
        {
          y: 78,
          x: 3,
          marker: "78"
        },
        {
          y: 80,
          x: 4,
          marker: "80"
        },
        {
          y: 88,
          x: 5,
          marker: "Today: 88"
        }
      ],
      label: "ATHELETE",
      config: {
        mode: "CUBIC_BEZIER",
        drawValues: true,
        lineWidth: 1.5,
        drawCircles: false,
        circleColor: processColor(petrel),
        drawCircleHole: false,
        circleRadius: 5,
        highlightColor: processColor("transparent"),
        color: processColor("#FFF"),
        drawFilled: false,
        fillGradient: {
          colors: [processColor(petrel), processColor(greenBlue)],
          positions: [0, 0.5],
          angle: 90,
          orientation: "TOP_BOTTOM"
        },
        fillAlpha: 1000,
        valueTextSize: 15
      }
    }
  ]
};
