import {
  StyleSheet, Platform
} from 'react-native';

import MainScreen from '../main/MainScreen';

const styles = StyleSheet.create({
  ...MainScreen,
  MainContainer:
  {
    flex: 1,
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
  btnView: {
    height: 50,
    width: '100%',

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