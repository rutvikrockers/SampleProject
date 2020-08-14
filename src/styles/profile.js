import {
  StyleSheet, Dimensions, Platform
} from 'react-native';

import ProfileScreen from '../ProfileScreen';
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  ...ProfileScreen,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    paddingTop: 5,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    padding: 5,

    margin: 5,

  },
  iconStyle: {
    flexDirection: 'row',

    padding: 5,
  },
  btniconStyle: {
    flexDirection: 'row',
    alignItems: 'center',


  },
  locationiconStyle: {
    flexDirection: 'row',
    marginTop: 20,

  },
  textStyle: {
    padding: 5,
    fontSize: 14,
  },
  miletextStyle: {
    fontSize: 14,
  },
  image: {
    borderRadius: 20,
    width: 100,
    height: 100
  },
  hr: {
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    marginBottom: 20,
    marginTop: 20
  },
  normaltext: {
    marginLeft: 20,
    fontSize: 15
  },
  instatext: {
    marginLeft: 20,
    fontSize: 25
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnView: {
    height: 50,


    backgroundColor: '#343390',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
});

module.exports = styles;