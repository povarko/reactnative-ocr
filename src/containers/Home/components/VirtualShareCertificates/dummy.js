import lionelMessi from "@Assets/athletes/Lionel_Messi";
import tomBrady from "@Assets/athletes/Tom_Brady";
import sofiaBooth from "@Assets/athletes/Sofia_Booth";
import lebronJames from "@Assets/athletes/Lebron_James";
import conorMcgregor from "@Assets/athletes/Conor_Mcgregor";

const ATHLETES = [
  {
    ...lionelMessi,
    image: require("@Assets/images/lionel-messi.png"),
    poster: require("@Assets/images/lionel-messi-poster.png")
  },
  {
    ...tomBrady,
    image: require("@Assets/images/tom-brady.png"),
    poster: require("@Assets/images/tom-brady-poster.png")
  },
  {
    ...sofiaBooth,
    image: require("@Assets/images/Maria-Sharapova7.png"),
    poster: require("@Assets/images/sofia-booth-poster.png")
  },
  {
    ...lebronJames,
    image: require("@Assets/images/lebron-james.png"),
    poster: require("@Assets/images/lebron-james-poster.png")
  },
  {
    ...conorMcgregor,
    image: require("@Assets/images/Conor-McGregor.png"),
    poster: require("@Assets/images/conor-mcgregor-poster.png")
  }
];

const TEAMS = [
  {
    name: "BARCELONA FC",
    image: require("@Assets/images/team_0.png"),
    price: 79.15,
    change: +43.75,
    tickerSymbol: "BARCFC-DX",
    tickerPrice: 507.1845,
    total: 40129.05
  },
  {
    name: "SARACENS RFC",
    image: require("@Assets/images/team_1.png"),
    price: 79.15,
    change: -4.75,
    tickerSymbol: "SARRFC-DX",
    tickerPrice: 44.1848,
    total: 60145.03
  },
  {
    name: "LIVERPOOL FC",
    image: require("@Assets/images/team_2.png"),
    price: 49.15,
    change: +9.75,
    tickerSymbol: "LIVPFC-DX",
    tickerPrice: 204.189,
    total: 19165.73
  },
  {
    name: "CRUSADERS RFC",
    image: require("@Assets/images/team_3.png"),
    price: 99.15,
    change: +3.75,
    tickerSymbol: "CRURFC-DX",
    tickerPrice: 704.1848,
    total: 80445.06
  }
];

const SPORTS = [
  {
    name: "FOOTBALL",
    image: require("@Assets/images/football.png"),
    price: 179.15,
    change: +2.75,
    tickerSymbol: "FOOTBALL-DX",
    tickerPrice: 507.1845,
    total: 40129.05
  },
  {
    name: "SURFING",
    image: require("@Assets/images/surfing.png"),
    price: 179.15,
    change: +2.75,
    tickerSymbol: "SURFING-DX",
    tickerPrice: 507.1845,
    total: 40129.05
  },
  {
    name: "RUGBY",
    image: require("@Assets/images/Rugby.png"),
    price: 289.15,
    change: +6.75,
    tickerSymbol: "RUGBY-DX",
    tickerPrice: 404.1845,
    total: 60145.05
  },
  {
    name: "MMA",
    image: require("@Assets/images/mma.png"),
    price: 49.15,
    change: +4.75,
    tickerSymbol: "MMA-DX",
    tickerPrice: 204.189,
    total: 19165.73
  },
  {
    name: "SEVENS",
    image: require("@Assets/images/sevens.png"),
    price: 49.15,
    change: +4.75,
    tickerSymbol: "SEVENS-DX",
    tickerPrice: 204.189,
    total: 19165.73
  },
  {
    name: "SOCCER",
    image: require("@Assets/images/soccer.png"),
    price: 99.15,
    change: -3.75,
    tickerSymbol: "SOCCER-DX",
    tickerPrice: 704.1848,
    total: 80445.06
  }
];

export { ATHLETES, TEAMS, SPORTS };
