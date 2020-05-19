import React, { Component, Fragment } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Overlay } from "react-native-elements";
import { Text, Button, Input } from "@AppComponents";
import { Icons, Images, Colors } from "@AppTheme";
import styles from "./styles";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default class AddLink extends Component {
  state = {
    isVisible: false
  };

  toggle = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  onClose = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  handleSave = () => {
    this.props.addLink();
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <Overlay overlayStyle={styles.container} isVisible={this.state.isVisible}>
        <Fragment>
          <View style={styles.content}>
            <Text style={styles.titleLabel}>ADD LINK</Text>
            <Text style={[styles.itemText, { marginTop: 10 }]}>
              Paste URL link to below
            </Text>
          </View>
          <View style={styles.top}>
            <View style={styles.circleIcon}>
              <FontAwesome5
                solid
                name="link"
                style={{
                  fontSize: 26,
                  color: "#FFF"
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Input
              placeholder="URL link here"
              placeholderTextColor="#FFF"
              labelStyle={styles.label}
              inputStyle={styles.inputSmall}
              style={styles.inputItem2}
            />
          </View>
          <View style={styles.inputItem3}>
            <View style={{ flexDirection: "row" }}>
              <Image source={Images.team4} style={styles.teamImage} />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.previewText}>LINK PREVIEW</Text>
                <Text
                  style={{
                    width: wp("45%"),
                    fontSize: 12,
                    fontFamily: "Rajdhani"
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Button
              onPress={this.onClose}
              title="REMOVE"
              style={styles.removeButton}
              textStyle={styles.buttonText}
            />
            <Button
              onPress={this.handleSave}
              title="SAVE"
              style={styles.button}
              textStyle={styles.buttonText}
            />
          </View>
          <TouchableOpacity onPress={this.onClose} style={styles.closeIcon}>
            <Image source={Icons.cancel} />
          </TouchableOpacity>
        </Fragment>
      </Overlay>
    );
  }
}
