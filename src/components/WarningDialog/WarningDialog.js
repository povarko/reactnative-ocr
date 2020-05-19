import React, { PureComponent, Fragment, useState } from "react";
import { View, Image, TouchableOpacity, FlatList } from "react-native";
import { Avatar, Overlay } from "react-native-elements";
import { Text, Button } from "@AppComponents";
import { Images, Icons } from "@AppTheme";
import styles from "./styles";

export default class WarningDialog extends PureComponent {
  state = {
    isVisible: false,
    title: "",
    description: ""
  };

  toggle = (title, description) => {
    this.setState({
      isVisible: true,
      title: title,
      description: description
    });
  };

  onClose = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  onRemove = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
    this.props.onRemove();
  };

  render() {
    const { title, description, isVisible } = this.state;
    return (
      <Overlay overlayStyle={styles.container} isVisible={isVisible}>
        <Fragment>
          <View
            style={{
              backgroundColor: "transparent",
              width: "100%",
              height: 30
            }}
          >
            <View style={{ alignItems: "flex-end", marginRight: 5 }}>
              <TouchableOpacity onPress={this.onClose}>
                <Image source={Icons.cancel} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.content}>
            <Image source={Icons.warningIcon} style={styles.circleIcon} />

            <Text style={styles.titleLabel}>WARNING</Text>
            <Text style={styles.bodyTextLabel}>{title}</Text>
            {typeof description === "string" ? (
              <Text style={styles.descriptionLabel}>{description}</Text>
            ) : (
              description
            )}

            <View
              style={{
                height: 40,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <Button
                onPress={this.onClose}
                title="REMOVE"
                style={styles.removeButton}
                textStyle={styles.buttonText}
              />
              <Button
                onPress={this.onClose}
                title="CANCEL"
                style={styles.cancelButton}
                textStyle={styles.buttonText}
              />
            </View>
          </View>
        </Fragment>
      </Overlay>
    );
  }
}
