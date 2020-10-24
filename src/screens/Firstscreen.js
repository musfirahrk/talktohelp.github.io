import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Alert} from 'react-native';
import { StyleSheet, Text, Button, View, } from 'react-native';


export default class Firstscreen extends React.Component {
  render()
   {
      return (   
        <View style={styles.container}>
    
      
      <StatusBar style="auto" />
        

           <View >
            <Image
            source={require('../../assets/talktohelp.png')}
            style={styles.logo}
            resizeMode="contain"
            >
             </Image>
             <Text style={styles.text}>Because You Matter.</Text>
             <TouchableOpacity
             onPress = {()=>{this.props.navigation.push('Signup')}}>
              
                  <Text style={styles.signup}>Sign Up</Text>
             </TouchableOpacity>
             <TouchableOpacity  onPress = {()=>{this.props.navigation.push('Loginscreen')}}>
            
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
           </View>
    </View>
  );
      }
    };



const styles = StyleSheet.create({

  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomColor: '#CC3F40',
  borderRightColor:'#CC3F40',
  borderLeftColor:'#CC3F40',
  borderTopColor:'#CC3F40',
  borderTopWidth:10,
  borderLeftWidth:10,
  borderRightWidth: 10,
  borderBottomWidth: 10,
},
 /* background: {
    width: '100%',
    height: '100%'
  },*/

  logo:{
    width: 280,
    height: 280,
    marginLeft: '0%',
    marginTop: '10%'
  },

  text: {
    color: '#BE5858',
    fontWeight: 'bold',
    fontSize:  27,
    marginTop: '-10%',
    marginLeft: '12%'
  },
  signup: {
    backgroundColor: '#CC3F40',
    color: '#322E2E',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '40%'
  },

  login: {
    backgroundColor: '#CC3F40',
    color: 'white',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '1%'
  },
},
);




