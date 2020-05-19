import React from "react";
import {
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { HeaderBar, Text, SideMenu } from "@AppComponents";
import { Colors, Images } from "@AppTheme";
import styles from "./styles";
import { TEAMS } from "../../../Home/components/VirtualShareCertificates/dummy";

class TeamSelectIssueScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      searchDataSource: [],
      searchText: "",
      noSearchResult: true
    };
  }

  componentDidMount() {
    tmpData = TEAMS.map((item, index) => {
      item.isSelect = false;
      item.id = index;
      return item;
    });
    this.setState({
      dataSource: tmpData,
      searchDataSource: tmpData
    });
  }

  goForward = () => {
    const type = this.props.navigation.getParam("type", () => {});
    if (type === "TEAM") {
      this.props.navigation.navigate("IssueSetupTeam1", { type: type });
    } else {
      this.props.navigation.navigate("IssueSetup", { type: type });
    }
  };

  onSearchChange = value => {
    tmpData = this.state.dataSource.filter(data =>
      data.name.toUpperCase().includes(value.toUpperCase())
    );
    let searchResult = tmpData.length > 0 ? true : false;
    if (searchResult) {
      this.setState({
        searchText: value,
        searchDataSource: tmpData,
        noSearchResult: true
      });
    } else {
      this.setState({
        searchText: value,
        searchDataSource: this.state.dataSource,
        noSearchResult: false
      });
    }
  };

  onSearchClear() {
    this.setState({
      searchText: "",
      searchDataSource: this.state.dataSource,
      noSearchResult: true
    });
  }
  selectcItem = data => {
    data.isSelect = !data.isSelect;
    const index = this.state.dataSource.findIndex(item => data.id === item.id);
    this.state.dataSource[index] = data;
    this.setState({
      dataSource: this.state.dataSource
    });
  };

  renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", margin: 5 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: "100%" }}
          onPress={() => this.selectcItem(item)}
        >
          <Image
            // source={{ uri: item.image }}
            source={item.image}
            style={styles.photo}
            resizeMode={"contain"}
          />
          {item.isSelect ? (
            <View style={styles.selectedItem}>
              <FontAwesome5
                solid
                name={"check-circle"}
                style={styles.checkcircle}
              />
            </View>
          ) : (
            <View />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const title = "CHOOSE YOUR TEAMS";
    const type = this.props.navigation.getParam("type", () => {});
    let { searchText, searchDataSource, noSearchResult } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={{ flex: 1 }}>
            <View style={styles.bodyContent}>
              <View style={styles.searchBox}>
                <TextInput
                  value={searchText}
                  style={styles.searchInput}
                  underlineColorAndroid={"transparent"}
                  onChangeText={this.onSearchChange}
                />
                {searchText === "" ? (
                  <FontAwesome5
                    solid
                    name={"search"}
                    style={styles.searchIcon}
                  />
                ) : (
                  <TouchableOpacity onPress={() => this.onSearchClear()}>
                    <FontAwesome5
                      solid
                      name={"times-circle"}
                      style={styles.searchCancel}
                    />
                  </TouchableOpacity>
                )}
              </View>
              {noSearchResult ? (
                <View style={styles.header}>
                  <Text style={styles.profileCompletion}>
                    PROFILE COMPLETION
                  </Text>
                  <View style={styles.profileCompletionBackground}>
                    <View style={styles.profileCompletionProgress} />
                  </View>
                  <Text
                    style={[
                      styles.profileCompletion,
                      { fontSize: 12, marginLeft: 30 }
                    ]}
                  >
                    10%
                  </Text>
                </View>
              ) : (
                <View style={styles.header2}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 10
                    }}
                  >
                    <FontAwesome5
                      name={"info-circle"}
                      style={styles.searchresultMark}
                    />
                    <Text style={styles.searchInput}>
                      No Results for {searchText}!
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: 1,
                      backgroundColor: "#EEE"
                    }}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("IssueAddSearch", {
                        title: searchText,
                        mode: "team",
                        type: type
                      })
                    }
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10
                      }}
                    >
                      <FontAwesome5
                        name={"plus-square"}
                        style={styles.searchresultMark2}
                      />
                      <Text style={styles.searchInput}>Add {searchText}</Text>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: "100%",
                      height: 1,
                      backgroundColor: "#EEE"
                    }}
                  />
                </View>
              )}
              <FlatList
                data={searchDataSource}
                renderItem={this.renderItem}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                style={styles.list}
                extraData={this.state}
              />
            </View>
            <View style={styles.processdView}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.proceedButtonView}
                onPress={() => this.goForward()}
              >
                <Text style={styles.proceedText}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default TeamSelectIssueScreen;
