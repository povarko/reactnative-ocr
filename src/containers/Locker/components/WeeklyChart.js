import React from "react";
import { processColor } from "react-native";
import { LineChart } from "react-native-charts-wrapper";
import { Colors } from "@AppTheme";

export default (WeeklyChart = props => {
  return (
    <LineChart
      style={props.style}
      data={{
        dataSets: [
          {
            values: [0, 7, 1, 4, 5, 2, 3, 0],
            label: "",
            config: {
              mode: "LINEAR",
              drawValues: false,
              lineWidth: 1,
              drawCircles: true,
              drawCircleHole: false,
              circleRadius: 3,
              color: processColor(Colors.malachite),
              circleColor: processColor(Colors.malachite)
            }
          }
        ]
      }}
      textColor={"#FFF"}
      chartDescription={{ text: "" }}
      legend={{
        enabled: false
      }}
      xAxis={{
        enabled: true,
        granularity: 1,
        drawLabels: false,
        position: "BOTTOM",
        drawAxisLine: true,
        axisLineColor: processColor("#FFF"),
        axisLineWidth: 1,
        drawGridLines: false,
        gridColor: processColor(Colors.malachite),
        gridLineWidth: 2,
        gridDashedLine: {
          lineLength: 8,
          spaceLength: 4,
          phase: 10
        }
      }}
      yAxis={{
        left: {
          enabled: true,
          granularity: 1,
          drawLabels: false,
          drawAxisLine: true,
          axisLineColor: processColor("#FFF"),
          axisLineWidth: 1,
          drawGridLines: false
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
  );
});
