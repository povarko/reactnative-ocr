import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Title, Button, ImageButton, Input, Text } from "@AppComponents";
import { Images, Colors, Icons } from "@AppTheme";
import { connect } from "react-redux";
import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { navigationService, NotificationService } from "@AppServices";

import { appConfig } from "../../../configs/app.config";

class UploadScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Your Receipts",
      // headerTitleStyle: {
      //   fontWeight: 'normal',
      // },
      // headerRight: (
      //   <TouchableOpacity
      //     activityOpacity={0.8}
      //     // style={styles.userBoard}
      //     onPress={() => navigation.push("ExportScreen")}
      //     style={{ paddingRight: 20 }}
      //   >
      //     <Image source={Icons.threedot} />
      //   </TouchableOpacity>
      // ),
      headerLeft: (
        <TouchableOpacity
          activityOpacity={0.8}
          // style={styles.userBoard}
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 20 }}
        >
          <Image source={Icons.arrowleft} />
        </TouchableOpacity>
      )
    };
  };

  state = {
    uploadProgress: 0,
    uploadText: "Uploading...",
    response: ""
  };

  componentDidMount() {
    //upload image
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    formData.append("image", {
      uri: this.props.uri,
      type: "image/jpeg",
      name: "photo"
    });

    xhr.upload.addEventListener("progress", this.handleProgress);
    xhr.addEventListener("load", () => {
      // alert(xhr.response);
      this.setState({ uploadProgress: 100, response: xhr.response });

      const resp = JSON.parse(xhr.response);
      if (resp.status === 200) {
        if (!resp.receipt === false && resp.receipt !== null) {
          // navigationService.navigate("EditScreen", {
          //   receipt: xhr.response.receipt
          // });
        }
      } else {
        alert(resp.msg);
      }
    });

    xhr.open("POST", appConfig.baseApiEndpoint + "/upload.php");
    xhr.setRequestHeader("token", this.props.accessToken);
    xhr.send(formData);
  }

  handleProgress = event => {
    const percent = Math.round((event.loaded * 100) / event.total);
    this.setState({
      uploadProgress: percent,
      uploadText: `Uploaded ${percent}%`
    });
  };

  render() {
    return (
      <View style={styles.overview}>
        <View style={styles.line}>
          <View
            style={[
              styles.line,
              {
                backgroundColor: "#007aff",
                width: `${this.state.uploadProgress}%`
              }
            ]}
          />
        </View>
        <Text>{this.state.uploadText}</Text>
        <Text>Response: {this.state.response}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ auth, upload }) => ({
  uri: upload.uri,
  accessToken: auth.user.accessToken
});

export default connect(mapStateToProps)(UploadScreen);
