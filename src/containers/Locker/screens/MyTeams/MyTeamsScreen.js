import React from "react";
import { View, TextInput, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { Text, SideMenu, PickFilter } from "@AppComponents";
import TeamItem from "../../components/TeamItem";
import styles from "./styles";
import dummyData from "./dummy";

class MyTeamsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: dummyData
    });
  }

  getSelected = selected => {
    var tmp = [];
    if (selected === 0) {
      //All sports
      this.setState({
        dataSource: dummyData
      });
      return;
    }
    tmp.push(dummyData[selected]);
    this.setState({
      dataSource: tmp
    });
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
        <TeamItem key={index} data={item} />
      </TouchableOpacity>
    );
  };

  render() {
    const title = "YOUR TEAMS";
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
              <Entypo
                name="chevron-thin-left"
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
              data={this.state.dataSource}
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

export default MyTeamsScreen;
