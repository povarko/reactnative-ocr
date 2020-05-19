import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import Share from "react-native-share";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, Button } from "@AppComponents";
import { Icon } from "react-native-elements";
import { Colors, Icons, Images } from "@AppTheme";
import { withNavigation } from "react-navigation";
import PosterBottomBar from "./PosterBottomBar";
import reactotron from "reactotron-react-native";

class GamePlanExpandItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.navigation.getParam("activeIndex"),
      expanded: false
    };
  }

  _onPress = index => {
    console.log(index);
    const { selected } = this.state;
    this.setState({
      selected: selected === index ? null : index,
      expanded: false
    });
  };

  _onPressComment = () => {
    const isExpanded = !this.state.expanded;
    this.setState({ expanded: isExpanded });
  };

  _handleShare = (message = "") => {
    let shareOptions = {
      message,
      title: "Share via"
      //url: //URL you want to share (only support base64 string in iOS & Android
    };
    Share.open(shareOptions).catch(err => {});
  };

  renderComment = ({ item }) => {
    const imageurl =
      "https://worldsportlogos.com/wp-content/uploads/2018/01/Juventus-logo.png";

    return (
      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Image
            source={Images.athlete4}
            style={styles.logo1}
            resizeMode="contain"
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
                source={Images.lionelMessi}
                style={styles.logo2}
                resizeMode="contain"
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

  renderItems = ({ item, index }) => {
    const { selected, expanded } = this.state;
    const data = this.props.data;

    return selected == index ? (
      <View style={styles.expanditem}>
        <TouchableOpacity
          onPress={() => this._onPress(index)}
          activeOpacity={0.8}
        >
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.expandPhoto}
            resizeMode={"cover"}
          />
          <View style={styles.watermarks}>
            <Image source={Icons.checkIcon} style={styles.watermarksChecker} />
          </View>
        </TouchableOpacity>
        <PosterBottomBar data={data} />
        <Text style={[styles.itemTitle, { marginTop: 10 }]}>{item.title}</Text>
        <Text style={[styles.expanditemdetails]}>{item.text}</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <View style={styles.iconRow}>
              <Icon
                name="thumbs-up"
                type="font-awesome"
                color={Colors.malachite}
                size={22}
              />
              <Text style={styles.expanditemLike}>{item.votes}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 30 }}
            onPress={() => this._onPressComment()}
          >
            <View style={styles.iconRow}>
              <Icon
                name="comment"
                type="font-awesome"
                color={Colors.malachite}
                size={22}
              />
              <Text style={styles.expanditemLike}>Comment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 30 }}
            onPress={() => this._handleShare(item.details)}
          >
            <View style={styles.iconRow}>
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
        {selected == index && this.renderComment(item)}
      </View>
    ) : (
      <TouchableOpacity onPress={() => this._onPress(index)}>
        <View style={styles.item}>
          <View style={{ width: 110 }}>
            <Image
              source={{ uri: item.thumbnail }}
              style={styles.photo}
              resizeMode={"cover"}
            />
            <View style={styles.watermarks}>
              <Image
                source={Icons.checkIcon}
                style={styles.watermarksChecker}
              />
              <Text style={styles.watermarksText}>SX-VERFIFIED</Text>
            </View>
          </View>
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={styles.itemTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.itemdetails} numberOfLines={4}>
              {item.text}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="thumbs-up"
                    type="font-awesome"
                    color={Colors.malachite}
                    size={13}
                  />
                  <Text style={styles.itemLike}>LIKE</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="comment"
                    type="font-awesome"
                    color={Colors.malachite}
                    size={13}
                  />
                  <Text style={styles.itemLike}>COMMENT</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this._handleShare(item.details)}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="share-alt"
                    type="font-awesome"
                    color={Colors.malachite}
                    size={13}
                  />
                  <Text style={styles.itemLike}>SHARE</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: "#E0E0E0" }} />
      </TouchableOpacity>
    );
  };

  render() {
    const data = this.props.data;
    return (
      <View style={styles.container}>
        <FlatList
          data={data.plan}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
          extraData={this.state}
        />
      </View>
    );
  }
}

GamePlanExpandItem.propTypes = {};
export default withNavigation(GamePlanExpandItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFF"
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    marginRight: 10,
    justifyContent: "space-between"
  },
  header: {
    height: 48,
    backgroundColor: Colors.malachite,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Rajdhani-Bold"
  },
  athlete: {
    fontSize: 16,
    fontFamily: "Rajdhani-Bold",
    color: Colors.textBlackColor,
    marginRight: 6
  },
  item: {
    flex: 1,
    height: 165,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  itemTitle: {
    color: Colors.textBlackColor,
    fontSize: 18,
    fontFamily: "Rajdhani-Bold"
  },
  itemdetails: {
    color: Colors.textBlackColor,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium",
    height: 100
  },
  itemReadmore: {
    color: Colors.malachite,
    fontSize: 14,
    fontFamily: "Rajdhani-Bold"
  },
  photo: {
    height: 144
  },
  imgLike: {
    width: 14,
    height: 14
  },
  itemLike: {
    marginLeft: 3,
    color: Colors.textBlackColor,
    fontSize: 12,
    fontFamily: "Rajdhani-SemiBold"
  },
  watermarks: {
    width: 110,
    height: 24,
    marginTop: -24,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8
  },
  watermarksChecker: {
    width: 15,
    height: 15
  },
  watermarksText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "Rajdhani"
  },
  expanditem: {
    padding: 10,
    flex: 1
  },
  expandPhoto: {
    height: 190
  },
  expanditemdetails: {
    color: Colors.textBlackColor,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium"
  },
  expandimgLike: {
    width: 20,
    height: 21
  },
  expanditemLike: {
    marginLeft: 3,
    color: Colors.textBlackColor,
    fontSize: 15,
    fontFamily: "Rajdhani-SemiBold"
  },
  changeValue: {
    color: Colors.malachite,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "Rajdhani-SemiBold"
  },
  changeIcon: {
    fontSize: 24
  },
  logo1: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.malachite
  },
  date: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 10,
    color: Colors.malachite
  },
  username: {
    fontFamily: "Rajdhani-Bold",
    fontSize: 16,
    color: "#000"
  },
  comment: {
    fontFamily: "Rajdhani-Medium",
    fontSize: 14,
    color: "#000"
  },
  reply: {
    fontFamily: "Rajdhani",
    fontSize: 10,
    color: "#464646",
    marginLeft: 10,
    marginTop: 3
  },
  logo2: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.malachite
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center"
  }
});
