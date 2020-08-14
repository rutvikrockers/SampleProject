import React from "react";
import { View, Text} from "react-native";
import { SafeAreaView } from "react-navigation";
import CoverImage from "./CoverImage";
import styles from './styles/profileheader';
export default class ProfileHeaderInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos_count: 0,
      followers_count: 0
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.profileHeader}>
        <CoverImage />
        <View style={[styles.mainSection]}>
        
        
        </View>
        <View style={styles.userDetails}>
        <Text style={styles.userName}>Anna 19</Text>
            <Text style={styles.userDesc}>Description</Text>
        </View>
        
      </SafeAreaView>
    );
  }
}



