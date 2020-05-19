import React, { Fragment } from "react";
import {
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, SideMenu, PickLocation, PickFilter } from "@AppComponents";
import styles from "./styles";
import { teamActions } from "@AppRedux/actions";
import { connect } from "react-redux";

class ChooseTeamScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchDataSource: [],
      allData: [],
      searchText: "",
      location: null
    };
  }

  componentDidMount() {
    this.setState({
      allData: this.props.teams.searchTeam,
      searchDataSource: this.props.teams.searchTeam
    });
    this.getInitTeams();
  }

  componentDidUpdate(prevProps) {
    const teams = this.props.teams.searchTeam;
    if (!Object.is(prevProps.teams.searchTeam, teams)) {
      tmpData = teams.map((item, index) => {
        item.isSelect = false;
        item.index = index;
        item.photo = item.photo + ".jpg";
        return item;
      });
      this.setState({ allData: tmpData, searchDataSource: tmpData });
    }
  }

  onSearchChange = value => {
    const { allData } = this.state;
    const results = allData.filter(data =>
      data.name.toUpperCase().includes(value.toUpperCase())
    );
    if (results.length) {
      this.setState({
        searchText: value,
        searchDataSource: results
      });
    } else {
      this.setState({
        searchText: value,
        searchDataSource: allData
      });
    }
  };
  getInitTeams = () => {
    //params
    this.props.dispatch(
      teamActions.searchTeams(
        1,
        1,
        1,
        "top_100",
        "4b6205dd-b7e6-4371-b24c-0dc4e0417500"
      )
    );
  };

  getSelected = (sort, filter) => {
    this.props.dispatch(
      teamActions.searchTeams(
        ...filter,
        sort,
        "4b6205dd-b7e6-4371-b24c-0dc4e0417500"
      )
    );
  };

  selectcItem = data => {
    data.isSelect = !data.isSelect;
    const index = this.state.searchDataSource.findIndex(
      item => data.index === item.index
    );
    this.state.searchDataSource[index] = data;
    this.setState({
      searchDataSource: this.state.searchDataSource
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
            source={{ uri: item.photo }}
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

  getLocation = location => {
    this.setState({ location });
  };

  render() {
    const title = "CHOOSE TEAMS";
    let { searchDataSource, searchText } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <Fragment>
            <View style={styles.bodyContent}>
              <View style={styles.searchBox}>
                <TextInput
                  value={searchText}
                  style={styles.searchInput}
                  underlineColorAndroid={"transparent"}
                  onChangeText={this.onSearchChange}
                />
                <FontAwesome5 solid name={"search"} style={styles.searchIcon} />
              </View>
              <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome5
                    solid
                    name={"map-marker-alt"}
                    style={styles.mapmarker}
                    // onPress={() => this.props.navigation.goBack()}
                  />
                  <Text style={{ marginLeft: 10 }}>
                    {this.state.location || "Los Angeles, CA"}
                  </Text>

                  <TouchableOpacity onPress={() => this.locRef.toggle()}>
                    <Text style={styles.changeLocation}>(Change)</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 14, fontFamily: "Rajdhani-Medium" }}>
                    Filter
                  </Text>
                  <TouchableOpacity onPress={() => this.filterRef.toggle()}>
                    <FontAwesome5 name={"sort"} solid style={styles.sortIcon} />
                  </TouchableOpacity>
                </View>
              </View>
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
                onPress={() => this.props.navigation.navigate("ChooseAthletes")}
              >
                <Text style={styles.proceedText}>PROCEED</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        </SideMenu>
        <PickLocation
          ref={ref => (this.locRef = ref)}
          getLocation={this.getLocation}
        />
        <PickFilter
          ref={ref => (this.filterRef = ref)}
          getSelected={this.getSelected}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({ teams: state.teams });

export default connect(mapStateToProps)(ChooseTeamScreen);
