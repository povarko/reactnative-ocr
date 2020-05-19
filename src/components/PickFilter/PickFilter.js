import React, { Component, Fragment } from "react";
import { View, Image, TouchableOpacity, FlatList } from "react-native";
import { Overlay } from "react-native-elements";
import { Text, Button } from "@AppComponents";
import { Icons } from "@AppTheme";
import styles from "./styles";
import initParams from "./FilterDatas";

export default class PickFilter extends Component {
  state = {
    filterData: [],
    sortData: [],
    selectedIndex: 0,
    isVisible: false
  };

  componentDidMount() {
    let _sortData = initParams.sort;
    let _filterData = initParams.filter;
    this.setState({
      filterData: _filterData,
      sortData: _sortData
    });
  }

  toggle = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  onClose = () => {
    const { selectedIndex, filterData, sortData } = this.state;

    tmpData = filterData.map(item => {
      return item.isSelected ? 1 : 0;
    });
    this.props.getSelected(sortData[selectedIndex].value, tmpData);
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  selectcFilterItem = data => {
    const index = this.state.filterData.findIndex(item => data.id === item.id);
    this.state.filterData[index].isSelected = !data.isSelected;
    this.setState({
      filterData: this.state.filterData
    });
  };

  selectSortItem = index => {
    this.setState({
      selectedIndex: index
    });
  };

  renderItemSort = ({ item, index }) => {
    const { selectedIndex } = this.state;
    return (
      <View style={{ flex: 1, alignItems: "center", margin: 10 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: "100%" }}
          onPress={() => this.selectSortItem(index)}
        >
          <View style={{ flexDirection: "row" }}>
            {index === selectedIndex ? (
              <Image source={Icons.checkGreenIcon} style={styles.itemCheck} />
            ) : (
              <Image source={Icons.uncheckIcon} style={styles.itemCheck} />
            )}
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  renderItemFilter = ({ item, index }) => {
    const { selectedIndex } = this.state;
    return (
      <View style={{ flex: 1, alignItems: "center", margin: 10 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: "100%" }}
          onPress={() => this.selectcFilterItem(item)}
        >
          <View style={{ flexDirection: "row" }}>
            {item.isSelected ? (
              <Image source={Icons.checkGreenIcon} style={styles.itemCheck} />
            ) : (
              <Image source={Icons.uncheckIcon} style={styles.itemCheck} />
            )}
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <Overlay overlayStyle={styles.container} isVisible={this.state.isVisible}>
        <Fragment>
          <View
            style={{
              backgroundColor: "transparent",
              width: "100%",
              height: 30
            }}
          >
            <View style={{ alignItems: "flex-end", marginRight: 5 }}>
              <TouchableOpacity onPress={() => this.toggle()}>
                <Image source={Icons.cancel} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content}>
            <Image source={Icons.filtersIcon} style={styles.circleIcon} />
            <Text style={styles.titleLabel}>CHOOSE FILTERS BELOW</Text>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <FlatList
                data={this.state.filterData}
                renderItem={this.renderItemFilter}
                keyExtractor={(item, index) => index.toString()}
                style={styles.list}
                extraData={this.state}
                scrollEnabled={false}
              />
              <FlatList
                data={this.state.sortData}
                renderItem={this.renderItemSort}
                keyExtractor={(item, index) => index.toString()}
                style={styles.list}
                extraData={this.state}
                scrollEnabled={false}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Button
                onPress={this.onClose}
                title="Go!"
                style={styles.button}
                textStyle={styles.buttonText}
              />
            </View>
          </View>
        </Fragment>
      </Overlay>
    );
  }
}
