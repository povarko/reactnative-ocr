import React, { Component, Fragment } from "react";
import { View, TouchableWithoutFeedback, Image } from "react-native";
import PropTypes from "prop-types";
import { HeaderBar, Text } from "@AppComponents";
import { Icons } from "@AppTheme";
import { withNavigation } from "react-navigation";
import Drawer from "react-native-drawer";
import { authActions } from "@AppRedux/actions";
import { connect } from "react-redux";
import styles from "./styles";

const drawerStyles = {
  // drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 }
};

class AppSideMenu extends Component {
  static propTypes = {
    title: PropTypes.string,
    containerStyle: PropTypes.object,
    headerProps: PropTypes.object,
    children: PropTypes.element
  };

  static defaultProps = {
    title: ""
  };

  state = {
    isOpen: false
  };

  onOpen = () => {
    if (!this.state.isOpen) {
      this.sideMenu.open(true);
    } else {
      this.onClose();
    }
  };

  onClose = () => {
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

  logout = () => {
    const { dispatch, navigation } = this.props;
    dispatch(authActions.logout());
  };

  renderRightSidebar() {
    const { title } = this.props;
    const isActive = value => {
      return title.toLocaleLowerCase() === value;
    };

    return (
      <View style={styles.menuContainer}>
        <TouchableWithoutFeedback onPress={() => this.navigate("Profile")}>
          <View style={[styles.row, isActive("profile") && styles.activeStyle]}>
            <View style={styles.iconContainer}>
              <Image
                source={Icons.user}
                resizeMode="contain"
                style={styles.icon}
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
    const { headerProps } = this.props;

    return (
      <Fragment>
        <HeaderBar
          {...headerProps}
          onMenuPress={this.onOpen}
          menuIcon={this.state.isOpen ? Icons.arrowRight : Icons.menu}
        />
        <Drawer
          ref={ref => (this.sideMenu = ref)}
          type="overlay" //"displace"
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
          {this.props.children}
        </Drawer>
      </Fragment>
    );
  }
}

export default connect()(withNavigation(AppSideMenu));
