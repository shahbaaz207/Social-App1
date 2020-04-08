import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet, View, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import PostScreen from './PostScreen';
import NotificationScreen from './Notification';
import MessagesScreen from './MessagesScreen';
import ProfileScreen from './Profile';

const Tab=createBottomTabNavigator()

export default class BottomTab extends Component{
    render(){
    return(
        <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home';
              }
              else if (route.name === 'Messages') {
                iconName = focused ? 'ios-chatboxes' : 'ios-chatboxes';
              } 
              else if (route.name === 'Post') {
                iconName = focused ? 'ios-add-circle' : 'ios-add-circle';
              }
              else if (route.name === 'Notification') {
                iconName = focused ? 'ios-notifications' : 'ios-notifications';
              } 
              else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person' : 'ios-person';
              }            
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })} 
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen}  />
          <Tab.Screen name="Messages" component={ MessagesScreen} />
          <Tab.Screen name="Post" component={ PostScreen} />
          <Tab.Screen name="Notification" component={ NotificationScreen} />
          <Tab.Screen name="Profile" component={ ProfileScreen}  />
        </Tab.Navigator>
      </NavigationContainer>
    )
        }
}