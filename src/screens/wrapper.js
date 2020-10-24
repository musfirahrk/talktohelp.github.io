import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Alert} from 'react-native';
import { StyleSheet, Text, Button, View, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Firstscreen from './Firstscreen';
import Loginscreen from './Loginscreen';
import Signup from './Signup';
import Home from './Home';     
import Tab1 from './Tabnavigator';                        

const Stack = createStackNavigator()

export default class Wrapper extends React.Component {

    render()
    {
    
      
       return (
          // <LoginSignUp/>
       <Stack.Navigator
       initialRouteName = "Firstscreen"
       screenOptions = {{ headerShown:false}} >
         <Stack.Screen
         name = 'Firstscreen'
         component = {Firstscreen}/>

        <Stack.Screen
         name = 'Loginscreen'
         component = {Loginscreen}/>

        <Stack.Screen
         name = 'Signup'
         component = {Signup}/>

         {/* <Stack.Screen
         name = 'Home'
         component = {Home}/> */}

        <Stack.Screen
         name = 'Tab1'
         component = {Tab1}/>
   
       </Stack.Navigator>
        
       )
    }
    };
    


