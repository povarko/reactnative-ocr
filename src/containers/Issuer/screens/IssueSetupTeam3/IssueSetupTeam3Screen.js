import React from "react";
import {
  View,
  ScrollView,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, SideMenu, Input, Button } from "@AppComponents";
import styles from "./styles";
import { Images, Icons, Colors } from "@AppTheme";
import dummyData from "./../IssueSetupTeam/dummy";
import TeamPlayerItem from "./../../components/TeamPlayerItem";
import TeamInviteItem from "./../../components/TeamInviteItem";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class IssueSetupTeam3Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player_selectedTab: "REVIEW"
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  _handleSelectPlayerTab = value => {
    this.setState({
      player_selectedTab: value
    });
  };

  renderAttributes() {
    const { player_selectedTab } = this.state;

    return (
      <View style={styles.bodyContent}>
        <View style={[styles.tabContentView]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <TouchableOpacity
              onPress={() => this._handleSelectPlayerTab("REVIEW")}
              style={[
                styles.tabContentHeader,
                player_selectedTab === "REVIEW"
                  ? { backgroundColor: "#1F1F1F" }
                  : { backgroundColor: "#000" }
              ]}
            >
              <Text
                style={
                  player_selectedTab === "REVIEW"
                    ? styles.tabTitleSelected
                    : styles.tabTitleUnselected
                }
              >
                REVIEW
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this._handleSelectPlayerTab("INVITE")}
              style={[
                styles.tabContentHeader,
                player_selectedTab === "INVITE"
                  ? { backgroundColor: "#1F1F1F" }
                  : { backgroundColor: "#000" }
              ]}
            >
              <Text
                style={
                  player_selectedTab === "INVITE"
                    ? styles.tabTitleSelected
                    : styles.tabTitleUnselected
                }
              >
                INVITE
              </Text>
            </TouchableOpacity>
          </View>
          {player_selectedTab === "INVITE" && (
            <View style={styles.searchBox}>
              <TextInput
                placeholder="Athletes"
                placeholderTextColor="#464646"
                style={styles.searchInput}
                underlineColorAndroid={"transparent"}
              />
              <FontAwesome5 solid name={"search"} style={styles.searchIcon} />
            </View>
          )}
          {player_selectedTab === "INVITE" && (
            <FlatList
              data={dummyData}
              renderItem={this.renderInviteItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          )}
          {player_selectedTab === "REVIEW" && (
            <FlatList
              data={dummyData}
              renderItem={this.renderReviewItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          )}
        </View>
      </View>
    );
  }

  renderInviteItem = ({ item, index }) => {
    return (
      <View>
        <TeamInviteItem key={index} data={item} />
      </View>
    );
  };

  renderReviewItem = ({ item, index }) => {
    return (
      <View>
        <TeamPlayerItem key={index} data={item} />
      </View>
    );
  };
  renderPlayers() {
    const { player_selectedTab } = this.state;

    return (
      <View style={styles.bodyContent}>
        <View style={[styles.tabContentView]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <TouchableOpacity
              onPress={() => this._handleSelectPlayerTab("REVIEW")}
              style={[
                styles.tabContentHeader,
                player_selectedTab === "REVIEW"
                  ? { backgroundColor: "#1F1F1F" }
                  : { backgroundColor: "#000" }
              ]}
            >
              <Text
                style={
                  player_selectedTab === "REVIEW"
                    ? styles.tabTitleSelected
                    : styles.tabTitleUnselected
                }
              >
                REVIEW
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this._handleSelectPlayerTab("INVITE")}
              style={[
                styles.tabContentHeader,
                player_selectedTab === "INVITE"
                  ? { backgroundColor: "#1F1F1F" }
                  : { backgroundColor: "#000" }
              ]}
            >
              <Text
                style={
                  player_selectedTab === "INVITE"
                    ? styles.tabTitleSelected
                    : styles.tabTitleUnselected
                }
              >
                INVITE
              </Text>
            </TouchableOpacity>
          </View>
          {player_selectedTab === "INVITE" && (
            <View style={styles.searchBox}>
              <TextInput
                placeholder="Athletes"
                placeholderTextColor="#464646"
                style={styles.searchInput}
                underlineColorAndroid={"transparent"}
              />
              <FontAwesome5 solid name={"search"} style={styles.searchIcon} />
            </View>
          )}
          {player_selectedTab === "INVITE" && (
            <FlatList
              data={dummyData}
              renderItem={this.renderInviteItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          )}
          {player_selectedTab === "REVIEW" && (
            <FlatList
              data={dummyData}
              renderItem={this.renderReviewItem}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          )}
        </View>
      </View>
    );
  }

  render() {
    const title = "";
    const type = this.props.navigation.getParam("type", () => {});

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={{ flex: 1 }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
              <Text style={styles.textTitle}>ISSUER SETUP</Text>
              <View style={{ width: 20 }} />
            </View>
            <View style={styles.header2}>
              <Text style={styles.profileCompletion}>PROFILE COMPLETION</Text>
              <View style={{ alignItems: "center" }}>
                <View style={styles.profileCompletionBackground}>
                  <View style={styles.profileCompletionProgress} />
                </View>
              </View>
              <Text
                style={[
                  styles.profileCompletion,
                  { fontSize: 12, marginLeft: wp("15%") }
                ]}
              >
                20%
              </Text>
            </View>
            {this.renderAttributes()}
            <View style={styles.processdView}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.proceedButtonView}
                onPress={() => this.props.navigation.navigate("IssueManage")}
              >
                <Text style={styles.proceedText}>DONE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default IssueSetupTeam3Screen;
