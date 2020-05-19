import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import { SideMenu } from "@AppComponents";
import { SafeAreaView } from "react-navigation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import Share from "react-native-share";
import { Colors, Icons } from "@AppTheme";
import styles from "./styles";
import { TICKER_DATA } from "../../../../components/performaceView/dummy";
// import { ScrollView } from "react-native-gesture-handler";

class NewsMainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  _handleShare = (message = "") => {
    let shareOptions = {
      message,
      title: "Share via"
      //url: //URL you want to share (only support base64 string in iOS & Android
    };
    Share.open(shareOptions).catch(err => {});
  };

  _handleLike = index => {};

  renderComment = ({ item }) => {
    const imageurl =
      "https://worldsportlogos.com/wp-content/uploads/2018/01/Juventus-logo.png";

    return (
      <View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Image
            source={{ uri: imageurl }}
            style={styles.logo1}
            resizeMode={"cover"}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.date}>JUNE 9TH 6:21PM</Text>
            <Text style={styles.username}>BRANDONRULES</Text>
            <Text style={styles.comment}>
              "I thought he was sponsored by nike??"
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                alignItems: "center"
              }}
            >
              <TouchableOpacity>
                <Icon
                  name="thumbs-up"
                  type="font-awesome"
                  color={Colors.malachite}
                  size={13}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 5 }}>
                <Icon
                  name="thumbs-down"
                  type="font-awesome"
                  color={Colors.malachite}
                  size={13}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.reply}>REPLY</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image
                source={{ uri: imageurl }}
                style={styles.logo2}
                resizeMode={"cover"}
              />
              <View style={{ marginLeft: 20, flex: 1 }}>
                <Text style={styles.date}>JUNE 9TH 6:21PM</Text>
                <Text style={styles.username}>BRANDONRULES</Text>
                <Text style={styles.comment}>
                  "I thought he was sponsored by nike?"
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5
                  }}
                >
                  <TouchableOpacity>
                    <Icon
                      name="thumbs-up"
                      type="font-awesome"
                      color={Colors.malachite}
                      size={13}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginLeft: 5 }}>
                    <Icon
                      name="thumbs-down"
                      type="font-awesome"
                      color={Colors.malachite}
                      size={13}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.reply}>REPLY</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{ height: 1, marginTop: 10, backgroundColor: "#E0E0E0" }}
        />
      </View>
    );
  };
  renderItems = () => {
    const data = TICKER_DATA[0];
    const item = this.props.navigation.getParam("data", () => {});
    return (
      <View style={styles.expanditem}>
        <TouchableOpacity
          activeOpacity={0.8}
          // onPress={() => this._onPress(index)}
        >
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.expandPhoto}
            resizeMode={"cover"}
          />

          <View style={styles.dailyChangeView}>
            <Image
              // source={{ uri: data.image }}
              source={data.image}
              style={styles.dailyChangePhoto}
              resizeMode={"cover"}
            />
            <View
              style={{ flexDirection: "row", flex: 1, alignItems: "center" }}
            >
              <Text style={[styles.dailyChangeTitle, { marginRight: 10 }]}>
                {data.symbol}
              </Text>
              <FontAwesome5
                solid
                name={data.change >= 0 ? "caret-up" : "caret-down"}
                style={[
                  styles.changeIcon,
                  {
                    color: data.change >= 0 ? Colors.malachite : "red"
                  }
                ]}
              />
              <Text style={styles.changeValue}>{data.change}%</Text>
            </View>
            <TouchableOpacity
              style={{
                width: 60,
                height: 20,
                borderRadius: 10,
                backgroundColor: Colors.malachite,
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={() => this.props.navigation.navigate("BuySellMain")}
            >
              <Text style={[styles.buyTitle]}>BUY</Text>
            </TouchableOpacity>
            <Image
              source={Icons.arrowRight}
              style={styles.dailyChangeRightArrow}
            />
          </View>
        </TouchableOpacity>
        <Text style={[styles.itemTitle, { marginTop: 10 }]}>{item.title}</Text>
        <Text style={[styles.expanditemdetails]}>{item.text}</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Image style={styles.expandimgLike} source={Icons.likeIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Image style={styles.expandimgLike} source={Icons.dislikeIcon} />
            </TouchableOpacity>
            <Text style={styles.expanditemLike}>{item.votes}</Text>
          </View>
          <TouchableOpacity style={{ marginLeft: 30 }}>
            <View style={{ flexDirection: "row" }}>
              <Image style={styles.expandimgLike} source={Icons.commentIcon} />
              <Text style={styles.expanditemLike}>{item.comments}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 30 }}
            onPress={() => this._handleShare(item.details)}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="share-alt"
                type="font-awesome"
                color={Colors.malachite}
                size={22}
              />
              <Text style={styles.expanditemLike}>SHARE</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ height: 1, marginTop: 10, backgroundColor: "#E0E0E0" }}
        />
        {this.renderComment(item)}
      </View>
    );
  };
  render() {
    const title = "NEWS FEED";

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu headerProps={{ title }} title={title}>
          <View style={styles.container1}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Image source={Icons.back} />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{ flex: 1, backgroundColor: "#FFF", padding: 10 }}
            >
              {this.renderItems()}
            </ScrollView>
          </View>
        </SideMenu>
      </SafeAreaView>
    );
  }
}

export default NewsMainScreen;
