import React from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Text, Button } from "@AppComponents";
import { Icons, Images } from "@AppTheme";
import { SafeAreaView, NavigationActions } from "react-navigation";
import styles from "./styles";
import { authActions } from "@AppRedux/actions";
import reactotron from "reactotron-react-native";
import { connect } from "react-redux";

class LimitOrderTutorialScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: null
    };
  }
  componentWillMount() {
    const athleteData = this.props.navigation.getParam("athleteData");
    this.setState({
      detailData: athleteData
    });
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  _handleDontShow = () => {
    const { navigation, dispatch } = this.props;
    dispatch(authActions.setLimitOrderDontShow(true));
    // navigation.navigate("SecurityHome");
  };

  render() {
    const { detailData } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.header]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 0.9 }}
          >
            <Image
              source={detailData.image}
              style={styles.photo}
              resizeMode={"cover"}
            />
            <View style={{ flex: 1, marginLeft: 4 }}>
              <Text style={styles.stake}>{detailData.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.stakeValue}>
                  {detailData.symbol + ": "}
                  <Text style={styles.stake}>{detailData.quantity + " "}</Text>
                  <Text style={styles.stake}>
                    {detailData.currency}
                    {detailData.price}
                  </Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 0.1, alignItems: "flex-end" }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this._handlePressRightMark()}
            >
              <Image source={Icons.rightMenu} style={styles.rightMenu} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          style={{ backgroundColor: "#000", flex: 1, paddingBottom: "50%" }}
        >
          <View style={styles.contents}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <TouchableOpacity onPress={this.goBack} activeOpacity={0.8}>
                <Image source={Icons.arrowLeftWhite} />
              </TouchableOpacity>
              <Text style={styles.textBold}>LIMIT ORDER</Text>
              <View style={{ width: 20 }} />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.textDescription}>
                Set the limit price, or the maximum price at which you're
                willing to buy {detailData.symbol}, Your order will only be
                executed at your limit price or lower.
              </Text>
              <Image
                source={Images.limitOrder}
                style={styles.limitOrderImage}
                resizeMode={"cover"}
              />
              <TouchableOpacity
                style={{ marginTop: 50 }}
                onPress={() => this._handleDontShow()}
                activeOpacity={0.8}
              >
                <Text style={styles.textDescription}>DONT SHOW THIS AGAIN</Text>
              </TouchableOpacity>
              <Button
                style={styles.button}
                textStyle={styles.buttonLabel}
                title="CONTINUE"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(mapStateToProps)(LimitOrderTutorialScreen);
