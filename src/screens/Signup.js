import React from "react";
import { View, Button, TextInput, StyleSheet,Image } from "react-native";

export default class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone_number: "",
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      // here place your signup logic
      console.log("user successfully signed up!: ", success);
    } catch (err) {
      console.log("error signing up: ", err);
    }
  };

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
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={(val) => this.onChangeText("username", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={(val) => this.onChangeText("password", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={(val) => this.onChangeText("email", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={(val) => this.onChangeText("phone_number", val)}
        />
        <Button title="Sign Up" onPress={()=>{this.props.navigation.push('Tab1')}}
        color='#CC3F40' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    backgroundColor: "#d3d3d3",
    margin: 9,
    padding: 8,
    color: "black",
    borderRadius: 15,
    fontSize: 18,
    fontWeight: "500",
  },

  container: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#CC3F40",
    borderRightColor: "#CC3F40",
    borderLeftColor: "#CC3F40",
    borderTopColor: "#CC3F40",
    borderBottomWidth: 10,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderTopWidth: 10,
  },
  logo:{
    width: 280,
    height: 210,
    marginLeft: '0%',
    marginTop: '0%'}
});