import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
  },
  logo: {
    width: width * 0.6,
    height: width * 0.6,
  },
  spinner: {
    width: 32,
    height: 32,
  },
});

export default styles;