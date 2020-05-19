import React, { Component } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { SideMenu, Button, Text } from "@AppComponents";
import { Images, Icons, Colors } from "@AppTheme";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { NavigationActions, SafeAreaView } from "react-navigation";
import styles from "./styles";
import { Input, Divider } from "react-native-elements";
import { TICKER_DATA } from "../../../../components/performaceView/dummy";

export default class MyStoreScreen extends Component {
  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  handleVisitStore = () => {
    this.props.navigation.navigate("ExpandedAbout", {
      index: 4,
      data: { data: TICKER_DATA[0] }
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title: "MY-STORE" }}>
          <ImageBackground source={Images.background} style={styles.background}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.content}>
              <TouchableOpacity style={styles.inputContainer}>
                <Text style={styles.input}>ADD</Text>
                <FontAwesome5
                  solid
                  name="plus-circle"
                  style={{
                    fontSize: 24,
                    color: Colors.malachite
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputContainer}>
                <Text style={styles.input}>EDIT</Text>
                <FontAwesome5
                  solid
                  name="edit"
                  style={{
                    fontSize: 24,
                    color: Colors.malachite
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputContainer}>
                <Text style={styles.input}>REMOVE</Text>
                <FontAwesome5
                  solid
                  name="trash"
                  style={{
                    fontSize: 24,
                    color: Colors.malachite
                  }}
                />
              </TouchableOpacity>
              <Divider style={styles.divider} />
              <View style={styles.salesContainer}>
                <View style={styles.row}>
                  <Text style={styles.title}>Total Items</Text>
                  <Text style={styles.price}>121</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.title}>Sales Total</Text>
                  <Text style={styles.price}>$ 210,750.57</Text>
                </View>
              </View>

              <Button
                title="VISIT STORE"
                style={styles.button}
                textStyle={styles.buttonText}
                onPress={this.handleVisitStore}
              />
            </ScrollView>
          </ImageBackground>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
