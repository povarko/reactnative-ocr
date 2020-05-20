import React, { Component } from "react";
import {
  View,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Title, Button, ImageButton, Input, Text } from "@AppComponents";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Images, Colors, Icons } from "@AppTheme";
import { SafeAreaView } from "react-navigation";
import { CheckBox } from "react-native-elements";
import validator from "validator";
import { authActions } from "@AppRedux/actions";
import { connect } from "react-redux";
import styles from "./styles";

class CategoryScreen extends Component {
  state = {
    newcategory: "",
    current: "Unpaid"
  };

  writeCategory = value => {
    this.setState({ newcategory: value });
  };

  renderItems = ({ item, index }) => {
    return (
      <TouchableOpacity
        activityOpacity={0.8}
        // style={styles.userBoard}
        onPress={() => {
          this.setState({ current: item });
        }}
      >
        {/* <View style={{backgroundColor:"#333", flex: 1, marginBottom: 80}}> */}
        <View style={{ marginLeft: 20, marginRight: 20, height: 50 }}>
          <View
            style={[styles.row, { justifyContent: "space-between", flex: 1 }]}
          >
            <View style={styles.row}>
              <Text style={{ color: "#000", fontSize: 16 }}>{item}</Text>
            </View>
            {this.state.current === item ? (
              <View
                style={[
                  { marginRight: 10 },
                  styles.statusIcon,
                  { backgroundColor: Colors.statusUnpaid }
                ]}
              />
            ) : (
              <View style={[{ marginRight: 10 }, styles.statusEmptyIcon]} />
            )}
          </View>
          <View style={styles.line} />
        </View>
        {/* </View> */}
      </TouchableOpacity>
    );
  };

  render() {
    const { error } = this.props;

    const dummy = [
      "Unpaid",
      "Assign Category",
      "09/05/2020",
      "1838563",
      "Eureka Operations Pty Ltd",
      "Unleaded Petrol"
    ];
    const imageurl = "https://homepages.cae.wisc.edu/~ece533/images/boat.png";

    return (
      <ImageBackground style={styles.container}>
        <SafeAreaView>
          <View style={{ display: "flex", height: "100%" }}>
            <View style={styles.overview}>
              <Input
                placeholder="Add new..."
                onChangeText={this.writeCategory}
                style={styles.addnew}
                inputStyle={{ paddingRight: 20 }}
                value={this.state.newcategory}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontSize: 34,
                  width: 30,
                  position: "absolute",
                  right: 20
                }}
                // onPress={() => this.goToProcess()}
              >
                <Image source={Icons.plus} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={dummy}
              renderItem={this.renderItems}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.registerError
});
export default connect(mapStateToProps)(CategoryScreen);
