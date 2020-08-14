import * as React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './src/main/MainScreen';
import ProfileScreen from './src/ProfileScreen';
const RootStack = createSwitchNavigator({
  MainScreen: { screen: MainScreen },
  ProfileScreen: { screen: ProfileScreen }
},

  {
    initialRouteName: 'MainScreen',
  }
);
class App extends React.Component { 
  render() {
    return <RootStack />;
  }
}

export default createAppContainer(RootStack);