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
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DatePicker from "react-native-datepicker";

class FilterScreen extends Component {
  state = {
    current: "all",
    datefrom: "2020-1-1",
    dateto: new Date()
  };

  renderItems = ({ item, index }) => {
    return (
      <TouchableOpacity
        activityOpacity={0.8}
        // style={styles.userBoard}
        onPress={() => {
          this.setState({
            current: item.key
          });
        }}
      >
        <View style={{ marginLeft: 20, marginRight: 20, height: 50 }}>
          {this.state.current === item.key ? (
            <View
              style={[styles.row, { justifyContent: "space-between", flex: 1 }]}
            >
              <View style={styles.row}>
                <Text style={{ color: "#000", fontSize: 16 }}>{item.text}</Text>
              </View>
              <FontAwesome5
                regular
                name="check-circle"
                style={{
                  fontSize: 20,
                  color: item.color
                }}
              />
            </View>
          ) : (
            <View
              style={[styles.row, { justifyContent: "space-between", flex: 1 }]}
            >
              <View style={styles.row}>
                <Text style={{ color: "#b8b8b8", fontSize: 16 }}>
                  {item.text}
                </Text>
              </View>
              <View
                style={[
                  { marginRight: 1 },
                  styles.statusEmptyIcon,
                  { borderColor: item.color }
                ]}
              />
            </View>
          )}

          <View style={styles.line} />
        </View>
      </TouchableOpacity>
    );
  };

  handleSubmit = () => {};

  render() {
    const dummy = [
      { key: "all", text: "All entries", color: Colors.statusAll },
      { key: "paid", text: "Paid", color: Colors.statusPaid },
      { key: "unpaid", text: "Unpaid", color: Colors.statusUnpaid },
      { key: "incomplete", text: "Incomplete", color: Colors.statusIncomplete }
    ];

    return (
      <ImageBackground style={styles.container}>
        <SafeAreaView>
          <View>
            {/* <ScrollView> */}

            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
                marginTop: 30
              }}
            >
              <View style={[styles.row, { marginTop: 10, marginBottom: 20 }]}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ color: "#98989b", fontSize: 16, marginTop: 10 }}
                  >
                    Filter by entry
                  </Text>
                </View>
              </View>
              <View style={styles.line} />
            </View>

            <FlatList
              data={dummy}
              renderItem={this.renderItems}
              keyExtractor={(item, index) => index.toString()}
            />

            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,
                marginTop: 30
              }}
            >
              <View style={[styles.row, { marginTop: 10 }]}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ color: "#98989b", fontSize: 16, marginTop: 10 }}
                  >
                    Filter by entry
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
              <View style={styles.line} />
              <View style={[styles.row]}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ color: "#98989b", marginBottom: 1, marginTop: 20 }}
                  >
                    From
                  </Text>
                  {/* <Text style={{color: "#000", fontSize: 14, marginTop: 5}}>
                            00663489634
                          </Text>   */}
                  <DatePicker
                    style={{ width: 200 }}
                    date={this.state.datefrom}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2001-05-01"
                    maxDate="2030-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 0,
                        marginRight: 40
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={date => {
                      this.setState({ datefrom: date });
                    }}
                  />
                  {/* <View style={[styles.line, {width: '95%'}]} />                             */}
                </View>
                <View style={{ flex: 1, paddingLeft: 30 }}>
                  <Text
                    style={{ color: "#98989b", marginBottom: 1, marginTop: 20 }}
                  >
                    To
                  </Text>
                  <DatePicker
                    style={{ width: 200 }}
                    date={this.state.dateto}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2001-05-01"
                    maxDate="2030-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 0,
                        marginRight: 40
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={date => {
                      this.setState({ dateto: date });
                    }}
                  />
                  {/* <Text style={{color: "#000", fontSize: 14, marginTop: 5}}>
                            08/05/2020
                          </Text>      
                          <View style={[styles.line, {width: '100%'}]} />                             */}
                </View>
              </View>
            </View>

            <Button
              title="Show"
              style={styles.button}
              textStyle={styles.buttonTitle}
              onPress={this.handleSubmit}
            />

            {/* </ScrollView> */}
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
export default connect(mapStateToProps)(FilterScreen);
