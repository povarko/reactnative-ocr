import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { Colors, Icons } from "@AppTheme";
import { Image } from "react-native";
import { Text } from "@AppComponents";

const styles = StyleSheet.create({
  tabIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    borderWidth: 1
    // marginTop: -10
  },
  tabLabel: {
    fontSize: 14,
    height: 24
  }
});

import {
  BuySellScreen,
  PaymentMethodScreen,
  ExchangeBasicScreen,
  ExchangeAdvancedScreen,
  LimitOrderTutorialScreen,
  ISONotLiveScreen,
  ISOAuctionScreen,
  ISOPlaceBidScreen,
  ISOUpdateBidScreen,
  HomeScreen,
  LockerHomeScreen,
  MyTeamsScreen,
  MyAthletesScreen,
  LockerDetailsScreen,
  VirtualStackCardScreen,
  ChooseSportsScreen,
  ChooseTeamScreen,
  ChooseAthletesScreen,
  BuildingFeedScreen,
  SendReceiveScreen,
  TradeScreen,
  TrackedTeamsScreen,
  TrackedAthletesScreen,
  TransactScreen,
  ProfileScreen,
  VerificationScreen,
  VerificationSelfieScreen,
  SecurityHomeScreen,
  TwoFASetPhoneScreen,
  TwoFAEnterCodeScreen,
  ManageDevicesScreen,
  SetLoginScreen,
  PinSetupScreen,
  TouchIdSetupScreen,
  ExpandedAboutScreen,
  ScoutTrackAthletesScreen,
  ProfileStatusScreen,
  SelectIssueTypeScreen,
  IssueHomeScreen,
  SportSelectIssueScreen,
  TeamSelectIssueScreen,
  IssueSetupScreen,
  IssueAddSearchScreen,
  IssueSetupTeamScreen,
  IssueSetupTeam1Screen,
  IssueSetupTeam2Screen,
  IssueSetupTeam3Screen,
  AddBioScreen,
  AddPlanScreen,
  AddNewsScreen,
  AddBlogScreen,
  AddSocialScreen,
  IssueSuccessScreen,
  MyStoreScreen,
  IssueManageScreen,
  AssetsOfferLaunchScreen,
  AssetsRemainingScreen,
  IssueAnalyticsScreen,
  IssueAssetsScreen,
  CreatePostScreen,
  CreatePostNewsScreen,
  CreatePostBlogScreen,
  CreatePostGameScreen,
  CreatePostSocialScreen,
  CreateSuccessScreen,
  ManageHomeScreen,
  NewsMainScreen,
  NewsMainExpandedScreen,
  BidSuccessScreen,
  BidFailureScreen
} from "@AppContainers";

const SecurityStackNavigator = createStackNavigator(
  {
    SecurityHome: SecurityHomeScreen,
    TwoFASetPhone: TwoFASetPhoneScreen,
    TwoFAEnterCode: TwoFAEnterCodeScreen,
    ManageDevices: ManageDevicesScreen,
    SetLogin: SetLoginScreen,
    PinSetup: PinSetupScreen,
    TouchIdSetup: TouchIdSetupScreen
  },
  {
    headerMode: "none",
    initialRouteName: "SecurityHome"
  }
);

const ProfileStackNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
    Verification: VerificationScreen,
    VerificationSelfie: VerificationSelfieScreen,
    ProfileStatus: ProfileStatusScreen
  },
  {
    headerMode: "none"
  }
);

const IssuerStackNavigator = createStackNavigator(
  {
    IssueManage: IssueManageScreen,
    IssueHome: IssueHomeScreen,
    SelectIssueType: SelectIssueTypeScreen,
    SportSelectIssue: SportSelectIssueScreen,
    TeamSelectIssue: TeamSelectIssueScreen,
    IssueSetup: IssueSetupScreen,
    IssueAddSearch: IssueAddSearchScreen,
    IssueSetupTeam: IssueSetupTeamScreen,
    IssueSetupTeam1: IssueSetupTeam1Screen,
    IssueSetupTeam2: IssueSetupTeam2Screen,
    IssueSetupTeam3: IssueSetupTeam3Screen,
    AddBio: AddBioScreen,
    AddPlan: AddPlanScreen,
    AddNews: AddNewsScreen,
    AddBlog: AddBlogScreen,
    AddSocial: AddSocialScreen,
    IssueSuccess: IssueSuccessScreen,
    MyStore: MyStoreScreen,
    CreatePost: CreatePostScreen,
    CreatePostNews: CreatePostNewsScreen,
    CreatePostBlog: CreatePostBlogScreen,
    CreatePostGame: CreatePostGameScreen,
    CreatePostSocial: CreatePostSocialScreen,
    CreateSuccess: CreateSuccessScreen,
    AssetsRemaining: AssetsRemainingScreen,
    AssetsOfferLaunch: AssetsOfferLaunchScreen,
    IssueAnalytics: IssueAnalyticsScreen,
    IssueAssets: IssueAssetsScreen
  },
  {
    headerMode: "none"
  }
);

const LockerStackNavigator = createStackNavigator(
  {
    LockerHome: LockerHomeScreen,
    Profile: ProfileStackNavigator,
    Issue: IssuerStackNavigator,
    Security: SecurityStackNavigator,
    MyTeams: MyTeamsScreen,
    MyAthletes: MyAthletesScreen,
    LockerDetails: LockerDetailsScreen,
    VirtualStackCard: VirtualStackCardScreen,
    ChooseSports: ChooseSportsScreen,
    ChooseTeam: ChooseTeamScreen,
    ChooseAthletes: ChooseAthletesScreen,
    BuildingFeed: BuildingFeedScreen,
    TrackedTeams: TrackedTeamsScreen,
    TrackedAthletes: TrackedAthletesScreen,
    ExpandedAbout: ExpandedAboutScreen,
    ScoutTrackAthletes: ScoutTrackAthletesScreen
  },
  {
    headerMode: "none",
    initialRouteName: "LockerHome"
  }
);

LockerStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let { routeName, routes } = navigation.state.routes[navigation.state.index];

  // extract route name for nested stacks
  routeName = routes ? routes[routes.length - 1].routeName : routeName;

  if (
    (routeName === "ChooseSports") |
    (routeName === "ChooseTeam") |
    (routeName === "ChooseAthletes") |
    (routeName === "BuildingFeed") |
    (routeName === "VirtualStackCard") |
    (routeName === "SelectIssueType") |
    (routeName === "IssueHome") |
    (routeName === "SportSelectIssue") |
    (routeName === "TeamSelectIssue") |
    (routeName === "IssueSetup") |
    (routeName === "AddBio") |
    (routeName === "AddPlan") |
    (routeName === "AddNews") |
    (routeName === "AddBlog") |
    (routeName === "AddSocial") |
    (routeName === "IssueSuccess") |
    (routeName === "IssueManage") |
    (routeName === "IssueSetupTeam") |
    (routeName === "IssueAddSearch") |
    (routeName === "IssueSetupTeam1") |
    (routeName === "IssueSetupTeam2") |
    (routeName === "IssueSetupTeam3") |
    (routeName === "CreateSuccess")
  ) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const BuySellStackNavigator = createStackNavigator(
  {
    BuySellMain: BuySellScreen,
    PaymentMethod: PaymentMethodScreen,
    ExchangeBasic: ExchangeBasicScreen,
    ExchangeAdvanced: ExchangeAdvancedScreen,
    LimitOrderTutorial: LimitOrderTutorialScreen,
    ISONotLive: ISONotLiveScreen,
    ISOAuction: ISOAuctionScreen,
    ISOPlaceBid: ISOPlaceBidScreen,
    ISOUpdateBid: ISOUpdateBidScreen,
    BidSuccess: { screen: BidSuccessScreen, path: "bidsuccess" },
    BidFailure: { screen: BidFailureScreen, path: "bidfail" }
  },
  {
    headerMode: "none",
    initialRouteName: "BuySellMain"
  }
);

BuySellStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let { routeName } = navigation.state.routes[navigation.state.index];
  return {
    tabBarVisible
  };
};

const NewsFeedStackNavigator = createStackNavigator(
  {
    NewsMain: {
      screen: NewsMainScreen
    },
    NewsMainExpanded: {
      screen: NewsMainExpandedScreen
    }
  },
  {
    headerMode: "none"
  }
);
NewsFeedStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let { routeName } = navigation.state.routes[navigation.state.index];
  return {
    tabBarVisible
  };
};
const tabBarOnPress = ({ navigation, defaultHandler }) => {
  const { state } = navigation;
  console.log(state);
  if (state.routeName === "Locker") {
    navigation.navigate("LockerHome");
  } else if (state.routeName === "BuySell") {
    navigation.navigate("BuySellMain");
  } else if (state.routeName === "News") {
    navigation.navigate("NewsMain");
  }
  // if (isFocused()) {
  //     if (state.routes.length > 1) {
  //         for (let i = 0; i < state.routes.length - 1; i += 1) {
  //             goBack();
  //         }
  //     } else {
  //         // @TODO SCROLL TO TOP OF EACH TAB IF SCROLLABLE, $CALLBACK().
  //     }
  // } else {
  //     defaultHandler();
  // }
};

export default createBottomTabNavigator(
  {
    Locker: {
      screen: LockerStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={[styles.tabIcon, { borderColor: tintColor }]}>
            <FontAwesome5
              solid
              name={"home"}
              size={16}
              style={{ color: tintColor }}
            />
          </View>
        ),
        tabBarOnPress,
        tabBarLabel: () => <Text style={styles.tabLabel}>LOCKER</Text>
      }
    },
    BuySell: {
      screen: BuySellStackNavigator,
      path: "",
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={[styles.tabIcon, { borderColor: tintColor }]}>
            <FontAwesome5
              solid
              name={"coins"}
              size={16}
              style={{ color: tintColor }}
            />
          </View>
        ),
        tabBarOnPress,
        tabBarLabel: () => <Text style={styles.tabLabel}>BUY/SELL</Text>
      }
    },
    Manage: {
      screen: ManageHomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={[styles.tabIcon, { borderColor: tintColor }]}>
            <Image source={Icons.tabManage} style={{ tintColor: tintColor }} />
          </View>
        ),
        tabBarLabel: () => <Text style={styles.tabLabel}>MANAGE</Text>
      }
    },
    News: {
      screen: NewsFeedStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={[styles.tabIcon, { borderColor: tintColor }]}>
            <FontAwesome5
              solid
              name={"newspaper"}
              size={16}
              style={{ color: tintColor }}
            />
          </View>
        ),
        tabBarOnPress,
        tabBarLabel: () => <Text style={styles.tabLabel}>NEWS</Text>
      }
    }
  },
  {
    headerMode: "none",
    tabBarOptions: {
      style: {
        backgroundColor: Colors.textBlackColor,
        height: 82,
        alignItems: "center",
        justifyContent: "center"
        // paddingVertical: 3,
      },
      tabStyle: {
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 0.3,
        borderColor: Colors.malachite
      },
      labelStyle: {},
      activeTintColor: "#FFF",
      inactiveTintColor: Colors.malachite,
      swipeEnabled: true
    }
  }
);
