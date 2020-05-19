import React from "react";
import { processColor } from "react-native";
import { LineChart } from "react-native-charts-wrapper";
import { Colors } from "@AppTheme";

class LineChartIssue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, gradientColor, graphData } = this.props;

    return (
      <LineChart
        style={style}
        data={{
          dataSets: [
            {
              values: graphData,
              label: "",
              config: {
                mode: "LINEAR",
                drawValues: false,
                lineWidth: 2,
                drawCircles: false,
                drawCircleHole: false,
                circleRadius: 5,
                color: processColor(gradientColor),
                circleColor: processColor(Colors.malachite),
                drawFilled: true,
                fillGradient: {
                  colors: [
                    processColor("#0D0D0D"),
                    processColor(gradientColor)
                  ],
                  positions: [0.2, 0.8],
                  angle: 90,
                  orientation: "TOP_BOTTOM"
                },
                fillAlpha: 80
              }
            }
          ]
        }}
        textColor={"#FFF"}
        chartDescription={{ text: "" }}
        legend={{
          enabled: false
        }}
        marker={{
          enabled: false,
          markerColor: processColor("white"),
          textColor: processColor("black")
        }}
        xAxis={{
          enabled: true,
          granularity: 1,
          drawLabels: false,
          position: "BOTTOM",
          drawAxisLine: false,
          axisLineColor: processColor("#FFF"),
          axisLineWidth: 2,
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
            drawAxisLine: false,
            axisLineColor: processColor("#FFF"),
            axisLineWidth: 0,
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
export default LineChartIssue;
