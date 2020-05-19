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
import { athletesActions } from "@AppRedux/actions";
import { connect } from "react-redux";
import { ATHLETES } from "../../../Home/components/VirtualShareCertificates/dummy";
import reactotron from "reactotron-react-native";

class ChooseAthletesScreen extends React.Component {
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
      allData: this.props.athletes.searchAthletes,
      searchDataSource: this.props.athletes.searchAthletes
    });
    this.getInitAthletes();
  }

  componentDidUpdate(prevProps) {
    const athletes = this.props.athletes.searchAthletes;
    if (!Object.is(prevProps.athletes.searchAthletes, athletes)) {
      tmpData = athletes.map((item, index) => {
        item.isSelect = false;
        item.index = index;
        item.photo = item.photo + ".jpg";
        return item;
      });
      this.setState({ allData: tmpData, searchDataSource: tmpData });
    }
  }

  getInitAthletes = () => {
    //params
    this.props.dispatch(
      athletesActions.searchAthletes(
        1,
        1,
        1,
        "top_100",
        "4b6205dd-b7e6-4371-b24c-0dc4e0417500"
      )
    );
  };

  onSearchChange = value => {
    const { allData } = this.state;
    const results = allData.filter(
      data =>
        (data.name !== null &&
          data.name.toUpperCase().includes(value.toUpperCase())) ||
        (data.sport !== null &&
          data.sport.toUpperCase().includes(value.toUpperCase()))
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

  getSelected = (sort, filter) => {
    this.props.dispatch(
      athletesActions.searchAthletes(
        ...filter,
        sort,
        "4b6205dd-b7e6-4371-b24c-0dc4e0417500"
      )
    );
  };

  selectcItem = data => {
    data.isSelect = !data.isSelect;
    const index = this.state.searchDataSource.findIndex(
      item => data.id === item.id
    );
    this.state.searchDataSource[index] = data;
    this.setState({
      searchDataSource: this.state.searchDataSource
    });
  };

  goToProcess() {
    //props.navigation.navigate("BuildingFeed")
    let selectedResult = this.state.allData.filter(data => data.isSelect);
    if (selectedResult.length === 0) {
    } else if (selectedResult.length === 1) {
      let _id = selectedResult[0].id;
      this.props.dispatch(athletesActions.postTrackAthletes(_id));
    } else {
      let _ids = selectedResult.map(item => {
        return item.id;
      });
      reactotron.log(JSON.stringify(_ids));

      this.props.dispatch(
        athletesActions.postTrackMultiAthletes(JSON.stringify(_ids))
      );
    }
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={{ alignItems: "center", margin: 5 }}>
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
          <View style={styles.itemView}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemSport}>{item.sport}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  getLocation = location => {
    this.setState({ location });
  };

  render() {
    const title = "CHOOSE ATHLETES";
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
                numColumns={3}
                columnWrapperStyle={{ marginTop: 10 }}
                keyExtractor={(item, index) => index.toString()}
                style={styles.list}
                extraData={this.state}
              />
            </View>
            <View style={styles.processdView}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.proceedButtonView}
                onPress={() => this.goToProcess()}
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

const mapStateToProps = state => ({ athletes: state.athletes });

export default connect(mapStateToProps)(ChooseAthletesScreen);
