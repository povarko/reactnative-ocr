import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { SideMenu } from "@AppComponents";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import { Icons, Colors } from "@AppTheme";

const data1 = [
  "Debit/Credit Card",
  "Link Bank Account",
  "Electronic Funds Transfer",
  ""
];
const data2 = ["Link Bank Account", "Electronic Funds Transfer", ""];

class PaymentMethodScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isSelect: -1
    };
  }

  componentDidMount() {
    const type = this.props.navigation.getParam("type");
    const data = type ? data1 : data2;
    this.setState({
      dataSource: data
    });
  }
  goBack = () => {
    this.props.navigation.goBack();
  };

  goToAdvanced = () => {
    // this.props.navigation.navigate("ExchangeAdvanced");
  };

  selectcItem = index => {
    this.setState({
      isSelect: index
    });
  };

  renderItem = ({ item, index }) => {
    const isSelect = this.state.isSelect === index;
    const isAdd = this.state.dataSource.length - 1 === index;
    return (
      <View style={{ alignItems: "center", margin: 10 }}>
        {isAdd ? (
          <TouchableOpacity activeOpacity={0.8} style={{ width: "100%" }}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5
                solid
                name={"plus-square"}
                style={{
                  fontSize: 22,
                  color: Colors.malachite,
                  marginLeft: 5,
                  width: 20,
                  height: 20
                }}
              />
              <Text style={styles.itemText}>Add New</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ width: "100%" }}
            onPress={() => this.selectcItem(index)}
          >
            <View style={{ flexDirection: "row" }}>
              {isSelect ? (
                <Image source={Icons.checkGreenIcon} style={styles.itemCheck} />
              ) : (
                <Image source={Icons.uncheckIcon} style={styles.itemCheck} />
              )}
              <Text style={styles.itemText}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  renderAddItem() {
    return (
      <View style={{ alignItems: "center", margin: 10 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ width: "100%", backgroundColor: "#FFF" }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.itemText}>"Add New"</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const type = this.props.navigation.getParam("type");
    const subTitle = type ? "PAYMENT METHOD" : "WITHDRAWAL METHOD";
    const buttonTitle = type ? "MAKE PAYMENT" : "MAKE WITHDRAWAL";
    const title = "BUY & SELL";

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={{ flex: 1, backgroundColor: "#000" }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <Text style={styles.subTitle}>{subTitle}</Text>
              <FlatList
                data={this.state.dataSource}
                renderItem={this.renderItem}
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
                style={styles.list}
                extraData={this.state}
                // scrollEnabled={false}
              />
              <TouchableOpacity
                style={styles.buttonView}
                onPress={this.goToAdvanced}
              >
                <Text style={styles.buttonText}>{buttonTitle}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default PaymentMethodScreen;
