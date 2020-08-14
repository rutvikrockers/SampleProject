import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView, TouchableHighlight,

  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import styles from './styles/profile';
import ProfileHeader from "./ProfileHeader";
import { FontAwesome, EvilIcons } from '@expo/vector-icons';

console.disableYellowBox = true;
export default class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: {}
    };
  }

  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(6)).map((v, i) => {
      return {
        id: i,
        src:
          "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM-970-80.jpg"
      };
    });
    that.setState({
      dataSource: items
    });
  }

  render() {
    return (

      <ScrollView style={{ flex: 1 }}>
        <ProfileHeader />
        <View style={{ marginLeft: 15 }}>
          <View style={styles.iconStyle}>
            <FontAwesome name="university" size={20} color="black" />
            <Text style={styles.textStyle}>University of San Francisco</Text>

          </View>
          <View style={styles.locationiconStyle}>
            <EvilIcons name="location" size={30} color="black" />
            <Text style={styles.miletextStyle}>1 mile away</Text>
          </View>

        </View>
        <View style={styles.hr}></View>
        <Text style={styles.normaltext}>Moved from the East cost and just want to meet some new people</Text>
        <View style={styles.hr}></View>
        <Text style={styles.instatext}>Recent Instagram Photos</Text>

        <FlatList
          onEndReachedThreshold={0}
          onEndReached={({ distanceFromEnd }) => {
            console.debug('on end reached ', distanceFromEnd);
          }}
          contentContainerStyle={styles.list}
          numColumns={3}
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image style={styles.image} source={{ uri: item.src }} />
            </View>
          )}
        />
        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => { }}>
              <FontAwesome style={{ padding: 23 }} name="remove" size={50} color="#FD1B60" />

            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
              <FontAwesome style={{ padding: 23 }} name="star" size={40} color="#0695E2" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
              <FontAwesome style={{ padding: 23 }} name="heart" size={50} color="#11E19D" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableHighlight underlayColor='transparent' style={styles.btnView} onPress={() => { this.props.navigation.navigate('MainScreen') }}>
          <Text style={styles.btnText}>Go to Main Page</Text>
        </TouchableHighlight>
      </ScrollView>

    );
  }
}

