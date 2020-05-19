import React from "react";
import { View, TextInput, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { PickFilter, Text, SideMenu, WarningDialog } from "@AppComponents";
import { Colors } from "@AppTheme";
import AthleteTrackItem from "../../components/AthleteTrackItem";
import styles from "./styles";
import { athletesActions } from "@AppRedux/actions";
import { connect } from "react-redux";

class TrackedAthletesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchDataSource: [],
      allData: [],
      searchText: ""
    };
  }

  componentDidMount() {
    if (this.props.athletes) {
      this.setState({
        allData: this.props.athletes.athletes,
        searchDataSource: this.props.athletes.athletes
      });
    }
    this.props.dispatch(athletesActions.getTrackAthletes());
  }

  componentDidUpdate(prevProps) {
    const athletes = this.props.athletes;
    if (!Object.is(prevProps.athletes, athletes)) {
      tmpData = athletes.athletes.map((item, index) => {
        item.index = index;
        item.photo = item.photo + ".jpg";
        return item;
      });
      this.setState({ allData: tmpData, searchDataSource: tmpData });
    }
  }

  getSelected = (sort, filter) => {
    // getSelected = selected => {
    //   var tmp = [];
    //   if (selected === 0) {
    //     //All sports
    //     this.setState({
    //       dataSource: TICKER_DATA
    //     });
    //     return;
    //   }
    //   tmp.push(TICKER_DATA[selected]);
    //   this.setState({
    //     dataSource: tmp
    //   });
  };

  handleUntrack = name => {
    this.dialog.toggle(
      "YOU ARE ABOUT TO REMOVE AN ATHLETE!",
      <Text style={styles.descriptionLabel}>
        Are you sure you want to remove{" "}
        <Text style={[styles.descriptionLabel, { color: Colors.malachite }]}>
          {name}
        </Text>{" "}
        from your tracked athletes?
      </Text>
    );
  };

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          this.props.navigation.navigate("LockerDetails", {
            detailData: { item }
          });
        }}
      >
        <AthleteTrackItem
          key={index}
          data={item}
          untrack={() => this.handleUntrack(item.name)}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const title = "TRACKED ATHLETES";
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
            <WarningDialog ref={ref => (this.dialog = ref)} />
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

const mapStateToProps = state => ({ athletes: state.athletes.trackAthletes });

export default connect(mapStateToProps)(TrackedAthletesScreen);
