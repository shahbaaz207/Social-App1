import React, { Component } from 'react'
import { StyleSheet, Text, View,ActivityIndicator, Button } from 'react-native';
import * as firebase from 'firebase'
import { Ionicons } from '@expo/vector-icons';
import Fire from './File'

export default  class LoadingScreen extends Component {
    componentDidMount(){
              firebase.auth().onAuthStateChanged(user=>{
             this.props.navigation.navigate(user?'Bottom':'Login')
        })  
    }
    render(){
    return (
        <View style={styles.container}>
            <Text>Loading Screen</Text>
            <Ionicons name={'ios-search'} size={50} color={'red'} />
            <ActivityIndicator size='large'></ActivityIndicator>
        </View>
    )
        }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
