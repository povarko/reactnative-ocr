import React from "react";
import { View, TextInput, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, SideMenu } from "@AppComponents";
import ScoutAthleteTrackItem from "../../components/ScoutAthleteTrackItem";
import { TICKER_DATA } from "../../../../components/performaceView/dummy";
import { Colors } from "@AppTheme";
import WarningDialog from "../../../../components/WarningDialog/WarningDialog";
import styles from "./styles";

class ScoutTrackAthletesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      warning: false,
      selectedIndex: -1
    };
  }
  componentDidMount() {
    tmpData = TICKER_DATA.map(item => {
      item.isSelect = false;
      return item;
    });
    this.setState({
      dataSource: tmpData
    });
  }

  removeConfirmed = () => {
    //remove selectedIndex
    const { selectedIndex } = this.state;
    var tmparray = [...this.state.dataSource];

    if (selectedIndex < 0 || tmparray.size <= selectedIndex) {
      return;
    }
    tmparray.splice(selectedIndex, 1);
    this.setState({
      dataSource: tmparray
    });
  };

  removeTrack = index => {
    this.setState({ warning: true });
    const title = "YOU ARE ABOUT TO REMOVE AN ATHLETE!";

    const description = (
      <Text style={styles.descriptionLabel}>
        Are you sure you want to remove{" "}
        <Text style={{ color: Colors.malachite }}>Christiano Ronaldo</Text> from
        your tracked athletes?"
      </Text>
    );

    this.warningRef.toggle(title, description);
    this.setState({ selectedIndex: index });
  };
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        // disabled={true}
        onPress={() =>
          this.props.navigation.navigate("LockerDetails", {
            detailData: { item }
          })
        }
      >
        <ScoutAthleteTrackItem
          key={index}
          data={item}
          onPress={() => this.removeTrack(index)}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const title = "TRACK";
    const { dataSource } = this.state;
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 14, fontFamily: "Rajdhani-Medium" }}>
                  Filter
                </Text>
                <FontAwesome5 name={"sort"} solid style={styles.sortIcon} />
              </View>
            </View>
            <FlatList
              // data={dataSource}
              data={TICKER_DATA}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              // showsVerticalScrollIndicator={false}
              style={styles.list}
            />
          </View>
        </SideMenu>
        <WarningDialog
          ref={ref => (this.warningRef = ref)}
          onRemove={this.removeConfirmed}
        />
      </SafeAreaView>
    );
  }
}

ScoutTrackAthletesScreen.propTypes = {};
export default ScoutTrackAthletesScreen;
