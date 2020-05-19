import React from "react";
import { View, TextInput, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { PickFilter, Text, SideMenu } from "@AppComponents";
import TeamTrackItem from "../../components/TeamTrackItem";
import styles from "./styles";
import { teamActions } from "@AppRedux/actions";
import { connect } from "react-redux";

class TrackedTeamsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchDataSource: [],
      allData: [],
      searchText: ""
    };
  }

  componentDidMount() {
    if (this.props.teams) {
      this.setState({
        allData: this.props.teams.teams,
        searchDataSource: this.props.teams.teams
      });
    }
    this.props.dispatch(teamActions.getTrackTeams());
  }

  componentDidUpdate(prevProps) {
    const teams = this.props.teams;
    if (!Object.is(prevProps.teams, teams)) {
      tmpData = teams.teams.map((item, index) => {
        item.index = index;
        item.photo = item.photo + ".jpg";
        return item;
      });
      this.setState({ allData: tmpData, searchDataSource: tmpData });
    }
  }

  getSelected = (sort, filter) => {
    // getSelected = selected => {
    // var tmp = [];
    // if (selected === 0) {
    //   //All sports
    //   this.setState({
    //     dataSource: dummyData
    //   });
    //   return;
    // }
    // tmp.push(dummyData[selected]);
    // this.setState({
    //   dataSource: tmp
    // });
  };

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          this.props.navigation.navigate("LockerDetails", {
            detailData: { item }
          })
        }
      >
        <TeamTrackItem key={index} data={item} />
      </TouchableOpacity>
    );
  };

  render() {
    const title = "TRACKED TEAMS";
    let { searchDataSource, searchText } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={styles.bodyContent}>
            <View style={styles.searchBox}>
              <TextInput
                style={styles.searchInput}
                underlineColorAndroid={"transparent"}
              />
              <FontAwesome5 solid name={"search"} style={styles.searchIcon} />
            </View>
            <View style={styles.header}>
              <FontAwesome5
                solid
                name={"chevron-left"}
                style={styles.backIcon}
                onPress={() => this.props.navigation.goBack()}
              />
              <TouchableOpacity onPress={() => this.filterRef.toggle()}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontSize: 14, fontFamily: "Rajdhani-Medium" }}>
                    Filter
                  </Text>
                  <FontAwesome5 name={"sort"} solid style={styles.sortIcon} />
                </View>
              </TouchableOpacity>
            </View>
            <FlatList
              data={searchDataSource}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              // showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          </View>
        </SideMenu>
        <PickFilter
          ref={ref => (this.filterRef = ref)}
          getSelected={this.getSelected}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({ teams: state.teams.trackTeam });

export default connect(mapStateToProps)(TrackedTeamsScreen);
