import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-navigation";
import styles from "./styles";
import images from "../../../../theme/images";

class VirtualStackCardScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.navigation.getParam("data", () => {});
    return (
      <SafeAreaView style={styles.container}>
        {/* <ImageBackground
          source={images.playerCertificate}
          style={styles.background}
        > */}
        <TouchableOpacity
          activeOpacity={1.0}
          onPress={() => this.props.navigation.goBack()}
        >
          <View style={{ backgbackgroundColor: "#000" }}>
            {/* <View style={styles.container1}>
              
                <Image
                  style={styles.background}
                  resizeMode={"cover"}
                  source={{ uri: data.banner.image }}
                  // source={images.playerCertificate}
                /> 
                <View style={styles.infoView}>
                  <View style={{ marginLeft: 15 }}>
                    <Text style={styles.infoTitle}>{data.name}</Text>
                    <Text style={styles.infoTitle1}>LIVE STATS</Text>
                    <View
                      style={{ flexDirection: "row", marginTop: 5, height: 19 }}
                    >
                      <Text style={styles.infodetails1}>HEIGHT:</Text>
                      <Text style={styles.infodetails2}>
                        {data.stats.height}
                      </Text>
                    </View>
                    <View
                      style={{ height: 1, width: 170, backgroundColor: "#333" }}
                    />

                    <View
                      style={{ flexDirection: "row", marginTop: 0, height: 19 }}
                    >
                      <Text style={styles.infodetails1}>AGE:</Text>
                      <Text style={styles.infodetails2}>{data.stats.age}</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", marginTop: 0, height: 19 }}
                    >
                      <Text style={styles.infodetails1}>CURRENT TEAM:</Text>
                      <Text style={styles.infodetails2}>{data.stats.team}</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", marginTop: 0, height: 19 }}
                    >
                      <Text style={styles.infodetails1}>ASSISTS:</Text>
                      <Text style={styles.infodetails2}>
                        {data.stats.assists}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", marginTop: 0, height: 19 }}
                    >
                      <Text style={styles.infodetails1}>GOALS:</Text>
                      <Text style={styles.infodetails2}>
                        {data.stats.goals}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", marginTop: 0, height: 19 }}
                    >
                      <Text style={styles.infodetails1}>NET WORTH:</Text>
                      <Text style={styles.infodetails2}>
                        {data.stats.worth}
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", marginTop: 0, height: 19 }}
                    >
                      <Text style={styles.infodetails1}>SPONSORS:</Text>
                      <Text style={styles.infodetails2}>GATORAGE,</Text>
                    </View>
                    <View
                      style={{ height: 1, width: 170, backgroundColor: "#333" }}
                    />

                    <View style={{ flexDirection: "row", marginTop: 8 }}>
                      <Text style={styles.infoTitle2}>GIVING:</Text>
                      <Text style={styles.infoTitle2}>{data.stats.giving}</Text>
                    </View>
                  </View>
                  <View style={styles.userView}>
                    <Text style={styles.txtUserName}>{data.symbol} - </Text>
                    <Text style={styles.txtUserBalance}>
                      {data.currency}
                      {data.price}
                    </Text>
                  </View>
                </View> 
              </View>*/}
            <Image
              style={styles.dummyImage}
              source={images.playerCertificate}
              resizeMode={"stretch"}
            />
            <Image style={styles.dummyImage} source={images.dummyAD} />
          </View>
        </TouchableOpacity>
        {/* </ImageBackground> */}
        {/* <Image
          style={{ alignSelf: "stretch", height: 100 }}
          source={images.dummyAD}
        /> */}
      </SafeAreaView>
    );
  }
}

VirtualStackCardScreen.propTypes = {};
export default VirtualStackCardScreen;
