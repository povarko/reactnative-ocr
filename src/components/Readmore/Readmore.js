import React from "react";
import { TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { Text } from "@AppComponents";

class Readmore extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    textStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
    previewLines: PropTypes.number
  };

  static defaultProps = {
    previewLines: 1,
    renderButton: () => {}
  };

  state = {
    showFull: false
  };

  _handleToggle = () => {
    this.setState(state => ({ showFull: !state.showFull }));
  };

  _showPreview = () => {
    const { text, textStyle, previewLines } = this.props;
    return (
      <Text style={textStyle} numberOfLines={previewLines} ellipsizeMode="tail">
        {text}
      </Text>
    );
  };

  _showContent = () => {
    const { textStyle, text } = this.props;
    return <Text style={textStyle}>{text}</Text>;
  };

  render() {
    const { buttonStyle } = this.props;
    const { showFull } = this.state;

    return (
      <View>
        {showFull ? this._showContent() : this._showPreview()}
        <TouchableOpacity onPress={this._handleToggle}>
          <Text style={buttonStyle}>
            {showFull ? "Show Less" : "Read More"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Readmore;
