import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Drawer from "react-native-drawer";
import { SafeAreaView } from "react-navigation";
import { SideMenu, Text } from "@AppComponents";
import { Images, Icons, Colors } from "@AppTheme";
import styles from "./styles";

const drawerStyles = {
  main: { paddingLeft: 3 }
};
class IssueManageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      isOpen: false
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  goBack = () => {
    this.props.navigation.navigate("SelectIssueType");
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
    this.props.navigation.navigate(route);
    this.onClose();
  };

  goAnalytics = () => {
    this.setState({
      selected: 0
    });
    this.props.navigation.navigate("IssueAnalytics");
  };
  goAsset = () => {
    this.setState({
      selected: 1
    });
    this.props.navigation.navigate("IssueAssets");
  };
  goPost = () => {
    this.setState({
      selected: 2
    });
    this.props.navigation.navigate("CreatePost");
  };
  goStore = () => {
    this.setState({
      selected: 3
    });
    this.props.navigation.navigate("MyStore");
  };

  renderRightSidebar() {
    return (
      <View style={styles.menuContainer}>
        <TouchableWithoutFeedback
          onPress={() => this.navigate("SelectIssueType")}
        >
          <View style={[styles.row, styles.activeStyle]}>
            {/* <View style={styles.iconContainer}>
              <Image
                source={Icons.user}
                resizeMode="contain"
                style={styles.icon}
              />
            </View> */}
            <Text style={styles.title1}>Create New Issurance</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => this.navigate("AssetsRemaining")}
        >
          <View style={[styles.row, styles.activeStyle]}>
            {/* <View style={styles.iconContainer}>
              <Image
                source={Icons.userVerified}
                resizeMode="contain"
                style={styles.icon}
              />
            </View> */}
            <Text style={styles.title1}>Manage Issurance</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
  render() {
    let { selected, isOpen } = this.state;
    const title = "ISSUER HOME";
    const subTitle = "FOOTBALL";
    const userName = "LIONEL MESSI";
    const teamName = "Barcelona fc";
    const userAvatar = require("@Assets/images/lionel-messi.png");

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }}>
          <ImageBackground
            resizeMode="cover"
            source={Images.backgroundSmall}
            style={styles.headerBackground}
          >
            <Drawer
              ref={ref => (this.sideMenu = ref)}
              type="overlay"
              side="right"
              content={this.renderRightSidebar()}
              tapToClose={true}
              openDrawerOffset={0.5} // 20% gap on the right side of drawer
              panCloseMask={0}
              closedDrawerOffset={0}
              captureGestures={true}
              styles={drawerStyles}
              onClose={() => this.setState({ isOpen: false })}
              onOpen={() => this.setState({ isOpen: true })}
              tweenHandler={ratio => ({
                main: { opacity: (2 - ratio) / 2 }
              })}
            >
              <ScrollView style={{ flex: 1 }}>
                <View style={styles.header}>
                  <View style={{ width: 30 }} />
                  <Text style={styles.title}>{subTitle}</Text>
                  <TouchableOpacity
                    onPress={this.onOpen}
                    style={{ width: 20, height: 30 }}
                  >
                    <Image
                      source={isOpen ? Icons.arrowRight : Icons.rightMenu}
                      style={isOpen ? styles.icons1 : styles.icons}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.avatarContainer}>
                  <Image source={userAvatar} style={styles.avatar} />
                </View>
                <Text style={styles.nameTitle}>{userName}</Text>
                <Text style={styles.teamTitle}>{teamName}</Text>
                <View style={styles.subContent}>
                  <TouchableOpacity
                    style={
                      selected === 0
                        ? styles.itemContentSelected
                        : styles.itemContent
                    }
                    onPress={this.goAnalytics}
                  >
                    <FontAwesome5
                      solid
                      name="chart-bar"
                      style={{
                        width: 45,
                        fontSize: 45,
                        color: Colors.malachite
                      }}
                    />
                    <Text style={styles.itemText}>ANALYTICS</Text>
                    <Image
                      source={Icons.arrowRight}
                      style={styles.itemRightIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selected === 1
                        ? styles.itemContentSelected
                        : styles.itemContent
                    }
                    onPress={this.goAsset}
                  >
                    <Image
                      source={Images.logo}
                      style={styles.itemImage}
                      resizeMode={"contain"}
                    />
                    <Text style={styles.itemText}>ASSETS</Text>
                    <Image
                      source={Icons.arrowRight}
                      style={styles.itemRightIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selected === 2
                        ? styles.itemContentSelected
                        : styles.itemContent
                    }
                    onPress={this.goPost}
                  >
                    <FontAwesome5
                      solid
                      name="share-alt"
                      style={{
                        width: 45,
                        fontSize: 45,
                        color: Colors.malachite
                      }}
                    />
                    <Text style={styles.itemText}>CREATE POSTS</Text>
                    <Image
                      source={Icons.arrowRight}
                      style={styles.itemRightIcon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selected === 3
                        ? styles.itemContentSelected
                        : styles.itemContent
                    }
                    onPress={this.goStore}
                  >
                    <FontAwesome5
                      solid
                      name="shopping-cart"
                      style={{
                        width: 45,
                        fontSize: 40,
                        color: Colors.malachite
                      }}
                    />
                    <Text style={styles.itemText}>MY-STORE</Text>
                    <Image
                      source={Icons.arrowRight}
                      style={styles.itemRightIcon}
                    />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </Drawer>
          </ImageBackground>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
export default IssueManageScreen;
