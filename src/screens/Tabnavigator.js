
import 'react-native-gesture-handler';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import Explore from './Explore';
import Profile from './Profile';


const Tab = createBottomTabNavigator();

export default class Tab1 extends React.Component {
    render() {
  return (
      <Tab.Navigator
      initialRouteName = "Home"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
            marginBottom:10,
            fontSize: 20,}
      }}>
          
         
         <Tab.Screen
        name= 'Home'
        component= {Home}/>

           <Tab.Screen
        name= 'Explore'
        component= {Explore}/>

           <Tab.Screen
        name= 'Profile'
        component= {Profile}/>

      </Tab.Navigator>
  )}
};