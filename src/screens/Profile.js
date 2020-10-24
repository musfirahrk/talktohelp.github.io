import * as React from 'react';
import { View, Text, SafeAreaView, Image, Button } from 'react-native';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
             <Image style={{width:280, height:280, marginTop:10}}
            source={require('../../assets/avatar.png')}
            resizeMode="contain"
            style={{width:280, height:280, marginTop:10,}}>
          
            </Image>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Name: Samrah Smith
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Email: 123@gmail.com
          </Text>

          <Button style={{ width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FF0000',
    marginBottom: 10,}}
          title={'Update Profile'}
          color='#CC3F40'
      
        />
        </View>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.talktohelp.org
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default ProfileScreen;