import React from "react";
import {
  View,
  Animated,
  Image,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { authActions } from "@AppRedux/actions";
import { SafeAreaView, withNavigation } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { HeaderBar, Text } from "@AppComponents";
import Drawer from "react-native-drawer";
import WeeklyChart from "../../components/WeeklyChart";
import { Colors, Icons, Images } from "@AppTheme";
import styles from "./styles";
import GamePlanItem from "../../components/GamePlanItem";
import NewsItem from "../../components/NewsItem";
import BlogItem from "../../components/BlogItem";
import StoreItem from "../../components/StoreItem";
import AboutItem from "../../components/AboutItem";
import Entypo from "react-native-vector-icons/Entypo";

const drawerStyles = {
  main: { paddingLeft: 3 }
};

const { width } = Dimensions.get("window");
const AnimationDuration = 200;
const statsdata = {
  stats: {
    age: "31",
    height: "1.70 M",
    team: "Barcelona",
    assists: "258",
    goals: "629",
    worth: "$400M",
    sponsors: ["Gatorade"],
    giving: "21%"
  },
  banner: {
    id: "3d36c792-3799-4d6b-98bf-15dd2255a07d",
    image: "https://i.imgur.com/NEyTkRM.png",
    url: "https://nike.com"
  }
};

class LockerDetailsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isMoreview: true,
      subSideBarVisible: false,
      selectedMenuItem: 0,
      sideMenuHeight: new Animated.Value(-195),
      scrollY: new Animated.Value(0.01)
    };
    // this._panResponder = PanResponder.create({
    //   onMoveShouldSetPanResponder: (e, gestureState) => {
    //     if (
    //       Platform.OS == 'android'
    //       && (gestureState.dx < 2 && gestureState.dx > -2)
    //       && (gestureState.dy < 2 && gestureState.dy > -2)
    //     ) {
    //       return false;
    //     }

    //     return true;
    //   }
    // })
  }

  _handlePressMark() {
    const detailData = this.props.navigation.getParam("detailData", () => {});
    if (detailData.item.stats) {
      this.props.navigation.navigate("VirtualStackCard", {
        data: detailData.item
      });
    } else {
      this.props.navigation.navigate("VirtualStackCard", {
        data: statsdata
      });
    }
  }
  _handlePressRightMark() {
    const isVisible = !this.state.subSideBarVisible;
    this.setState({ subSideBarVisible: isVisible });
    if (isVisible) {
      Animated.timing(this.state.sideMenuHeight, {
        toValue: 0,
        duration: AnimationDuration
      }).start();
    } else {
      Animated.timing(this.state.sideMenuHeight, {
        toValue: -195,
        duration: AnimationDuration
      }).start();
    }
  }

  logout = () => {
    const { dispatch, navigation } = this.props;
    navigation.navigate("Auth");
    dispatch(authActions.logout());
  };

  _handlePressMore() {
    const ismore = !this.state.isMoreview;
    this.setState({ isMoreview: true });
  }

  _handlePressRightMenuItem = ([index, data]) => {
    this.setState({
      selectedMenuItem: index
    });
    this.props.navigation.navigate("ExpandedAbout", {
      index: index,
      data: data
    });
    this._handlePressRightMark();
  };

  _handlePressMoreViewItem = ([index, data, activeIndex]) => {
    this.props.navigation.navigate("ExpandedAbout", {
      index: index,
      data: data,
      activeIndex
    });
  };

  renderMoreView = data => {
    if (this.state.isMoreview && data.data) {
      return (
        <View>
          {data.data.plan ? (
            <View style={{ backgroundColor: "#FFF" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this._handlePressMoreViewItem([0, data])}
              >
                <View style={styles.moreHeader}>
                  <Text style={styles.moreHeaderText}>GAME PLAN</Text>
                </View>
              </TouchableOpacity>
              <GamePlanItem
                data={data.data.plan}
                onPress={activeIndex =>
                  this._handlePressMoreViewItem([0, data, activeIndex])
                }
              />
            </View>
          ) : (
            <View />
          )}
          {data.data.news ? (
            <View style={{ backgroundColor: "#FFF" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this._handlePressMoreViewItem([1, data])}
              >
                <View style={styles.moreHeader}>
                  <Text style={styles.moreHeaderText}>NEWS</Text>
                </View>
              </TouchableOpacity>
              <NewsItem
                data={data.data.news}
                onPress={activeIndex =>
                  this._handlePressMoreViewItem([1, data, activeIndex])
                }
              />
            </View>
          ) : (
            <View />
          )}
          {data.data.story ? (
            <View style={{ backgroundColor: "#FFF" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this._handlePressMoreViewItem([2, data])}
              >
                <View style={styles.moreHeader}>
                  <Text style={styles.moreHeaderText}>ABOUT</Text>
                </View>
              </TouchableOpacity>
              <AboutItem
                data={data.data.story}
                onPress={() => this._handlePressMoreViewItem([2, data])}
              />
            </View>
          ) : (
            <View />
          )}
          {data.data.forum ? (
            <View style={{ backgroundColor: "#FFF" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this._handlePressMoreViewItem([3, data])}
              >
                <View style={styles.moreHeader}>
                  <Text style={styles.moreHeaderText}>BLOG</Text>
                </View>
              </TouchableOpacity>
              <BlogItem
                data={data.data.forum}
                onPress={activeIndex =>
                  this._handlePressMoreViewItem([3, data, activeIndex])
                }
              />
            </View>
          ) : (
            <View />
          )}
          {data.data.store ? (
            <View style={{ backgroundColor: "#FFF" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this._handlePressMoreViewItem([4, data])}
              >
                <View style={styles.moreHeader}>
                  <Text style={styles.moreHeaderText}>STORE</Text>
                </View>
              </TouchableOpacity>
              <StoreItem data={data.data.store} />
            </View>
          ) : (
            <View />
          )}
          <View>
            <Image source={Images.dummyAD} resizeMode={"contain"} />
          </View>
        </View>
      );
    } else {
      return <View />;
    }
  };

  _getHeaderBackgroundColor = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [50, 90],
      outputRange: [1, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getTopHeight = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [50, 72],
      outputRange: [72, 0],
      extrapolate: "clamp"
    });
  };
  _getHeaderHeight = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [30, 0],
      extrapolate: "clamp"
    });
  };
  _getHeaderOpacity = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: "clamp"
    });
  };
  _getImageX = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [0, 90, 240],
      outputRange: [width / 2 - 72, width / 2 - 72, 4],
      extrapolate: "clamp"
    });
  };
  _getImageY = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [0, 90, 240],
      outputRange: [0, 0, 0],
      extrapolate: "clamp"
    });
  };

  _getImageSize = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [90, 240],
      outputRange: [120, 46],
      extrapolate: "clamp"
    });
  };
  _getImageViewHeight = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [90, 240],
      outputRange: [140, 72],
      extrapolate: "clamp"
    });
  };
  _getImageRadius = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [90, 240],
      outputRange: [60, 23],
      extrapolate: "clamp"
    });
  };
  _getBottomWidth = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [90, 240],
      outputRange: [60, 0],
      extrapolate: "clamp"
    });
  };
  _getBorderHeight = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [236, 240],
      outputRange: [0, 0.3],
      extrapolate: "clamp"
    });
  };

  _getTitleHeight = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [0, 245, 250],
      outputRange: [0, 0, 60],
      extrapolate: "clamp"
    });
  };
  _getTitleMargin = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [0, 245, 250],
      outputRange: [0, 0, -58],
      extrapolate: "clamp"
    });
  };
  _getVisible = () => {
    const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [0, 245, 250],
      outputRange: [0, 0.1, 1],
      extrapolate: "clamp"
    });
    // return this.state.scrollY > 230
  };

  onOpen = () => {
    if (!this.state.isOpen) {
      this.setState({ isOpen: true });
      this.sideMenu.open(true);
    } else {
      this.onClose();
    }
  };

  onClose = () => {
    this.setState({ isOpen: false });
    this.sideMenu.close();
  };

  navigate = route => {
    // alert(route)
    if (route === "Logout") {
      this.props.navigation.navigate("Login");
    } else {
      this.props.navigation.navigate(route);
    }
    this.onClose();
  };

  renderRightSidebar() {
    const { title } = this.props;
    const isActive = value => {
      return title === value;
    };

    // const isActive = true

    return (
      <View style={styles.menuContainer}>
        <TouchableWithoutFeedback onPress={() => this.navigate("Profile")}>
          <View style={[styles.row, isActive("profile") && styles.activeStyle]}>
            <View style={styles.iconContainer}>
              <Image
                source={Icons.user}
                resizeMode="contain"
                style={styles.iconSideMenu}
              />
            </View>
            <Text style={styles.title}>Profile</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.navigate("Verification")}>
          <View
            style={[styles.row, isActive("verification") && styles.activeStyle]}
          >
            <View style={styles.iconContainer}>
              <Image
                source={Icons.userVerified}
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
            <Text style={styles.title}>Verification</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.navigate("Security")}>
          <View
            style={[styles.row, isActive("security") && styles.activeStyle]}
          >
            <View style={styles.iconContainer}>
              <Image
                source={Icons.thumb}
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
            <Text style={styles.title}>Security</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.navigate("IssueManage")}>
          <View style={[styles.row, isActive("athlete") && styles.activeStyle]}>
            <View style={styles.iconContainer}>
              <Image source={Icons.ball} style={styles.icon} />
            </View>
            <Text style={styles.title}>Athlete</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.logout}>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Image
                source={Icons.setlogin}
                resizeMode="contain"
                style={styles.icon}
              />
            </View>
            <Text style={styles.title}>Logout</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
  render() {
    const detailData = this.props.navigation.getParam("detailData", () => {});
    const data = detailData.item;
    const { isMoreview, subSideBarVisible, selectedMenuItem } = this.state;
    const numberWithCommas = x => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    //User photo
    const HeaderBackgroundColor = this._getHeaderBackgroundColor();
    const TopHeight = this._getTopHeight();
    const HeaderHeight = this._getHeaderHeight();
    const HeaderOpacity = this._getHeaderOpacity();
    const ImageSize = this._getImageSize();
    const ImageRadius = this._getImageRadius();
    const ImageViewHeight = this._getImageViewHeight();
    const TopViewBottomWidth = this._getBottomWidth();
    const ImageX = this._getImageX();
    const ImageY = this._getImageY();
    const BorderHeight = this._getBorderHeight();

    //User info strings
    const NameHeight = this._getTitleHeight();
    const NameMargin = this._getTitleMargin();
    const getVisibility = this._getVisible();

    return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={{ opacity: HeaderBackgroundColor, height: TopHeight }}
        >
          <HeaderBar
            title="FOOTBALL"
            onMenuPress={this.onOpen}
            menuIcon={this.state.isOpen && Icons.arrowRight}
          />
        </Animated.View>
        <Drawer
          ref={ref => (this.sideMenu = ref)}
          type="overlay"
          side="right"
          content={this.renderRightSidebar()}
          tapToClose={true}
          openDrawerOffset={0.5} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={0}
          styles={drawerStyles}
          onClose={() => this.setState({ isOpen: false })}
          onOpen={() => this.setState({ isOpen: true })}
          tweenHandler={ratio => ({
            main: { opacity: (2 - ratio) / 2 }
          })}
        >
          <View style={styles.bodyContent}>
            <View style={{ backgroundColor: "#1A1A1A" }}>
              <Animated.View
                style={[
                  styles.header,
                  { opacity: HeaderOpacity, height: HeaderHeight }
                ]}
              >
                <Entypo
                  name={"chevron-thin-left"}
                  style={styles.backIcon}
                  onPress={() => this.props.navigation.goBack()}
                />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Image source={Icons.twitter} style={[styles.socialIcon]} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Image source={Icons.facebook} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Image source={Icons.linkedin} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Image source={Icons.instagram} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Image source={Icons.youtube} style={styles.socialIcon} />
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </View>
            <Animated.View
              style={{
                height: ImageViewHeight,
                backgroundColor: "#1A1A1A",
                padding: 12,
                borderBottomWidth: TopViewBottomWidth,
                borderColor: "#000"
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this._handlePressMark()}
              >
                <Animated.Image
                  source={data.image}
                  style={[
                    styles.photo,
                    {
                      width: ImageSize,
                      height: ImageSize,
                      borderRadius: ImageRadius,
                      transform: [{ translateY: 0 }, { translateX: ImageX }]
                    }
                  ]}
                  resizeMode={"cover"}
                />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={{
                height: BorderHeight,
                backgroundColor: Colors.malachite
              }}
            />
            <Animated.View
              style={{
                height: NameHeight,
                marginTop: NameMargin,
                marginLeft: 78,
                flexDirection: "row",
                justifyContent: "space-between",
                opacity: getVisibility
              }}
            >
              <View>
                <Text style={styles.animatedSymbol}>{data.symbol}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.animatedStakeText}>
                    STAKES:{" "}
                    <Text style={[styles.animatedStakeText, { color: "#FFF" }]}>
                      {data.quantity}
                    </Text>
                  </Text>
                  <Text style={[styles.animatedStakeText, { marginLeft: 15 }]}>
                    Value:{" "}
                    <Text style={[styles.animatedStakeText, { color: "#FFF" }]}>
                      {data.price}
                    </Text>
                  </Text>
                </View>
              </View>
              <FontAwesome5
                solid
                name={"ellipsis-v"}
                style={{
                  color: Colors.malachite,
                  fontSize: 25,
                  marginTop: 10,
                  marginRight: 20
                }}
                onPress={() => this._handlePressRightMark()}
              />
            </Animated.View>
            <ScrollView
              onScroll={Animated.event([
                { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
              ])}
              scrollEventThrottle={16}
            >
              <View style={styles.body}>
                <View style={styles.userInfoView}>
                  <Text style={styles.userName}>{data.name}</Text>
                  <Text style={styles.userNickName}>{data.symbol}</Text>
                  <Text style={styles.usdValue}>
                    {data.price
                      ? "$" + numberWithCommas(data.usdValue)
                      : "$0.00"}
                  </Text>
                  <View style={styles.buysell}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.buttonBuy}
                      onPress={() =>
                        this.props.navigation.navigate("BuySellMain", {
                          type: "BUY",
                          username: data.name
                        })
                      }
                    >
                      <Text style={styles.buyText}>BUY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.buttonSell}
                      onPress={() =>
                        this.props.navigation.navigate("BuySellMain", {
                          type: "SELL",
                          username: data.name
                        })
                      }
                    >
                      <Text style={styles.buyText}>SELL</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.stackView}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.stakeCount}>Stakes: </Text>
                    <Text style={styles.stakeValue}>{data.quantity}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.stakeCount}>Value: </Text>
                    <Text style={styles.stakeValue}>
                      {data.price
                        ? "$" + numberWithCommas(data.price)
                        : "$0.00"}
                    </Text>
                  </View>
                </View>
                <View style={styles.stackView}>
                  <Text style={styles.changeDate}>
                    07 JUN 18 THRU 07 AUG 18{" "}
                  </Text>
                  <View style={styles.changeButton}>
                    <Text style={styles.changeText}>+{data.change}%</Text>
                  </View>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <WeeklyChart style={styles.graph} />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Text style={styles.graphText}>
                      Index Value Daily Average Trading Price
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.moreView}
                  onPress={() => this._handlePressMore()}
                >
                  <Image source={Icons.buttonDown} style={styles.downIcon} />
                </TouchableOpacity>
              </View>
              {this.renderMoreView({ data })}
            </ScrollView>
          </View>
          <Animated.View
            style={[styles.sidemenuView, { right: this.state.sideMenuHeight }]}
          >
            <View style={styles.rightMenuBack}>
              <FontAwesome5
                solid
                name={"chevron-right"}
                style={styles.rightIcon}
                onPress={() => this._handlePressRightMark()}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressRightMenuItem([0, { data }])}
            >
              {selectedMenuItem === 0 ? (
                <View
                  style={{
                    backgroundColor: "#2F2F2F",
                    padding: 5,
                    marginTop: 1
                  }}
                >
                  <View style={styles.sideMenuItemViewSelected}>
                    <Image
                      resizeMode="contain"
                      source={Icons.gamePlanIcon}
                      style={styles.rightSideIconSelected}
                    />
                    <Text style={styles.sideMenuItemText}>Game Plan</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.sideMenuItemView}>
                  <Image
                    resizeMode="contain"
                    source={Icons.gamePlanIcon}
                    style={styles.rightSideIcon}
                  />
                  <Text style={styles.sideMenuItemText}>Game Plan</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressRightMenuItem([1, { data }])}
            >
              {selectedMenuItem === 1 ? (
                <View
                  style={{
                    backgroundColor: "#2F2F2F",
                    padding: 5,
                    marginTop: 1
                  }}
                >
                  <View style={styles.sideMenuItemViewSelected}>
                    <Image
                      resizeMode="contain"
                      source={Icons.newsIcon}
                      style={styles.rightSideIconSelected}
                    />
                    <Text style={styles.sideMenuItemText}>News</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.sideMenuItemView}>
                  <Image source={Icons.newsIcon} style={styles.rightSideIcon} />
                  <Text style={styles.sideMenuItemText}>News</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressRightMenuItem([2, { data }])}
            >
              {selectedMenuItem === 2 ? (
                <View
                  style={{
                    backgroundColor: "#2F2F2F",
                    padding: 5,
                    marginTop: 1
                  }}
                >
                  <View style={styles.sideMenuItemViewSelected}>
                    <Image
                      resizeMode="contain"
                      source={Icons.aboutIcon}
                      style={styles.rightSideIconSelected}
                    />
                    <Text style={styles.sideMenuItemText}>About</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.sideMenuItemView}>
                  <Image
                    resizeMode="contain"
                    source={Icons.aboutIcon}
                    style={styles.rightSideIcon}
                  />
                  <Text style={styles.sideMenuItemText}>About</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressRightMenuItem([3, { data }])}
            >
              {selectedMenuItem === 3 ? (
                <View
                  style={{
                    backgroundColor: "#2F2F2F",
                    padding: 5,
                    marginTop: 1
                  }}
                >
                  <View style={styles.sideMenuItemViewSelected}>
                    <Image
                      source={Icons.blogIcon}
                      style={styles.rightSideIconSelected}
                    />
                    <Text style={styles.sideMenuItemText}>Blog</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.sideMenuItemView}>
                  <Image
                    resizeMode="contain"
                    source={Icons.blogIcon}
                    style={styles.rightSideIcon}
                  />
                  <Text style={styles.sideMenuItemText}>Blog</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressRightMenuItem([4, { data }])}
            >
              {selectedMenuItem === 4 ? (
                <View
                  style={{
                    backgroundColor: "#2F2F2F",
                    padding: 5,
                    marginTop: 1
                  }}
                >
                  <View style={styles.sideMenuItemViewSelected}>
                    <Image
                      resizeMode="contain"
                      source={Icons.storeIcon}
                      style={styles.rightSideIconSelected}
                    />
                    <Text style={styles.sideMenuItemText}>Store</Text>
                  </View>
                </View>
              ) : (
                <View style={styles.sideMenuItemView}>
                  <Image
                    resizeMode="contain"
                    source={Icons.storeIcon}
                    style={styles.rightSideIcon}
                  />
                  <Text style={styles.sideMenuItemText}>Store</Text>
                </View>
              )}
            </TouchableOpacity>
          </Animated.View>
        </Drawer>
      </SafeAreaView>
    );
  }
}

LockerDetailsScreen.propTypes = {};
export default connect()(withNavigation(LockerDetailsScreen));
