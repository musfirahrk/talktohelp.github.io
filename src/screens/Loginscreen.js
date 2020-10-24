import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Image } from 'react-native';

export default class Loginscreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
            source={require('../../assets/talktohelp.png')}
            style={styles.logo}
            resizeMode="contain"
            >
             </Image>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          onPress={()=>{this.props.navigation.push('Tab1')}}
          color='#CC3F40'
      style={styles.input}
      
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    borderBottomColor:'#CC3F40',
    borderRightColor:'#CC3F40',
    borderLeftColor:'#CC3F40',
    borderTopColor:'#CC3F40',
    borderBottomWidth:10,
    borderRightWidth:10,
    borderLeftWidth:10,
    borderTopWidth:10,

  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FF0000',
    marginBottom: 10,
  },

  button:{
    color:'#CC3F40',
    width:200,

  },
  
  logo:{
    width: 280,
    height: 280,
    marginLeft: '0%',
    marginTop: '10%'
  },
});