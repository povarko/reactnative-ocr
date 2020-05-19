import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Divider, Icon } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, Button } from "@AppComponents";
import Share from "react-native-share";
import { Colors, Icons, Images } from "@AppTheme";
import { withNavigation } from "react-navigation";

class NewsExpandItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.navigation.getParam("activeIndex"),
      expanded: false
    };
  }

  _onPress = index => {
    const { selected } = this.state;
    this.setState({
      selected: selected === index ? null : index,
      expanded: false
    });
  };

  _onPressLike = item => {
    // console.log("---news item---", item);
    // alert(item.title);
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

  _handleLike = index => {};

  renderComment = ({ item }) => {
    return (
      <View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Image
            source={Images.athlete4}
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
                source={Images.athlete3}
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

  renderItems = ({ item, index }) => {
    const { selected, expanded } = this.state;
    const data = this.props.data;
    return selected == index ? (
      <View style={styles.expanditem}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this._onPress(index)}
        >
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.expandPhoto}
            resizeMode={"cover"}
          />

          <View style={styles.dailyChangeView}>
            <Image
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
            <Image
              source={Icons.arrowRight}
              style={styles.dailyChangeRightArrow}
            />
          </View>
        </TouchableOpacity>
        <Text style={[styles.itemTitle, { marginTop: 10 }]}>{item.title}</Text>
        <Text style={styles.expanditemdetails}>{item.text}</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => this._onPressLike(item)}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image style={styles.expandimgLike} source={Icons.likeIcon} />
              <Text style={styles.expanditemLike}>{item.votes}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 30 }}
            onPress={() => this._onPressComment()}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image style={styles.expandimgLike} source={Icons.commentIcon} />
              <Text style={styles.expanditemLike}>Comments</Text>
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
            <View style={styles.dailyChangeView}>
              <Image
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Button
                  title="BUY"
                  textStyle={{ fontSize: 10 }}
                  style={styles.button}
                  onPress={() => {
                    this.props.navigation.navigate("BuySellMain", {
                      type: "BUY",
                      username: data.name
                    });
                  }}
                />
                <Image
                  source={Icons.arrowRight}
                  style={styles.dailyChangeRightArrow}
                />
              </View>
            </View>
          </View>
          <Text style={[styles.itemTitle, { marginTop: 10 }]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data.news}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          extraData={this.state}
        />
      </View>
    );
  }
}

NewsExpandItem.propTypes = {};
export default withNavigation(NewsExpandItem);

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
  body: {},
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
  source: {
    fontFamily: "Rajdhani",
    fontSize: 14,
    color: Colors.textBlackColor,
    textTransform: "uppercase",
    marginTop: 10
  },
  collapseItem: {
    marginBottom: 20,
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  expanditem: {
    marginBottom: 20,
    flex: 1
  },
  expandPhoto: {
    height: 190
  },
  expanditemdetails: {
    color: Colors.textBlackColor,
    fontSize: 14,
    fontFamily: "Rajdhani-Medium",
    marginTop: 10
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
    fontFamily: "Rajdhani-Bold"
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
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    marginRight: 20,
    justifyContent: "space-between"
  },
  detailsContainer: {
    padding: 10,
    paddingTop: 5
  },
  divider: {
    backgroundColor: "#E0E0E0",
    marginVertical: 12
  },
  dailyChangeView: {
    height: 36,
    marginTop: -36,
    backgroundColor: "#333",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  dailyChangeTitle: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Rajdhani",
    marginLeft: 10
  },
  dailyChangePhoto: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.malachite,
    backgroundColor: "#FFF",
    marginLeft: 10
  },
  dailyChangeRightArrow: {
    width: 12,
    height: 8,
    marginRight: 20
  },
  buyTitle: {
    color: "#FFF",
    fontSize: 10,
    fontFamily: "Rajdhani-Bold"
  },
  body: {
    fontSize: 14,
    fontFamily: "Rajdhani-Medium",
    color: Colors.textBlackColor
  },
  button: {
    width: 60,
    height: 20,
    backgroundColor: Colors.malachite,
    borderRadius: 15
  }
});
