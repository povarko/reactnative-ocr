import React from "react";
import {
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, SideMenu } from "@AppComponents";
import styles from "./styles";
import { sportsActions } from "@AppRedux/actions";
import { connect } from "react-redux";

class SportSelectIssueScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchDataSource: [],
      searchText: "",
      noSearchResult: true,
      selected: []
    };
  }

  componentDidMount() {
    this.setState({
      searchDataSource: this.props.sports.all
    });
    this.getAllSports();
  }

  componentDidUpdate(prevProps) {
    const sports = this.props.sports.all;
    if (!Object.is(prevProps.sports.all, sports)) {
      this.setState({ searchDataSource: sports });
    }
  }

  getAllSports = () => {
    this.props.dispatch(sportsActions.getAllSports());
  };

  onSearchChange = value => {
    const { sports } = this.props;
    const results = sports.all.filter(data =>
      data.name.toUpperCase().includes(value.toUpperCase())
    );
    if (results.length) {
      this.setState({
        searchText: value,
        searchDataSource: results,
        noSearchResult: true
      });
    } else {
      this.setState({
        searchText: value,
        searchDataSource: sports.all,
        noSearchResult: false
      });
    }
  };

  onSearchClear() {
    this.setState({
      searchText: "",
      searchDataSource: this.props.sports.all,
      noSearchResult: true
    });
  }

  selectItem = data => {
    const { selected } = this.state;
    if (selected.includes(data.id)) {
      this.setState({ selected: selected.filter(id => id != data.id) });
    } else {
      this.setState({ selected: [...selected, data.id] });
    }
  };

  onIssueAddSearch = () => {
    const type = this.props.navigation.getParam("type", () => {});
    this.props.navigation.navigate("IssueAddSearch", {
      title: searchText,
      mode: "sport",
      type: type
    });
  };

  onNext = () => {
    const type = this.props.navigation.getParam("type", () => {});
    this.props.navigation.navigate("TeamSelectIssue", {
      type: type
    });
  };

  renderItem = ({ item, index }) => {
    const { selected } = this.state;
    return (
      <View style={styles.flatItem}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: "100%" }}
          onPress={() => this.selectItem(item)}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.photo}
            resizeMode={"stretch"}
          />
          <View style={styles.itemView}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
          {selected.includes(item.id) ? (
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
    let title = "CHOOSE SPORTS";
    let { searchText, searchDataSource, noSearchResult } = this.state;
    let { sports } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={styles.mainContent}>
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
                  <Text style={styles.completionRate}>10%</Text>
                </View>
              ) : (
                <View style={styles.header2}>
                  <View style={styles.resultsContainer}>
                    <FontAwesome5
                      name={"info-circle"}
                      style={styles.searchresultMark}
                    />
                    <Text style={styles.searchInput}>
                      No Results for {searchText}!
                    </Text>
                  </View>
                  <View style={styles.horizontalLine} />
                  <TouchableOpacity onPress={this.onIssueAddSearch}>
                    <View style={styles.resultsContainer}>
                      <FontAwesome5
                        name={"plus-square"}
                        style={styles.searchresultMark2}
                      />
                      <Text style={styles.searchInput}>Add {searchText}</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.horizontalLine} />
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
                activeOpacity={0.8}
                style={styles.proceedButtonView}
                onPress={this.onNext}
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

const mapStateToProps = state => ({ sports: state.sports });

export default connect(mapStateToProps)(SportSelectIssueScreen);
