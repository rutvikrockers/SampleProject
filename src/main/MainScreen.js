import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import styles from '../styles/mainscreen';

class MainScreen extends React.Component {


    render() {

        return (
            <View style={styles.MainContainer}>


                <TouchableHighlight underlayColor='transparent' style={styles.btnView} onPress={() => { this.props.navigation.navigate('ProfileScreen') }}>
                    <Text style={styles.btnText}>Go to Profile Page</Text>
                </TouchableHighlight>
            </View>
        );

    }
}



export default MainScreen;