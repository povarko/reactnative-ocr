const type = {
  rajdhani: "Rajdhani",
  rajdhaniBold: "Rajdhani-Bold",
  rajdhaniLight: "Rajdhani-Light",
  rajdhaniMedium: "Rajdhani-Medium",
  rajdhaniSemibold: "Rajdhani-Semibold"
};

const size = {
  h1: 42,
  h2: 30,
  h3: 24,
  h4: 20,
  h5: 20,
  h6: 18,
  t1: 16,
  t2: 14,
  input: 18
};

const style = {
  h1: {
    fontFamily: type.rajdhaniBold,
    fontSize: size.h1
  },
  h2: {
    fontFamily: type.rajdhaniBold,
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.rajdhaniBold,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.rajdhaniSemibold,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.rajdhaniSemibold,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.helveticaNeueItalic,
    fontSize: size.h6
  },
  t1: {
    fontFamily: type.rajdhani,
    fontSize: size.t1
  },
  t2: {
    fontFamily: type.rajdhani,
    fontSize: size.t2
  },
  input: {
    fontFamily: type.rajdhaniMedium,
    fontSize: size.h6
  },
  label: {
    fontFamily: type.rajdhani,
    fontSize: size.h6
  }
};

export default {
  type,
  size,
  style
};
