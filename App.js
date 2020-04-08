import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoadingScreen from './Screens/LoadingScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/Registration';
import BottomScreen from './Screens/BottomTab';
import firebaseConfig from './Config'


  // Initialize Firebase
 if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}

const Stack=createStackNavigator()
export default class App extends Component {
    render(){
      return(
        <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Loading">
            <Stack.Screen name="Loading" component={LoadingScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Bottom" component={BottomScreen} options={{title: ''}}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
      )
    }
}

 