import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text } from "@AppComponents";
import { Icon } from "react-native-elements";
import { Colors, Icons, Images } from "@AppTheme";
import PosterBottomBar from "./PosterBottomBar";
import { withNavigation } from "react-navigation";
import reactotron from "reactotron-react-native";

class BlogExpandItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.navigation.getParam("activeIndex")
    };
  }

  componentDidMount() {
    reactotron.log("i received", this.props.navigation.getParam("activeIndex"));
  }

  _onPress = index => {
    if (this.state.selected == index) {
      this.setState({ selected: null });
    } else {
      this.setState({ selected: index });
    }
  };

  renderComment = ({ item }) => {
    return (
      <View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Image
            source={Images.lionelMessi}
            style={styles.avatar1}
            resizeMode="contain"
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.date}>JUNE 9TH 6:21PM</Text>
            <Text style={styles.username}>BRANDONRULES</Text>
            <Text style={styles.comment}>
              "I thought the was sponsored by nike?"
            </Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
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
                source={Images.athlete4}
                style={styles.avatar2}
                resizeMode="contain"
              />
              <View style={{ marginLeft: 20, flex: 1 }}>
                <Text style={styles.date}>JUNE 9TH 6:21PM</Text>
                <Text style={styles.username}>BRANDONRULES</Text>
                <Text style={styles.comment}>
                  "I thought the was sponsored by nike?"
                </Text>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
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
        <View style={styles.divider} />
      </View>
    );
  };

  renderItems = ({ item, index }) => {
    const { selected } = this.state;

    return selected == index ? (
      <View style={styles.expanditem}>
        <TouchableOpacity onPress={() => this._onPress(index)}>
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.expandPhoto}
            resizeMode={"cover"}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.itemTitle,
            { marginVertical: 10, textTransform: "uppercase" }
          ]}
        >
          {item.title}
        </Text>
        <Text style={[styles.expanditemdetails]}>{item.details}</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="thumbs-up"
                type="font-awesome"
                color={Colors.malachite}
                size={18}
              />
              <Text style={styles.expanditemLike}>LIKE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 30 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="comment"
                type="font-awesome"
                color={Colors.malachite}
                size={18}
              />
              <Text style={styles.expanditemLike}>COMMENT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 30 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="share-alt"
                type="font-awesome"
                color={Colors.malachite}
                size={18}
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
        <View style={styles.expanditem}>
          <View>
            <Image
              source={{ uri: item.thumbnail }}
              style={styles.expandPhoto}
              resizeMode={"cover"}
            />
            <PosterBottomBar data={this.props.data} />
          </View>
          <Text style={[styles.itemTitle, { marginTop: 10 }]}>
            {item.topic.name}
          </Text>
          {/* <Text style={[styles.itemTitle]}>{item.details}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data.forum}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
          extraData={this.state}
        />
      </View>
    );
  }
}

BlogExpandItem.propTypes = {};
export default withNavigation(BlogExpandItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFF"
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
    backgroundColor: "#26c91eCC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
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
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    marginRight: 10,
    justifyContent: "space-between"
  },
  avatar1: {
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
  avatar2: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.malachite
  },
  reply: {
    fontFamily: "Rajdhani",
    fontSize: 10,
    color: "#464646",
    marginLeft: 10,
    marginTop: 3
  },
  divider: {
    height: 1,
    marginTop: 10,
    backgroundColor: "#E0E0E0"
  }
});
