import React, { Fragment } from "react";
import {
  View,
  Animated,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import { Colors, Icons, Images } from "@AppTheme";
import styles from "./styles";
// import { TouchableOpacity } from "react-native-gesture-handler";
import GamePlanExpandItem from "../../components/GamePlanExpandItem";
import NewsExpandItem from "../../components/NewsExpandItem";
import BlogExpandItem from "../../components/BlogExpandItem";
import AboutExpandItem from "../../components/AboutExpandItem";
import StoreExpandItem from "../../components/StoreExpandItem";
import reactotron from "reactotron-react-native";

const { width, height } = Dimensions.get("window");
const AnimationDuration = 200;
const menuTitle = ["GAME PLAN", "NEWS", "ABOUT", "BLOG", "ONLINE STORE"];

class ExpandedAboutScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenuItem: this.props.navigation.getParam("index", 0),
      detailData: this.props.navigation.getParam("data", ""),
      subSideBarVisible: false,
      sideMenuPosition: new Animated.Value(-195)
    };
  }

  _handlePressRightMark() {
    const isVisible = !this.state.subSideBarVisible;
    this.setState({ subSideBarVisible: isVisible });
    if (isVisible) {
      Animated.timing(this.state.sideMenuPosition, {
        toValue: 0,
        duration: AnimationDuration
      }).start();
    } else {
      Animated.timing(this.state.sideMenuPosition, {
        toValue: -195,
        duration: AnimationDuration
      }).start();
    }
  }

  _handlePressRightMenuItem(index) {
    this.setState({
      selectedMenuItem: index
    });
    this._handlePressRightMark();
  }

  _renderExpanded() {
    reactotron.log(this.state.detailData);
    const data = this.state.detailData.data;
    const { selectedMenuItem } = this.state;
    return selectedMenuItem === 0 ? (
      <GamePlanExpandItem data={data} />
    ) : selectedMenuItem === 1 ? (
      <NewsExpandItem data={data} />
    ) : selectedMenuItem === 2 ? (
      <AboutExpandItem data={data} />
    ) : selectedMenuItem === 3 ? (
      <BlogExpandItem data={data} />
    ) : (
      <StoreExpandItem data={data} />
    );

    // selectedMenuItem === 0 ? <GamePlanExpandItem data={data} /> : <GamePlanExpandItem data={data} />
  }

  render() {
    const { selectedMenuItem, detailData } = this.state;
    const title = menuTitle[selectedMenuItem];
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 0.9 }}
          >
            <Image
              // source={{ uri: detailData.data.image }}
              source={detailData.data.image}
              style={styles.photo}
              resizeMode={"cover"}
            />
            <View style={{ flex: 1, marginLeft: 4 }}>
              <Text style={styles.stakeValue}>{detailData.data.symbol}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.stake}>
                  Stakes:{" "}
                  <Text style={styles.stakeValue}>
                    {detailData.data.quantity}
                  </Text>
                </Text>

                <Text style={[styles.stake, { marginLeft: 15 }]}>
                  Value:{" "}
                  <Text style={styles.stakeValue}>
                    {detailData.data.currency}
                    {detailData.data.price}
                  </Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 0.1, alignItems: "flex-end" }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressRightMark()}
            >
              <Image source={Icons.rightMenu} style={styles.rightMenu} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 0.3, backgroundColor: Colors.malachite }} />
        <View style={{ backgroundColor: "#FFF" }}>
          <View style={styles.moreHeader}>
            <FontAwesome5
              solid
              name={"chevron-left"}
              style={styles.backIcon}
              onPress={() => this.props.navigation.goBack()}
            />
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.moreHeaderText}>{title}</Text>
            </View>
          </View>
        </View>
        {this._renderExpanded()}
        <Animated.View
          style={[styles.sidemenuView, { right: this.state.sideMenuPosition }]}
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
            onPress={() => this._handlePressRightMenuItem(0)}
          >
            {selectedMenuItem === 0 ? (
              <View
                style={{ backgroundColor: "#2F2F2F", padding: 5, marginTop: 1 }}
              >
                <View style={styles.sideMenuItemViewSelected}>
                  <Image
                    source={Icons.gamePlanIcon}
                    style={styles.rightSideIconSelected}
                  />
                  <Text style={styles.sideMenuItemText}>Game Plan</Text>
                </View>
              </View>
            ) : (
              <View style={styles.sideMenuItemView}>
                <Image
                  source={Icons.gamePlanIcon}
                  style={styles.rightSideIcon}
                />
                <Text style={styles.sideMenuItemText}>Game Plan</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this._handlePressRightMenuItem(1)}
          >
            {selectedMenuItem === 1 ? (
              <View
                style={{ backgroundColor: "#2F2F2F", padding: 5, marginTop: 1 }}
              >
                <View style={styles.sideMenuItemViewSelected}>
                  <Image
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
            onPress={() => this._handlePressRightMenuItem(2)}
          >
            {selectedMenuItem === 2 ? (
              <View
                style={{ backgroundColor: "#2F2F2F", padding: 5, marginTop: 1 }}
              >
                <View style={styles.sideMenuItemViewSelected}>
                  <Image
                    source={Icons.aboutIcon}
                    style={styles.rightSideIconSelected}
                  />
                  <Text style={styles.sideMenuItemText}>About</Text>
                </View>
              </View>
            ) : (
              <View style={styles.sideMenuItemView}>
                <Image source={Icons.aboutIcon} style={styles.rightSideIcon} />
                <Text style={styles.sideMenuItemText}>About</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this._handlePressRightMenuItem(3)}
          >
            {selectedMenuItem === 3 ? (
              <View
                style={{ backgroundColor: "#2F2F2F", padding: 5, marginTop: 1 }}
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
                <Image source={Icons.blogIcon} style={styles.rightSideIcon} />
                <Text style={styles.sideMenuItemText}>Blog</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this._handlePressRightMenuItem(4)}
          >
            {selectedMenuItem === 4 ? (
              <View
                style={{ backgroundColor: "#2F2F2F", padding: 5, marginTop: 1 }}
              >
                <View style={styles.sideMenuItemViewSelected}>
                  <Image
                    source={Icons.storeIcon}
                    style={styles.rightSideIconSelected}
                  />
                  <Text style={styles.sideMenuItemText}>Store</Text>
                </View>
              </View>
            ) : (
              <View style={styles.sideMenuItemView}>
                <Image source={Icons.storeIcon} style={styles.rightSideIcon} />
                <Text style={styles.sideMenuItemText}>Store</Text>
              </View>
            )}
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    );
  }
}

ExpandedAboutScreen.propTypes = {};
export default ExpandedAboutScreen;
