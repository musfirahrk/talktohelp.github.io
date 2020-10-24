import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Alert} from 'react-native';
import { StyleSheet, Text, Button, View, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';                
import Wrapper from './src/screens/wrapper';


export default class App extends React.Component {

render()
{

  
   return (
    <NavigationContainer>
    <Wrapper/>
</NavigationContainer>
    
   )
}
};
