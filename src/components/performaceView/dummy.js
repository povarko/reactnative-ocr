import { processColor } from "react-native";
import { Images, Colors, Icons } from "@AppTheme";

import lionelMessi from "@Assets/athletes/Lionel_Messi";
import tomBrady from "@Assets/athletes/Tom_Brady";
import sofiaBooth from "@Assets/athletes/Sofia_Booth";
import lebronJames from "@Assets/athletes/Lebron_James";
import conorMcgregor from "@Assets/athletes/Conor_Mcgregor";

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";

export const GRAPH_DATA = {
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
          y: 74,
          x: 3,
          marker: "74"
        },
        {
          y: 76,
          x: 4,
          marker: "76"
        },
        {
          y: 65,
          x: 5,
          marker: "Today: 65"
        }
      ],
      label: "ATHELETES",
      config: {
        mode: "CUBIC_BEZIER",
        drawValues: false,
        lineWidth: 2,
        drawCircles: false,
        circleColor: processColor(petrel),
        drawCircleHole: false,
        circleRadius: 5,
        highlightColor: processColor("transparent"),
        color: processColor(Colors.malachite),
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
    },

    {
      values: [
        {
          y: 10,
          x: 0,
          marker: "10"
        },
        {
          y: 18,
          x: 1,
          marker: "18"
        },
        {
          y: 23,
          x: 2,
          marker: "23"
        },
        {
          y: 24,
          x: 3,
          marker: "24"
        },
        {
          y: 29,
          x: 4,
          marker: "29"
        },
        {
          y: 40,
          x: 5,
          marker: "Today: 40"
        }
      ],
      label: "TEAMS",
      config: {
        mode: "CUBIC_BEZIER",
        drawValues: false,
        lineWidth: 2,
        drawCircles: false,
        circleColor: processColor(petrel),
        drawCircleHole: false,
        circleRadius: 5,
        highlightColor: processColor("transparent"),
        color: processColor(Colors.goldTips),
        drawFilled: false,
        fillGradient: {
          colors: [processColor("red"), processColor("yellow")],
          positions: [0, 0.5],
          angle: 90,
          orientation: "TOP_BOTTOM"
        },
        fillAlpha: 1000,
        valueTextSize: 15
      }
    },

    {
      values: [
        {
          y: 35,
          x: 0,
          marker: "35"
        },
        {
          y: 47,
          x: 1,
          marker: "47"
        },
        {
          y: 46,
          x: 2,
          marker: "46"
        },
        {
          y: 44,
          x: 3,
          marker: "44"
        },
        {
          y: 46,
          x: 4,
          marker: "46"
        },
        {
          y: 48,
          x: 5,
          marker: "Today: 48"
        }
      ],
      label: "SPORTS",
      config: {
        mode: "CUBIC_BEZIER",
        drawValues: false,
        lineWidth: 2,
        drawCircles: false,
        circleColor: processColor(petrel),
        drawCircleHole: false,
        circleRadius: 5,
        highlightColor: processColor("transparent"),
        color: processColor("#0D47A1"),
        drawFilled: false,
        fillGradient: {
          colors: [processColor("red"), processColor("blue")],
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

export const BAR_CHART_DATA = [
  {
    name: "ATHLETES",
    count: 73,
    color: Colors.malachite,
    percentage: 70,
    change: 4.75
  },
  {
    name: "TEAMS",
    count: 12,
    color: Colors.goldTips,
    percentage: 25,
    change: 0.75
  },
  {
    name: "SPORTS",
    count: 9,
    color: Colors.royalBlue,
    percentage: 55,
    change: 1.75
  }
];

export const TICKER_DATA = [
  {
    ...lionelMessi,
    image: require("@Assets/images/lionel-messi.png"),
    poster: require("@Assets/images/lionel-messi-poster.png"),
    change: 9.05,
    usdValue: 683.65,
    id: "0"
  },
  {
    ...tomBrady,
    image: require("@Assets/images/tom-brady.png"),
    poster: require("@Assets/images/tom-brady-poster.png"),
    change: 8.75,
    usdValue: 345.78,
    id: "1"
  },
  {
    ...sofiaBooth,
    image: require("@Assets/images/Maria-Sharapova7.png"),
    poster: require("@Assets/images/sofia-booth-poster.png"),
    change: 6.34,
    usdValue: 457.66,
    id: "2"
  },
  {
    ...lebronJames,
    image: require("@Assets/images/lebron-james.png"),
    poster: require("@Assets/images/lebron-james-poster.png"),
    change: 3.45,
    usdValue: 23456.65,
    id: "3"
  },
  {
    ...conorMcgregor,
    image: require("@Assets/images/Conor-McGregor.png"),
    poster: require("@Assets/images/conor-mcgregor-poster.png"),
    change: 4.33,
    usdValue: 345.65,
    id: "4"
  }
];

/*export const TICKER_DATA = [
  {
    name: "MALMAR-DX",
    change: 9.05,
    image: Images.dummyAthlete1,
    id: "0"
  },
  {
    name: "SAMWHL-DX",
    change: 8.75,
    image: Images.dummyAthlete2,
    id: "1"
  },
  {
    name: "MESOZL-DX",
    change: -5.45,
    image: Images.dummyAthlete3,
    id: "2"
  },
  {
    name: "MALMAR-DX",
    change: 9.05,
    image: Images.dummyAthlete1,
    id: "3"
  },
  {
    name: "SAMWHL-DX",
    change: 8.75,
    image: Images.dummyAthlete2,
    id: "4"
  },
  {
    name: "MESOZL-DX",
    change: -5.45,
    image: Images.dummyAthlete3,
    id: "5"
  }
];*/
