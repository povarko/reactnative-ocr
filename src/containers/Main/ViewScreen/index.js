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

class ViewScreen extends Component {
  state = {
    checked: false,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    validated: false
  };

  onChange = fieldName => {
    return value => {
      this.setState({ [fieldName]: value });
    };
  };

  onCheck = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  isValidForm = () => {
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      checked
    } = this.state;
    const isValidEmail = validator.isEmail(email);
    const isValidPassword =
      validator.isLength(password, { min: 6 }) && password === confirmPassword;

    if (firstName && lastName && isValidEmail && isValidPassword && checked) {
      return true;
    }
    return false;
  };

  handleSubmit = () => {
    const { loading, dispatch } = this.props;
    if (loading) return;
    if (this.isValidForm()) {
      const { email, password, firstName, lastName } = this.state;
    }
  };

  renderItems = ({ item, index }) => {
    const imageurl = "https://homepages.cae.wisc.edu/~ece533/images/boat.png";

    return (
      <TouchableOpacity
        activityOpacity={0.8}
        // style={styles.userBoard}
        onPress={() => {}}
      >
        {/* <View style={{backgroundColor:"#333", flex: 1, marginBottom: 80}}> */}
        <View style={{ marginLeft: 20, marginRight: 20, height: 60 }}>
          <View style={styles.line} />
          <View style={[styles.row]}>
            {index === 0 && (
              <View style={{ flex: 1 }}>
                <View
                  style={[
                    styles.row,
                    { justifyContent: "space-between", paddingTop: 20 }
                  ]}
                >
                  <View style={styles.row}>
                    <View
                      style={[
                        { marginRight: 10 },
                        styles.statusIcon,
                        { backgroundColor: Colors.statusUnpaid }
                      ]}
                    />
                    <Text style={{ color: "#000", fontSize: 16 }}>
                      {item.content}
                    </Text>
                  </View>

                  <Image source={Icons.goarrow} />
                </View>
              </View>
            )}
            {index === 1 && (
              <View style={{ flex: 1 }}>
                <View
                  style={[
                    styles.row,
                    { justifyContent: "space-between", paddingTop: 20 }
                  ]}
                >
                  <Text style={{ color: "#000", fontSize: 16 }}>
                    {item.content}
                  </Text>

                  <Image source={Icons.goarrow} />
                </View>
              </View>
            )}
            {index > 1 && (
              <View style={{ flex: 1 }}>
                <Text style={{ color: "#555", marginBottom: 1, marginTop: 10 }}>
                  {item.title}
                </Text>
                {/* <View style={styles.row}>
                      <View style={[{color: Colors.forestGreen}, styles.statusIcon]}>                                                            
                      </View>
                      <Text style={{color: "#555", marginLeft: 10, fontSize: 12}}>
                        16/05/2020
                      </Text>
                    </View> */}
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                  <Text style={{ color: "#000", fontSize: 16 }}>
                    {item.content}
                  </Text>
                  {!item.price === false && <Text>{item.price}</Text>}
                </View>
              </View>
            )}
          </View>
        </View>
        {/* </View> */}
      </TouchableOpacity>
    );
  };

  render() {
    const isValidForm = this.isValidForm();
    const { error } = this.props;

    const dummy = [
      { title: "Status", content: "Unpaid" },
      { title: "Category", content: "Assign Category" },
      { title: "Date", content: "09/05/2020" },
      { title: "Receept Number", content: "1838563" },
      { title: "Invoiced by", content: "Eureka Operations Pty Ltd" },
      { title: "Item 1", content: "Unleaded Petrol", price: "$30.00" }
    ];
    const imageurl = "https://homepages.cae.wisc.edu/~ece533/images/boat.png";

    return (
      <ImageBackground style={styles.container}>
        <SafeAreaView>
          <View style={{ display: "flex", height: "100%" }}>
            <View style={styles.overview}>
              <Image
                source={{ uri: imageurl }}
                style={{ width: "100%", height: "100%" }}
                resizeMode={"cover"}
              />
            </View>

            <ScrollView>
              <View style={{ margin: 20 }}>
                <View style={[styles.row]}>
                  <View style={{ flex: 1 }}>
                    <View
                      style={[styles.row, { justifyContent: "space-between" }]}
                    >
                      <View style={styles.row}>
                        <Text style={{ color: "#000", fontSize: 16 }}>
                          Travel National
                        </Text>
                      </View>

                      <View style={styles.row}>
                        <Text
                          style={{
                            color: "#98989b",
                            fontSize: 16,
                            marginRight: 10
                          }}
                        >
                          Unpaid
                        </Text>
                        <View
                          style={[
                            { marginRight: 10 },
                            styles.statusIcon,
                            { backgroundColor: Colors.statusUnpaid }
                          ]}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}
              >
                <View style={styles.line} />
                <View style={[styles.row]}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "#98989b",
                        marginBottom: 1,
                        marginTop: 20
                      }}
                    >
                      Receipt Number
                    </Text>
                    <Text style={{ color: "#000", fontSize: 14, marginTop: 5 }}>
                      00663489634
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "#98989b",
                        marginBottom: 1,
                        marginTop: 10
                      }}
                    >
                      Date
                    </Text>
                    <Text style={{ color: "#000", fontSize: 14, marginTop: 5 }}>
                      08/05/2020
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}
              >
                <View style={styles.line} />
                <View style={[styles.row, { marginTop: 10 }]}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 16,
                        marginTop: 10,
                        fontWeight: "bold"
                      }}
                    >
                      Ereka Operations Pty Ltd
                    </Text>
                    <Text style={{ color: "#000" }}>
                      ABN 781034658344{"\n"}
                      511 Hight Street{"\n"}
                      Tel (03) 90384 1458
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}
              >
                <View style={styles.line} />
                <View style={[styles.row, { marginTop: 20 }]}>
                  <View style={{ flex: 1 }}>
                    <View
                      style={[styles.row, { justifyContent: "space-between" }]}
                    >
                      <Text style={{ color: "#98989b", fontSize: 16 }}>
                        Unleaded Pump 4
                      </Text>
                      <Text style={{ color: "#98989b", fontSize: 16 }}>
                        $30.00
                      </Text>
                    </View>
                    <View
                      style={[styles.row, { justifyContent: "space-between" }]}
                    >
                      <Text style={{ color: "#98989b", fontSize: 16 }}>
                        Sneakers Chocolate
                      </Text>
                      <Text style={{ color: "#98989b", fontSize: 16 }}>
                        $4.90
                      </Text>
                    </View>
                    <View
                      style={[styles.row, { justifyContent: "space-between" }]}
                    >
                      <Text style={{ color: "#98989b", fontSize: 16 }}>
                        Coffee
                      </Text>
                      <Text style={{ color: "#98989b", fontSize: 16 }}>
                        $3.90
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{ marginLeft: 20, marginRight: 20, marginBottom: 10 }}
              >
                <View style={styles.line} />
                <View style={[styles.row, { marginTop: 10 }]}>
                  <View style={{ flex: 1 }}>
                    <View
                      style={[styles.row, { justifyContent: "space-between" }]}
                    >
                      <Text style={{ color: "#3c3c43", fontSize: 16 }}>
                        GP Included
                      </Text>
                      <Text style={{ color: "#000", fontSize: 16 }}>
                        $14.00
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{ marginLeft: 20, marginRight: 20, marginBottom: 20 }}
              >
                <View style={styles.line} />
                <View style={[styles.row, { marginTop: 20 }]}>
                  <View style={{ flex: 1 }}>
                    <View
                      style={[styles.row, { justifyContent: "space-between" }]}
                    >
                      <Text style={{ color: "#000", fontSize: 16 }}>
                        TOTAL AMOUNT
                      </Text>
                      <Text style={{ color: "#000", fontSize: 16 }}>
                        $38.85
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{ marginLeft: 20, marginRight: 20, marginBottom: 10 }}
              >
                <View style={styles.line} />
                <View style={[styles.row, { marginTop: 10 }]}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{ color: "#98989b", fontSize: 16, marginTop: 10 }}
                    >
                      Paid by
                    </Text>
                    <Text
                      style={{ color: "#000", fontSize: 16, marginTop: -15 }}
                    >
                      {"\n"}
                      VISA ***** 6264
                    </Text>
                    <Text style={{ color: "#000" }}>
                      {"\n"}
                      NOTE: Lorem issum dolor sit amet, consectetur adipiscing
                      edit, seed do...
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
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
export default connect(mapStateToProps)(ViewScreen);
