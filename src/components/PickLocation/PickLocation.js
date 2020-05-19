import React, { Component, Fragment, useState, useRef } from "react";
import { View, Image, TouchableOpacity, Keyboard } from "react-native";
import { Icon, Overlay } from "react-native-elements";
import { Text, Button } from "@AppComponents";
import { Images, Icons, Fonts } from "@AppTheme";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import reactotron from "reactotron-react-native";

export default class PickLocation extends Component {
  static propTypes = {
    getLocation: PropTypes.func,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    placeholder: "Search",
    getLocation: loc => {}
  };

  state = {
    isVisible: false,
    value: "",
    location: "Los Angeles, CA - USA"
  };

  toggle = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  handleGo = () => {
    this.props.getLocation(this.state.location);
    this.setState({ isVisible: false });
  };

  handleSelect = (data, details) => {
    Keyboard.dismiss();
    const location = details.formatted_address;
    this.props.getLocation(details.formatted_address);
    this.setState({ location, value: location });
  };

  renderAutocomplete = () => {
    const { value } = this.state;

    const renderRow = row => {
      //if (!value) return null;
      return (
        <View
          style={[styles.row, { justifyContent: "space-between", flex: 1 }]}
        >
          <View style={[styles.row, { flex: 0.8 }]}>
            <View style={styles.smallCircle}>
              <Icon
                name="map-marker"
                type="font-awesome"
                size={10}
                color="#FFF"
              />
            </View>

            <Text
              onPress={() =>
                this.handleSelect(null, { formatted_address: row.description })
              }
              style={styles.description}
            >
              {row.description}
            </Text>
          </View>

          <View style={{ flex: 0.2, marginRight: 10 }}>
            <Image source={Icons.leftSlantArrow} resizeMode="contain" />
          </View>
        </View>
      );
    };

    const renderClearButton = () => {
      return value ? (
        <Ionicons
          onPress={() => {
            //this.inputRef.clear();
            this.setState({ value: "" });
          }}
          name="md-close"
          style={styles.clearButton}
          size={16}
        />
      ) : null;
    };

    return (
      <GooglePlacesAutocomplete
        placeholder={this.props.placeholder}
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        keyboardAppearance={"light"} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        renderDescription={row => row.description} // custom description render
        renderRow={renderRow}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          this.handleSelect(data, details);
        }}
        getDefaultValue={() => ""}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: "AIzaSyCjV5Uy_YMm-r8alqZ5_uWRiOi4lOGrDns",
          language: "en", // language of the results
          types: "(cities)" // default: 'geocode'
        }}
        styles={{
          container: {
            backgroundColor: "transparent",
            marginLeft: 10,
            marginRight: 10
          },
          textInputContainer: {
            width: "100%",
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#FFFFFF",
            borderRadius: 20,
            height: 40
          },
          textInput: {
            color: "#FFFFFF",
            backgroundColor: "transparent"
          },
          description: {
            color: "#FFFFFF",
            fontSize: 14,
            fontFamily: Fonts.type.rajdhaniMedium
          }
        }}
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: "distance"
          // type: "food"
        }}
        GooglePlacesDetailsQuery={{
          // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
          fields: "vicinity"
        }}
        filterReverseGeocodingByTypes={["locality", "political"]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        enablePoweredByContainer={false}
        underlineColorAndroid="transparent"
        textInputProps={{
          onChangeText: text => this.setState({ value: text }),
          ref: ref => (this.inputRef = ref),
          clearButtonMode: "never",
          value: value
        }}
        renderRightButton={renderClearButton}
        children={
          <View style={{ alignItems: "center" }}>
            {value ? null : <Image source={Images.maps} style={styles.maps} />}
            <Button
              onPress={this.handleGo}
              title="Go!"
              style={styles.button}
              textStyle={styles.buttonText}
            />
          </View>
        }
      />
    );
  };

  render() {
    const { value } = this.state;

    return (
      <Overlay
        overlayStyle={[
          styles.container
          //value && { backgroundColor: "#0D0D0D" }
        ]}
        isVisible={this.state.isVisible}
      >
        <Fragment>
          <View style={styles.header}>
            <View style={{ alignItems: "flex-end", marginRight: 15 }}>
              <TouchableOpacity onPress={() => this.toggle()}>
                <Image source={Icons.cancel} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.content, value && { opacity: 0.95 }]}>
            <Image
              source={Icons.locationIcon}
              resizeMode="contain"
              style={styles.circleIcon}
            />
            <Text style={styles.locationLabel}>
              CURRENT:{" "}
              <Text style={styles.location}>{this.state.location}</Text>
            </Text>
            <Text style={styles.title}>NEW LOCATION</Text>
            {this.renderAutocomplete()}
          </View>
        </Fragment>
      </Overlay>
    );
  }
}
