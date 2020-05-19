import React from "react";
import { processColor } from "react-native";
import { LineChart } from "react-native-charts-wrapper";
import { Colors } from "@AppTheme";

class BasicLineChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, gradientColor, graphData } = this.props;

    return (
      <LineChart
        style={style}
        data={graphData}
        // data={{
        //   dataSets: [
        //     {
        //       values: graphData,
        //       label: "",
        //       config: {
        //         mode: "LINEAR",
        //         drawValues: false,
        //         lineWidth: 2,
        //         drawCircles: false,
        //         drawCircleHole: false,
        //         circleRadius: 5,
        //         color: processColor(gradientColor),
        //         circleColor: processColor(Colors.malachite),
        //         fillAlpha: 80
        //       }
        //     }
        //   ]
        // }}
        textColor={"#FFF"}
        chartDescription={{ text: "" }}
        legend={{
          enabled: false
        }}
        marker={{
          enabled: false,
          markerColor: processColor("#FFF"),
          textColor: processColor("#FFF")
        }}
        xAxis={{
          enabled: true,
          granularity: 1,
          drawLabels: true,
          position: "BOTTOM",
          drawAxisLine: true,
          axisLineColor: processColor("#333"),
          axisLineWidth: 1,
          drawGridLines: true,
          gridColor: processColor("#333"),
          gridLineWidth: 1,
          gridDashedLine: {
            lineLength: 18,
            spaceLength: 0,
            phase: 10
          }
        }}
        yAxis={{
          left: {
            enabled: true,
            granularity: 1,
            drawLabels: true,
            drawAxisLine: true,
            axisLineColor: processColor("#FFF"),
            axisLineWidth: 0,
            drawGridLines: true
          },
          right: {
            enabled: false
          }
        }}
        autoScaleMinMaxEnabled={true}
        drawGridBackground={false}
        drawBorders={false}
        touchEnabled={true}
        dragEnabled={true}
        scaleEnabled={false}
        scaleXEnabled={true}
        scaleYEnabled={true}
        pinchZoom={false}
        doubleTapToZoomEnabled={true}
        dragDecelerationEnabled={true}
        dragDecelerationFrictionCoef={0.99}
        keepPositionOnRotation={false}
        highlightPerDragEnabled={true}
        onSelect={this._handleSelect}
        onChange={event => console.log(event.nativeEvent)}
      />
    );
  }
}
export default BasicLineChart;
