import React from "react";
import { View, processColor } from "react-native";
import _ from "lodash";

import { CandleStickChart } from "react-native-charts-wrapper";

export default (CandleChart = props => {
  return (
    <View style={{ flex: 1, backgroundColor: "#101321" }}>
      <CandleStickChart
        style={{ flex: 1 }}
        data={props.data}
        marker={props.marker}
        chartDescription={{ text: "DASH/BTC VOL(20)" }}
        legend={props.legend}
        xAxis={{
          $set: {
            drawLabels: false,
            drawGridLines: false,
            position: "BOTTOM",
            yOffset: 5,
            axisLineColor: processColor("#FFF"),
            textColor: processColor("#FFF"),

            limitLines: _.times(props.data.dataSets[0].values.length / 5, i => {
              return {
                limit: 5 * (i + 1) + 0.5,
                lineColor: processColor("#FFF"),
                lineWidth: 1,
                label: (i + 1).toString()
              };
            })
          }
        }}
        yAxis={{
          $set: {
            drawLabels: false,
            drawGridLines: false,
            left: {
              valueFormatter: "$ #",
              limitLines: [
                {
                  limit: 112.4,
                  lineColor: processColor("red"),
                  lineDashPhase: 2,
                  lineDashLengths: [10, 20]
                },
                {
                  limit: 89.47,
                  lineColor: processColor("red"),
                  lineDashPhase: 2,
                  lineDashLengths: [10, 20]
                }
              ]
            },
            right: {
              enabled: false
            }
          }
        }}
        maxVisibleValueCount={16}
        autoScaleMinMaxEnabled={true}
        // zoom={{scaleX: 2, scaleY: 1, xValue:  400000, yValue: 1}}
        zoom={{
          scaleX: 1.5,
          scaleY: 1,
          xValue: 0,
          yValue: 916,
          axisDependency: "LEFT"
        }}
        // onSelect={this.handleSelect.bind(this)}
        // ref="chart"
      />
    </View>
  );
});
