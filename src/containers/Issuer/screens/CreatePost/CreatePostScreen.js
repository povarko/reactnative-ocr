import React, { Component } from "react";
import { View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { SideMenu, Text } from "@AppComponents";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Images, Icons, Colors } from "@AppTheme";
import styles from "./styles";

class CreatePostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
    // this.props.navigation.dispatch(NavigationActions.back());
  };

  goToAction = index => {
    this.setState({
      selected: index
    });
    switch (index) {
      case 0:
        this.props.navigation.navigate("CreatePostNews");
        break;
      case 1:
        this.props.navigation.navigate("CreatePostBlog");
        break;
      case 2:
        this.props.navigation.navigate("CreatePostGame");
        break;
      case 3:
        this.props.navigation.navigate("CreatePostSocial");
        break;
    }
  };

  render() {
    let { selected } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title: "CREATE POST" }}>
          <View style={styles.background}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <Text style={styles.subTitle}>
                SELECT THE POST TYPE YOU WANT TO CREATE
              </Text>

              <View style={styles.subContent}>
                <TouchableOpacity
                  style={
                    selected === 0
                      ? styles.itemContentSelected
                      : styles.itemContent
                  }
                  onPress={() => this.goToAction(0)}
                >
                  <Text style={styles.itemText}>NEWS</Text>
                  <FontAwesome5
                    solid
                    name="newspaper"
                    style={
                      selected === 0 ? styles.itemIconSelected : styles.itemIcon
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    selected === 1
                      ? styles.itemContentSelected
                      : styles.itemContent
                  }
                  onPress={() => this.goToAction(1)}
                >
                  <Text style={styles.itemText}>BLOG</Text>
                  <FontAwesome5
                    solid
                    name="blog"
                    style={
                      selected === 1 ? styles.itemIconSelected : styles.itemIcon
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    selected === 2
                      ? styles.itemContentSelected
                      : styles.itemContent
                  }
                  onPress={() => this.goToAction(2)}
                >
                  <Text style={styles.itemText}>GAME PLAN</Text>
                  <FontAwesome5
                    solid
                    name="expand"
                    style={
                      selected === 2 ? styles.itemIconSelected : styles.itemIcon
                    }
                  />
                </TouchableOpacity>
                {/**
                <TouchableOpacity
                  style={
                    selected === 3
                      ? styles.itemContentSelected
                      : styles.itemContent
                  }
                  onPress={() => this.goToAction(3)}
                >
                  <Text style={styles.itemText}>SOCIAL</Text>
                  <FontAwesome5
                    solid
                    name="hashtag"
                    style={
                      selected === 3 ? styles.itemIconSelected : styles.itemIcon
                    }
                  />
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
export default CreatePostScreen;
