import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Alert} from 'react-native';
import { StyleSheet, Text, Button, View, } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";


export default class Home extends React.Component {

    render()
    {
       return (
        <View style={styles.page}>
            <Text style={styles.text}>
               Because You Matter   </Text>
               <Grid style={{ marginBottom:450}}>
                  <Col style={{marginBottom:-450}}>
                  <Row>
        
               <Col size={50} > 
             <TouchableOpacity> 
                <View>
            <Image style={{ height: 10, width:0, padding:50,marginLeft:50,
            borderRadius:50, borderColor:'#808080', borderWidth:5}}
          source={require('../../assets/talk.png')} />
          </View>
                </TouchableOpacity>  
                <View>
                   <Text style={{color:'#CC3F40',
      fontSize:20, marginLeft:20}}>
                      Talk To A Therapist
                   </Text>
                </View>
                </Col> 
               
                <Col size={50}>
            <TouchableOpacity> 
            <Image style={{ height: 50, width: 5 ,
            padding:50,borderRadius:50, borderColor:'#808080', borderWidth:5,marginLeft:40}}
          source={require('../../assets/loc.png')} />
           </TouchableOpacity>
           <View>
                   <Text style={{color:'#CC3F40',
      fontSize:20, marginLeft:30}}>
                      Find The Nearest Therapist
                   </Text>
                </View>
           </Col>
           </Row>

           <Row>
           <Col size={50}>
          
            <TouchableOpacity> 
            <Image style={{ height: 50, width: 50 ,padding:50,marginLeft:50,
            borderRadius:50, borderColor:'#808080', borderWidth:5}}
          source={require('../../assets/diary.png')} />
           </TouchableOpacity>
           <View>
                   <Text style={{color:'#CC3F40',
      fontSize:20, marginLeft:50}}>
                      Mood Journal
                   </Text>
                </View>
           </Col>

           <Col size={50}>
            <TouchableOpacity> 
            <Image style={{ height: 50, width: 50 ,marginLeft:40,
            padding:50,borderRadius:50, borderColor:'#808080', borderWidth:5}}
          source={require('../../assets/earth1.png')} />
           </TouchableOpacity>
           <View>
                   <Text style={{color:'#CC3F40',
      fontSize:20, marginLeft:50}}>
                      Virtual World
                   </Text>
                </View>
           </Col>
           </Row>

           <Row>
           <Col size={50}>
            <TouchableOpacity> 
            <Image style={{ height: 50, width: 50 ,marginLeft:50,
            padding:50,borderRadius:50, borderColor:'#808080', borderWidth:5}}
          source={require('../../assets/chat.png')} />
           </TouchableOpacity>
           <View>
                   <Text style={{color:'#CC3F40',
      fontSize:20, marginLeft:20}}>
                      Emergency Message
                   </Text>
                </View>
           </Col>
          

           <Col size={50}>
            <TouchableOpacity> 
            <Image style={{ height: 50, width: 50 ,marginLeft:40,
            padding:50,borderRadius:50, borderColor:'#808080', borderWidth:5}}
          source={require('../../assets/yoga.png')} />
           </TouchableOpacity>
           <View>
                   <Text style={{color:'#CC3F40',
      fontSize:20, marginLeft:30}}>
                     Virtual Therapy
                   </Text>
                </View>
           </Col>
           </Row>
           </Col>
         </Grid>
        </View>
        
       )
    }
    };
    
    const styles = StyleSheet.create({

      page: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
       marginTop:20,
      
    },

    text: {
      flex: 1,
      backgroundColor: 'white',
      textAlign:'center',
      marginLeft:50,
      alignItems: 'center',
      marginTop:30,
      color:'#CC3F40',
      fontSize:35,
  },

   });

