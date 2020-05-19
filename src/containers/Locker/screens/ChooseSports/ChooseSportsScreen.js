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
import { SPORTS } from "../../../Home/components/VirtualShareCertificates/dummy";

class ChooseSportsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      location: null
    };
  }

  componentDidMount() {
    tmpData = SPORTS.map((item, index) => {
      item.isSelect = false;
      item.id = index;
      return item;
    });
    this.setState({
      dataSource: tmpData
    });
    // setTimeout(() => {
    //   this.locRef.toggle();
    // }, 1000);
  }

  getSelected = selected => {
    tmpData = SPORTS.map((item, index) => {
      if (index === selected) {
        item.isSelect = true;
      } else {
        item.isSelect = false;
      }
      item.id = index;
      return item;
    });
    this.setState({
      dataSource: tmpData
    });
  };

  getLocation = location => {
    this.setState({ location });
  };

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
      <View style={styles.flatItem}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: "100%" }}
          onPress={() => this.selectcItem(item)}
        >
          <Image
            source={item.image}
            style={styles.photo}
            resizeMode={"stretch"}
          />
          <View style={styles.itemView}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
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
    const title = "CHOOSE SPORTS";
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <Fragment>
            <View style={styles.bodyContent}>
              <View style={styles.searchBox}>
                <TextInput
                  style={styles.searchInput}
                  underlineColorAndroid={"transparent"}
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
                data={this.state.dataSource}
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
                onPress={() => this.props.navigation.navigate("ChooseTeam")}
              >
                <Text style={styles.proceedText}>PROCEED</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        </SideMenu>
        <PickLocation
          ref={ref => (this.locRef = ref)}
          getLocation={this.getLocation}
          placeholder="Enter your preferred home location"
        />
        <PickFilter
          ref={ref => (this.filterRef = ref)}
          getSelected={this.getSelected}
        />
      </SafeAreaView>
    );
  }
}

export default ChooseSportsScreen;
